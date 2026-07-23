'use client';

import './index.scss';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  describe: string[];
}

const exp: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Freelance – Remote",
    date: "Mar, 2026 – Present",
    describe: [
      "Building a web-based Estimator System for Citra Mandiri Negara (Printhink).",
      "Developing scalable and maintainable frontend architecture using Next.js.",
      "Utilizing Ant Design for consistent UI/UX and Zustand for efficient state management.",
      "Enhancing application performance and usability through modern frontend best practices.",
      "Deployed frontend to VPS, configured Nginx, and implemented SSL/HTTPS for secure access.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "PT Sinar Sakti Internasional – Jakarta, Indonesia",
    date: "Feb, 2025 – Present",
    describe: [
      "Developing and maintaining the Puskeu Presisi 5.0 Polri application.",
      "Maintaining and refactoring code built with Python and Django.",
      "Utilizing Next.js and TypeScript for new project front-end development.",
      "Contributing to building a reusable UI component library for internal use.",
      "Translated Figma designs into clean, maintainable, and scalable frontend code.",
      "Collaborated with backend teams to integrate RESTful APIs across Puskeu Polri applications.",
      "Created landing page companies profile using Astro.js & React.js.",
      "Occasionally analyzed existing application business flow to support revamp initiatives.",
    ],
  },
  {
    title: "Programmer",
    company: "PT EDI Indonesia – Jakarta, Indonesia",
    date: "Nov, 2023 – Dec, 2024",
    describe: [
      "Fixed bugs and added new features in the Ceisa 4.0 customs application.",
      "Maintained and ensured the smooth operation of the Ceisa 4.0 customs application using React.js and Ant Design.",
      "Refactored code based on SonarQube scanner recommendations.",
      "Conducted UAT (User Acceptance Testing) with System Analyst and QA teams.",
      "Used Redux and Context API for state management in the application.",
      "Utilized GitLab for version control and collaborative development.",
      "Contributed to technological innovations in customs (preview/upload image, PDF document, multi-tab browser features).",
      "Assisted in creating documentation from the frontend side.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Freelance – Remote",
    date: "Sep, 2023 – Dec, 2024",
    describe: [
      "Developed a Decision Support System (DSS) to identify top-performing employees at PT Samco Farma.",
      "Implemented the Simple Additive Weighting methodology for calculating best employees in a web-based application.",
      "Designed and optimized relational database schemas for assessment criteria, weights, and employee data.",
      "Designed and built a web-based application integrating both frontend and backend functionalities.",
    ],
  },
  {
    title: "Team Buddy Frontend Developer",
    company: "Harisenin.com – Jakarta, Indonesia",
    date: "Feb, 2024 – May, 2024",
    describe: [
      "Assisted students throughout the bootcamp program, addressing any challenges encountered during training.",
      "Provided guidance and support to ensure students' success in their learning journey.",
      "Led students' teams in developing the front-end of their final project, offering clear direction.",
      "Helped students refine their front-end skills and achieve project goals with practical advice.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "Harisenin.com – Jakarta, Indonesia",
    date: "May, 2023 – Sep, 2023",
    describe: [
      "Built car rental application web-based as final project (V-Rent) with MERN stack.",
      "Relevant Course Work: HTML, CSS, JavaScript, React.js, Redux, TypeScript, Node.js, Express.js, and MySQL.",
    ],
  },
];

function Experience() {
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
