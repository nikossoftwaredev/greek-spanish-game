import type { Metadata } from "next";

import { PracticeHub } from "@/components/practice/practice-hub";

export const metadata: Metadata = { title: "Παιχνίδια" };

const PracticePage = () => <PracticeHub />;

export default PracticePage;
