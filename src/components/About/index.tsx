'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './index.scss';

import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiAntdesign,
  SiPostman,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiGo,
  SiAstro,
  SiFigma,
  SiNginx,
  SiSonarqube,
} from 'react-icons/si';
import { FaHtml5, FaReact, FaNodeJs, FaSass, FaGithub, FaPhp, FaLaravel, FaGitAlt, FaJira } from 'react-icons/fa';
import { RiJavascriptFill, RiBootstrapFill } from 'react-icons/ri';
import { BsBarChartFill } from 'react-icons/bs';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoCss3 } from 'react-icons/io';
import { FiGitlab } from 'react-icons/fi';
import { TbApi } from 'react-icons/tb';

interface SkillIcon {
  icon: React.ReactNode;
  tag: string;
  top?: string | number;
  left?: string | number;
}

const SOFT_SKILL: string[] = [
  "Problem Solving",
  "Fast Learner",
  "Analytical Thinking",
  "Teamwork",
  "Adaptability",
  "Time Management",
];

const ICONS: SkillIcon[] = [
  { icon: <FaHtml5 size={40} />, tag: 'HTML' },
  { icon: <IoLogoCss3 size={40} />, tag: 'CSS' },
  { icon: <RiJavascriptFill size={40} />, tag: 'JavaScript' },
  { icon: <BiLogoTypescript size={40} />, tag: 'TypeScript' },
  { icon: <FaReact size={40} />, tag: 'React.js' },
  { icon: <SiNextdotjs size={40} />, tag: 'Next.js' },
  { icon: <SiAstro size={40} />, tag: 'Astro.js' },
  { icon: <FaPhp size={40} />, tag: 'PHP' },
  { icon: <FaLaravel size={40} />, tag: 'Laravel' },
  { icon: <SiPython size={40} />, tag: 'Python' },
  { icon: <SiDjango size={40} />, tag: 'Django' },
  { icon: <SiGo size={40} />, tag: 'Golang' },
  { icon: <SiTailwindcss size={40} />, tag: 'TailwindCSS' },
  { icon: <RiBootstrapFill size={40} />, tag: 'Bootstrap' },
  { icon: <SiAntdesign size={40} />, tag: 'AntDesign' },
  { icon: <SiRedux size={40} />, tag: 'Redux' },
  { icon: <FaNodeJs size={40} />, tag: 'Node.js' },
  { icon: <SiExpress size={40} />, tag: 'Express.js' },
  { icon: <SiMysql size={40} />, tag: 'MySQL' },
  { icon: <SiPostgresql size={40} />, tag: 'PostgreSQL' },
  { icon: <TbApi size={40} />, tag: 'RESTful API' },
  { icon: <FaGitAlt size={40} />, tag: 'Git' },
  { icon: <FaGithub size={40} />, tag: 'GitHub' },
  { icon: <FiGitlab size={40} />, tag: 'GitLab' },
  { icon: <SiFigma size={40} />, tag: 'Figma' },
  { icon: <SiNginx size={40} />, tag: 'Nginx' },
  { icon: <SiSonarqube size={40} />, tag: 'SonarQube' },
  { icon: <BsBarChartFill size={40} />, tag: 'ApexCharts' },
  { icon: <FaJira size={40} />, tag: 'Jira' },
];

gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        '.tag-about',
        {
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tag-about',
            markers: false,
          },
        }
      );

      gsap.from(
        '.tag-skill',
        {
          opacity: 0,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tag-skill',
            markers: false,
          },
        }
      );

      gsap.from(
        '.about-wrapper',
        {
          y: 200,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-wrapper',
            markers: false,
          },
        }
      );

      gsap.from(
        '.icon',
        {
          scale: 0,
          ease: 'elastic.out(1, 1)',
          yoyo: true,
          delay: () => gsap.utils.random(0, 1),
          scrollTrigger: {
            trigger: '.icon',
            start: 'top 90%',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="about">
      <div className="about-section">
        <h1 className="tag-about">Who Am I?</h1>
        <div className="about-wrapper">
          <div className="foto-wrapper">
            <div className="foto-box">
              <img className="foto" src="/images/undraw.svg" alt="Hadis" />
            </div>
          </div>

          <div className="about-me-wrapper">
            <div className="about-me">
              <p>
                Hi, my name is <strong>Hadis</strong>. I graduated with a Bachelor's Degree in Informatics Engineering from <strong>Pamulang University</strong> (GPA 3.53 / 4.00).
              </p>
              <p>
                I am an experienced <strong>Frontend Developer</strong> with expertise in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Astro.js, TailwindCSS, PHP (Laravel), and Python (Django). I have a high passion for building modern, performant, clean, and scalable web applications.
              </p>
              <p>
                Currently, I work as a Frontend Developer at <strong>PT Sinar Sakti Internasional</strong> in Jakarta, while also working on freelance projects building modern web architectures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-section">
        <h1 className="tag-skill">Skill Set</h1>
        <div className="skill-wrapper">
          <div className="technical-skill">
            <h3>Technical Skills</h3>
            <div className="skill-icon-wrapper">
              {ICONS.map((item, i) => (
                <span className="icon" style={{ top: item.top, left: item.left }} key={i}>
                  {item.icon}
                  <span className="text-icon">{item.tag}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="soft-skill">
            <h3>Soft Skills</h3>
            <div className="soft-skill-wrapper">
              {SOFT_SKILL.map((item, i) => (
                <p className="skill" key={i}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
