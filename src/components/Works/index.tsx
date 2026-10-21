'use client';

import { useState } from 'react';
import ListWorks from './ListWorks';
import type { Project } from '@/lib/content-schema';
import { PROJECT_GROUPS, PROJECT_GROUP_LABELS, type ProjectGroup } from '@/lib/project-groups';
import './index.scss';

interface WorkProps {
  projects: Project[];
}

function Work({ projects }: WorkProps) {
  const [group, setGroup] = useState<ProjectGroup>("professional");
  const shown = projects.filter((item) => item.group === group);

  return (
    <section id="projects">
      <h1 className="tag">My Projects</h1>
      <div className="group-tabs">
        {PROJECT_GROUPS.map((g) => (
          <button key={g} className={group === g ? 'active' : ''} onClick={() => setGroup(g)}>
            {PROJECT_GROUP_LABELS[g]}
          </button>
        ))}
      </div>
      <div className="work-container">
        {shown.map((item, index) => (
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
        {shown.length === 0 && <p className="empty">No projects in this group yet.</p>}
      </div>
    </section>
  );
}

export default Work;
