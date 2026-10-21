export const PROJECT_GROUPS = ["professional", "self"] as const;

export type ProjectGroup = (typeof PROJECT_GROUPS)[number];

export const PROJECT_GROUP_LABELS: Record<ProjectGroup, string> = {
  professional: 'Professional Projects',
  self: 'Self Project',
};
