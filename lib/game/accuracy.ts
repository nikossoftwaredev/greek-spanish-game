/** Share of the drills of a lesson the learner answered right, or `null` when none was answered yet. */
export const accuracyOf = ({
  stats,
  lessonKey,
}: {
  stats: Record<string, { right: number; wrong: number }>;
  /** `1:genero` for an Aula lesson, `gu:50` for a Gramática de uso unit. */
  lessonKey: string;
}): number | null => {
  const prefix = `${lessonKey}:`;
  let right = 0;
  let wrong = 0;
  for (const [key, value] of Object.entries(stats)) {
    if (!key.startsWith(prefix)) continue;
    right += value.right;
    wrong += value.wrong;
  }
  if (right + wrong === 0) return null;
  return Math.round((right / (right + wrong)) * 100);
};

export const accuracyTone = (accuracy: number): string => {
  if (accuracy >= 80) return "text-success";
  if (accuracy >= 50) return "text-sun-edge";
  return "text-destructive";
};
