import type { Metadata } from "next";

import { GrammarChecklist } from "@/components/grammar/grammar-checklist";

export const metadata: Metadata = { title: "Γραμματική" };

const GrammarPage = () => <GrammarChecklist />;

export default GrammarPage;
