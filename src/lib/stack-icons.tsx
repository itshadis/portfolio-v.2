import type { IconType } from 'react-icons';
import { FaCode, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiExpress, SiMysql, SiPostgresql, SiTailwindcss } from 'react-icons/si';
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
  React: FaReact,
  'Next.js': TbBrandNextjs,
  Vue: TbBrandVue,
  Nuxt: TbBrandNuxt,
  'React Native': TbBrandReactNative,
  Flutter: TbBrandFlutter,
  Tailwind: SiTailwindcss,
  'Node.js': FaNodeJs,
  Express: SiExpress,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  API: TbApi,
};

function StackIcon({ label }: { label: string }) {
  const Icon = STACK_ICONS[label as StackLabel] ?? FaCode;
  return <Icon />;
}

export default StackIcon;
