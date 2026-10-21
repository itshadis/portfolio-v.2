import { promises as fs } from 'fs';
import path from 'path';
import {
  experienceListSchema,
  projectListSchema,
  siteSchema,
  type ExperienceItem,
  type Project,
  type SiteContent,
} from './content-schema';

const contentDir = path.join(process.cwd(), 'content');

export type ContentFile = 'experience.json' | 'works.json' | 'site.json';

export async function readContentFile(name: ContentFile): Promise<unknown> {
  const raw = await fs.readFile(path.join(contentDir, name), 'utf8');
  return JSON.parse(raw);
}

export async function writeContentFile(name: ContentFile, data: unknown): Promise<void> {
  await fs.writeFile(path.join(contentDir, name), `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

export async function getExperiences(): Promise<ExperienceItem[]> {
  return experienceListSchema.parse(await readContentFile('experience.json'));
}

export async function getProjects(): Promise<Project[]> {
  return projectListSchema.parse(await readContentFile('works.json'));
}

export async function getSite(): Promise<SiteContent> {
  return siteSchema.parse(await readContentFile('site.json'));
}

export function cvHref(site: SiteContent): string {
  return `/documents/${encodeURIComponent(site.cvFilename)}`;
}
