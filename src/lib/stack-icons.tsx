import type { IconType } from 'react-icons';
import { FaCode, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiExpress, SiMysql, SiTailwindcss } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import type { StackLabel } from './stack-labels';

const STACK_ICONS: Record<StackLabel, IconType> = {
  JavaScript: RiJavascriptFill,
  React: FaReact,
  Tailwind: SiTailwindcss,
  'Node.js': FaNodeJs,
  Express: SiExpress,
  MySQL: SiMysql,
  API: TbApi,
};

function StackIcon({ label }: { label: string }) {
  const Icon = STACK_ICONS[label as StackLabel] ?? FaCode;
  return <Icon />;
}

export default StackIcon;
