import './index.scss';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Experience() {

  useEffect(() => {
    gsap.to('.barrier', {
      y: '100%', // Move the barrier to the bottom
      ease: 'power2.out',
      duration: 6, // Duration of the animation
      scrollTrigger: {
        markers: true,
        trigger: '.barrier', // Element to observe
        start: 'top 70%', // Start the animation when the top of .barrier hits the center of the viewport
      },
    });
  }, []);

  const exp = [
    {
      title: 'Student Full Stack Development',
      company: "Harisenin.com",
      date: 'May, 2023 - Sep, 2023',
      skill: 'Course : Front-End Web Development (React.js)',
      describe: [
        "Learn how to develop fullstack web application and work together as a team to develop the project.",
        "Developed car rental application web based as final project, built with MERN(MySQL, Express.js, React.js, Node.js) and some libraries inside to ease developed the application."
      ]
    },
    {
      title: 'Fullstack Web Developer',
      company: "Freelance",
      date: 'Sep, 2023 - Dec, 2023',
      skill: 'Full Stack Web Development (MySQL, Express, React, Node)',
      describe: [
        "Created a Decision Support System (DSS) to select best employees at PT Samco Farma.",
        "Implemented the Simple Additive Weighting methodology for calculate best employees in a web based application."
      ]
    },
    {
      title: 'Team Buddy Frontend Developer',
      company: "Harisenin.com",
      date: 'Feb, 2024 - May, 2024',
      skill: 'Full Stack Web Development (MySQL, Express, React, Node)',
      describe: [
        "Assisted students throughout the bootcamp program, addressing any challenges they encountered during the training.",
        "Provided guidance and support to ensure students' success in their learning journey.",
        "Led students' teams in developing the front-end of their final project, offering clear direction.",
        "Helped students refine their front-end skills and achieve project goals by providing practical advice and solutions."
      ]
    },
    {
      title: 'Frontend Developer',
      company: "PT Electronic Data Interchange Indonesia",
      date: 'Nov, 2023 - Dec, 2024',
      skill: 'Full Stack Web Development (MySQL, Express, React, Node)',
      describe: [
        "Fixed bugs in the Ceisa 4.0 customs application.",
        "Added new features to the Ceisa 4.0 customs application.",
        "Maintained and ensured the smooth operation of the Ceisa 4.0 customs application.",
        "Utilized React.js and Ant Design for application development.",
        "Refactored code based on SonarQube scanner.",
        "Conducted UAT (User Acceptance Testing) with the System Analyst and QA teams.",
        "Used Redux and Context API for state management in the application.",
        "Utilized GitLab for version control and collaborative development.",
        "Contributed to technological innovations in customs, such as developing preview and upload image, PDF document, and multi-tab browser features.",
        "Occasionally participated in meetings with field users from the customs department.",
        "Assisted in creating documentation from the frontend side."
      ]
    },
  ]

  return (
    <section id="experience">
      <div className="barrier"></div>
      <h1 className="tag">My Experience</h1>
      <div className="experience-wrapper">
        <div className="line"></div>
        <div className="line2"></div>
        {exp.map((item, index) => (
          <div key={index} className="card-container">
            <div className={`card-wrapper${index % 2 === 0 ? '' : '2'}`}>
              <span className={`node${index % 2 === 0 ? '' : '2'}`}></span>
              <span className={`date${index % 2 === 0 ? '' : '2'}`}>{item.date}</span>
              <div className={`card${index % 2 === 0 ? '' : '2'}`}>
                <h4 className="title">{item.title}</h4>
                <p>{item.company}</p>
                <hr />
                  <table>
                    {item.describe.map((desc, idx) => (
                      <tr className='list-describe'>
                        <td className='strip'>-</td>
                        <td>{desc}</td>
                      </tr>
                    ))}
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