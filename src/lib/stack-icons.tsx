import type { IconType } from 'react-icons';
import { BsBarChartFill } from 'react-icons/bs';
import {
  FaCode,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJira,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
} from 'react-icons/fa';
import { FiGitlab } from 'react-icons/fi';
import { IoLogoCss3 } from 'react-icons/io';
import { RiBootstrapFill, RiJavascriptFill } from 'react-icons/ri';
import {
  SiAntdesign,
  SiAstro,
  SiDjango,
  SiExpress,
  SiFigma,
  SiGo,
  SiMysql,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiRedux,
  SiSonarqube,
  SiTailwindcss,
} from 'react-icons/si';
import {
  TbApi,
  TbBrandFlutter,
  TbBrandNextjs,
  TbBrandNuxt,
  TbBrandReactNative,
  TbBrandTypescript,
  TbBrandVue,
} from 'react-icons/tb';
import type { StackLabel } from './stack-labels';

const STACK_ICONS: Record<StackLabel, IconType> = {
  JavaScript: RiJavascriptFill,
  TypeScript: TbBrandTypescript,
  HTML: FaHtml5,
  CSS: IoLogoCss3,
  PHP: FaPhp,
  Python: SiPython,
  Golang: SiGo,
  React: FaReact,
  'Next.js': TbBrandNextjs,
  Vue: TbBrandVue,
  Nuxt: TbBrandNuxt,
  Astro: SiAstro,
  'React Native': TbBrandReactNative,
  Flutter: TbBrandFlutter,
  Tailwind: SiTailwindcss,
  Bootstrap: RiBootstrapFill,
  'Ant Design': SiAntdesign,
  Redux: SiRedux,
  'Node.js': FaNodeJs,
  Express: SiExpress,
  Laravel: FaLaravel,
  Django: SiDjango,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  API: TbApi,
  Git: FaGitAlt,
  GitHub: FaGithub,
  GitLab: FiGitlab,
  Figma: SiFigma,
  Nginx: SiNginx,
  SonarQube: SiSonarqube,
  ApexCharts: BsBarChartFill,
  Jira: FaJira,
};

function StackIcon({ label }: { label: string }) {
  const Icon = STACK_ICONS[label as StackLabel] ?? FaCode;
  return <Icon />;
}

export default StackIcon;
