import type { Metadata } from "next";

import { ProgressDashboard } from "@/components/progress/progress-dashboard";

export const metadata: Metadata = { title: "Πρόοδος" };

const ProgressPage = () => <ProgressDashboard />;

export default ProgressPage;
