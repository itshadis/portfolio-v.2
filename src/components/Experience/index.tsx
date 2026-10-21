'use client';

import './index.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ExperienceItem } from '@/lib/content-schema';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  items: ExperienceItem[];
}

function Experience({ items }: ExperienceProps) {
  useEffect(() => {
    gsap.to('.barrier', {
      y: '100%',
      ease: 'power2.out',
      duration: 6,
      scrollTrigger: {
        trigger: '.barrier',
        start: 'top 70%',
      },
    });
  }, []);

  return (
    <section id="experience">
      <div className="barrier"></div>
      <h1 className="tag">My Experience</h1>
      <div className="experience-wrapper">
        <div className="line"></div>
        <div className="line2"></div>
        {items.map((item, index) => (
          <div key={index} className="card-container">
            <div className={`card-wrapper${index % 2 === 0 ? '' : '2'}`}>
              <span className={`node${index % 2 === 0 ? '' : '2'}`}></span>
              <span className={`date${index % 2 === 0 ? '' : '2'}`}>{item.date}</span>
              <div className={`card${index % 2 === 0 ? '' : '2'}`}>
                <h4 className="title">{item.title}</h4>
                <p>{item.company}</p>
                <hr />
                <table>
                  <tbody>
                    {item.describe.map((desc, idx) => (
                      <tr key={idx} className="list-describe">
                        <td className="strip">-</td>
                        <td>{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
