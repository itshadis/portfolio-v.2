import { z } from 'zod';
import { PROJECT_GROUPS } from './project-groups';
import { STACK_LABELS } from './stack-labels';

export const experienceSchema = z.object({
  title: z.string().min(1),
  company: z.string().min(1),
  date: z.string().min(1),
  describe: z.array(z.string().min(1)),
});

export const experienceListSchema = z.array(experienceSchema);

export const projectSchema = z.object({
  group: z.enum(PROJECT_GROUPS),
  img: z.string().min(1),
  title: z.string().min(1),
  detail: z.string().min(1),
  stack: z.array(z.enum(STACK_LABELS)).min(1),
  link: z.string().startsWith('http'),
});

export const projectListSchema = z.array(projectSchema);

export const siteSchema = z.object({
  cvFilename: z.string().min(1),
});

export type ExperienceItem = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type SiteContent = z.infer<typeof siteSchema>;
