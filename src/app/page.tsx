import Home from '@/components/Home';
import { cvHref, getExperiences, getProjects, getSite } from '@/lib/content';

export default async function Page() {
  const [experiences, projects, site] = await Promise.all([
    getExperiences(),
    getProjects(),
    getSite(),
  ]);

  return <Home experiences={experiences} projects={projects} cvHref={cvHref(site)} />;
}
