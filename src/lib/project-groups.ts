export const PROJECT_GROUPS = ['self', 'professional'] as const;

export type ProjectGroup = (typeof PROJECT_GROUPS)[number];

export const PROJECT_GROUP_LABELS: Record<ProjectGroup, string> = {
  self: 'Self Project',
  professional: 'Professional Projects',
};
