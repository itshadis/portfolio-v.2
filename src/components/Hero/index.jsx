import gsap from 'gsap';
import CV from './CV';
import './index.scss';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { use } from 'react';

gsap.registerPlugin(useGSAP)

function Hero() {
  const container = useRef()

  useGSAP(
    () => {
      gsap.from(
        '.hero-details',
        {
          x: -500,
          opacity: 0,
          duration: 3,
          ease: 'power4.out'
        }
      )

      gsap.from(
        '.cv-wrapper',
        {
          x: -500,
          opacity: 0,
          duration: 3,
          delay: 1,
          ease: 'power4.out'
        }
      )
    }, { scope: container }
  )

  return (
    <section ref={container} id='hero'>
      <div className='hero-details'>
        <p>Hello there, I am</p>
        <h1>Hadis</h1>
        <p>A Front-End Web Developer,</p>
        <p>Based on Tangerang, Indonesia.</p>
      </div>

      <CV className="cv" />
    </section>
  )
}

export default Hero;