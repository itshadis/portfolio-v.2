import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import About from './components/About';
import Exprerience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Work from './components/Works';
import './utils/font/Rajdhani-Regular.ttf'
import './App.scss';


gsap.registerPlugin(useGSAP)

function App() {
  const container = useRef()

  useGSAP(
    () => {
      gsap.fromTo(
        container.current, 
        { 
          opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'power3.out'
        }
      )
    },
    { scope: container }
  )

  return (
    <div ref={container} className='wrapper'>
      <div className='light-animate'></div>
      <Navbar />
      <Hero />
      <About />
      <Exprerience />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
