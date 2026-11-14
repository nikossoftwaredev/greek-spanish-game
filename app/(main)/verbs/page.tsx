import type { Metadata } from "next";

import { VerbsExplorer } from "@/components/verbs/verbs-explorer";

export const metadata: Metadata = { title: "Ρήματα" };

const VerbsPage = () => <VerbsExplorer />;

export default VerbsPage;
