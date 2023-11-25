import { notFound } from "next/navigation";

import SiteFooter from "@/components/site-footer";
import getCurrentUser from "@/lib/session";

interface DashBoardLayoutProps {
  children?: React.ReactNode;
}

const DashBoardLayout = async ({ children }: DashBoardLayoutProps) => {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header
        className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur 
      supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center py-4">
          {/* Insert main nav */}
          {/* Create User Acount Nav */}
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          {/* Create Dashboard Side-Nav  */}
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
};

export default DashBoardLayout;
