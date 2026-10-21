export const STACK_LABELS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue',
  'Nuxt',
  'React Native',
  'Flutter',
  'Tailwind',
  'Node.js',
  'Express',
  'MySQL',
  'PostgreSQL',
  'API',
] as const;

export type StackLabel = (typeof STACK_LABELS)[number];
