'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import About from '../About';
import Experience from '../Experience';
import Contact from '../Contact';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Work from '../Works';
import type { ExperienceItem, Project } from '@/lib/content-schema';

gsap.registerPlugin(useGSAP);

interface HomeProps {
  experiences: ExperienceItem[];
  projects: Project[];
  cvHref: string;
}

export default function Home({ experiences, projects, cvHref }: HomeProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (container.current) {
        gsap.fromTo(
          container.current,
          {
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: 'power3.out',
            onComplete: () => {
              if (container.current) {
                gsap.set(container.current, { clearProps: 'transform' });
              }
            },
          }
        );
      }
    },
    { scope: container }
  );

  return (
    <>
      <Navbar />
      <div ref={container} className="wrapper">
        <div className="light-animate"></div>
        <Hero cvHref={cvHref} />
        <About />
        <Experience items={experiences} />
        <Work projects={projects} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
