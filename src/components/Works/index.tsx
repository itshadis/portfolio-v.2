import ListWorks from './ListWorks';
import type { Project } from '@/lib/content-schema';
import './index.scss';

interface WorkProps {
  projects: Project[];
}

function Work({ projects }: WorkProps) {
  return (
    <section id="projects">
      <h1 className="tag">My Projects</h1>
      <div className="work-container">
        {projects.map((item, index) => (
          <div
            key={index}
            style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}
            className="work-wrapper"
          >
            <ListWorks
              img={item.img}
              title={item.title}
              detail={item.detail}
              stack={item.stack}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
