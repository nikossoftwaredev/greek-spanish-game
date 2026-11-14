import { useHomeworkStore } from "@/lib/stores/homework-store";
import { useProgressStore } from "@/lib/stores/progress-store";

/**
 * The learner finished a numbered exercise ("50.2") inside the app: tick it, and when the homework
 * task it belongs to now has all its exercises ticked, mark the task done too.
 */
export const finishExercise = ({ exercise, homeworkId }: { exercise: string; homeworkId?: string }): void => {
  useProgressStore.getState().markExercises([exercise]);
  if (!homeworkId) return;
  const task = useHomeworkStore.getState().tasks.find((candidate) => candidate.id === homeworkId);
  const gu = task?.gu;
  if (!task || !gu) return;
  const done = useProgressStore.getState().doneExercises;
  if (gu.exercises.every((number) => done.includes(`${gu.unit}.${number}`))) useHomeworkStore.getState().markDone(task.id);
};
