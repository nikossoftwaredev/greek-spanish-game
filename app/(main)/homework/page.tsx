import type { Metadata } from "next";

import { HomeworkBoard } from "@/components/homework/homework-board";

export const metadata: Metadata = { title: "Εργασίες" };

const HomeworkPage = () => <HomeworkBoard />;

export default HomeworkPage;
