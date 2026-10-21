export const STACK_LABELS = [
  'JavaScript',
  'React',
  'Tailwind',
  'Node.js',
  'Express',
  'MySQL',
  'API',
] as const;

export type StackLabel = (typeof STACK_LABELS)[number];
