import { AppHeader } from "@/components/app-shell/app-header";
import { BottomNav } from "@/components/app-shell/bottom-nav";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-svh flex-col">
    <AppHeader />
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 pt-6 pb-28 md:pb-14">{children}</main>
    <BottomNav />
  </div>
);

export default MainLayout;
