import { FaHtml5, FaReact, FaNodeJs, FaSass, FaGithub } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiJavascriptFill, RiBootstrapFill } from 'react-icons/ri';
import { SiTailwindcss, SiRedux, SiExpress, SiMysql } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import './index.scss';

function About() {
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
      icon: <TbApi size={40} />,
      tag: 'API'
    },
    {
      icon: <FaGithub size={40} />,
      tag: 'GitHub'
    }
  ]

  const softSkills = ["Problem Solving", "Fast Learner", "Analytical Thinking", "Teamwork", "Adaptability", "Time Management"]
  return (
    <section id='about'>
      <div className='about-section'>
        <h1 className='tag'>Who Am I?</h1>
        <div className='about-wrapper'>
          <div className='foto-wrapper'>
            <div className='foto-box'>
              <img className='foto' src="/undraw.svg" alt="" />
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
        <h1 className='tag'>Skill Set</h1>
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
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;