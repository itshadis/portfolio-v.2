'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Work from '../components/Works';

gsap.registerPlugin(useGSAP);

export default function Home() {
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
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
