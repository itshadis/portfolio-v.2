import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './index.scss';

import { SiTailwindcss, SiRedux, SiExpress, SiMysql, SiPostgresql, SiAntdesign, SiDevexpress, SiPostman } from 'react-icons/si';
import { FaHtml5, FaReact, FaNodeJs, FaSass, FaGithub, FaPhp, FaLaravel, FaGitAlt, FaJira } from 'react-icons/fa';
import { RiJavascriptFill, RiBootstrapFill } from 'react-icons/ri';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoCss3 } from 'react-icons/io';
import { FiGitlab } from 'react-icons/fi';
import { TbApi } from 'react-icons/tb';

const icons = [
  {
    icon: <FaHtml5 size={40} />,
    tag: 'HTML'
  },
  {
    icon: <IoLogoCss3 size={40} />,
    tag: 'CSS'
  },
  {
    icon: <RiJavascriptFill size={40} />,
    tag: 'Javascript'
  },
  {
    icon: <BiLogoTypescript size={40} />,
    tag: 'Typescript'
  },
  {
    icon: <FaPhp size={40} />,
    tag: 'PHP'
  },
  {
    icon: <FaLaravel size={40} />,
    tag: 'Laravel'
  },
  {
    icon: <FaSass size={40} />,
    tag: 'SASS'
  },
  {
    icon: <RiBootstrapFill size={40} />,
    tag: 'Bootstrap'
  },
  {
    icon: <SiTailwindcss size={40} />,
    tag: 'TailwindCSS'
  },
  {
    icon: <SiAntdesign size={40} />,
    tag: 'AntDesign'
  },
  {
    icon: <SiDevexpress size={40} />,
    tag: 'DevExpress'
  },
  {
    icon: <FaReact size={40} />,
    tag: 'React.js'
  },
  {
    icon: <SiRedux size={40} />,
    tag: 'Redux'
  },
  {
    icon: <FaNodeJs size={40} />,
    tag: 'Node.js'
  },
  {
    icon: <SiExpress size={40} />,
    tag: 'Express.js'
  },
  {
    icon: <SiMysql size={40} />,
    tag: 'MySQL'
  },
  {
    icon: <SiPostgresql size={40} />,
    tag: 'PostgreSQL'
  },
  {
    icon: <TbApi size={40} />,
    tag: 'API'
  },
  {
    icon: <FaGitAlt  size={40} />,
    tag: 'Git'
  },
  {
    icon: <FaGithub size={40} />,
    tag: 'GitHub'
  },
  {
    icon: <FiGitlab size={40} />,
    tag: 'GitLab'
  },
  {
    icon: <SiPostman size={40} />,
    tag: 'Postman'
  },
  {
    icon: <FaJira size={40} />,
    tag: 'Jira'
  },
]

const softSkills = ["Problem Solving", "Fast Learner", "Analytical Thinking", "Teamwork", "Adaptability", "Time Management"]

gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef()

  useEffect(() => {
    // Ensure GSAP runs after the component is mounted
    const ctx = gsap.context(() => {
      gsap.from(
        '.tag-about', 
        {
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tag-about', // Element to trigger the animation
            markers: false, // Enable to debug the scroll behavior
            // start: 'bottom center', // When the top of the element reaches the center of the viewport
          },
        }
      )

      gsap.from(
        '.tag-skill',
        {
          opacity: 0,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tag-skill', 
            markers: false, 
            // start: 'bottom center', 
          },
        }
      )

      gsap.from(
        '.about-wrapper',
        {
          y: 200,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-wrapper',
            markers: false
          }
        }
      )

      gsap.from(
        '.icon',
        {
          scale: 0,
          ease: 'elastic.out(1, 1)',
          yoyo: true,
          delay: () => gsap.utils.random(0, 1),
          scrollTrigger: {
            trigger: '.icon',
            // markers: true,
            start: 'top 90%'
          }
        }
      )

    }, container)

    return () => ctx.revert() // Clean up GSAP context when the component unmounts
  }, [])

  return (
    <section ref={container} id='about'>
      <div className='about-section'>
        <h1 className='tag-about'>Who Am I?</h1>
        <div className='about-wrapper'>
          <div className='foto-wrapper'>
            <div className='foto-box'>
              <img className='foto' src="/images/undraw.svg" alt="" />
            </div>
          </div>

          <div className='about-me-wrapper'>
            <div className='about-me'>
              <p>Hi, my name is Hadis and i have recently completed a Bachelor of Computer Science, majoring in Informatics Engineering at Pamulang University.
              </p>
              <p>I have passion for all things technology especially programming. I love coding, its a pride of being able to translate ideas into code. Now i'm so enthusiast with React.js for developing of front-end web applications.
              </p>
              <p>I also creating back-end or full stack web apps with MERN(MYSQL/MongoDB, Express, React, Node) stack.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='skill-section'>
        <h1 className='tag-skill'>Skill Set</h1>
        <div className='skill-wrapper'>
          <div className='technical-skill'>
            <h3>Technical Skills</h3>
            <div className='skill-icon-wrapper'>
              {icons.map((item, i) => (
                <span className='icon' style={{top: item.top, left: item.left}} key={i}>{item.icon}
                  <span className='text-icon'>{item.tag}</span>
                </span>
              ))}
            </div>
          </div>

          <div className='soft-skill'>
            <h3>Soft Skills</h3>
            <div className='soft-skill-wrapper'>
              {softSkills.map((item, i) => (
                <p className='skill' key={i}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;