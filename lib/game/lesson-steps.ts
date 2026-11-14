import type { FlatLesson } from "@/lib/content/selectors";
import { buildSession, exampleOrder, isOrderable, type LearnerSnapshot } from "@/lib/game/builders";
import type { Exercise, OrderExercise } from "@/lib/game/types";

/** One screen of the step-by-step lesson. Teaching steps point into the lesson by index. */
export type LessonStep =
  | { kind: "intro" }
  | { kind: "rule"; ruleIndex: number }
  | { kind: "check"; exercise: OrderExercise }
  | { kind: "table"; tableIndex: number }
  | { kind: "tips" }
  | { kind: "quiz"; exercise: Exercise }
  | { kind: "done" };

const QUIZ_SIZE = 4;

/**
 * Intro, then each rule followed by a "rebuild the example" check, then the tables and tips, then a
 * short quiz made of the lesson's own drills. With more than 4 rules the check comes after every
 * second rule, so a long lesson stays a few minutes.
 */
export const buildLessonSteps = ({ entry, learner }: { entry: FlatLesson; learner: LearnerSnapshot }): LessonStep[] => {
  const { lesson } = entry;
  const unitId = entry.book === "aula" ? entry.unitId : undefined;
  const checkEvery = lesson.rules.length > 4 ? 2 : 1;
  const steps: LessonStep[] = [{ kind: "intro" }];

  lesson.rules.forEach((rule, ruleIndex) => {
    steps.push({ kind: "rule", ruleIndex });
    const isCheckpoint = (ruleIndex + 1) % checkEvery === 0 || ruleIndex === lesson.rules.length - 1;
    const example = [...(rule.examples ?? [])].reverse().find(isOrderable);
    if (isCheckpoint && example) steps.push({ kind: "check", exercise: exampleOrder({ example, unitId }) });
  });

  (lesson.tables ?? []).forEach((_, tableIndex) => steps.push({ kind: "table", tableIndex }));
  if (lesson.tipsEl && lesson.tipsEl.length > 0) steps.push({ kind: "tips" });

  const quiz = buildSession({ config: { mode: "grammar", unitIds: [], lesson: entry.key }, learner }).slice(0, QUIZ_SIZE);
  quiz.forEach((exercise) => steps.push({ kind: "quiz", exercise }));

  steps.push({ kind: "done" });
  return steps;
};
