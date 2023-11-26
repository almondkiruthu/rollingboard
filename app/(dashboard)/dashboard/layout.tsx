import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/icons";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { dashboardConfig } from "@/config/dashboard";
import { siteConfig } from "@/config/site";
import { UserButton } from "@clerk/nextjs";

interface DashBoardLayoutProps {
  children?: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header
        className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur 
      supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center py-6 md:justify-between">
          <Link href="/" className="items-center space-x-2 flex">
            <Icons.mainLogo className="hidden md:inline-block" />
            <span className="hidden font-bold md:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <div>
            <MainNav items={dashboardConfig.mainNav} />
          </div>
          <nav className="ml-auto md:ml-0">
            <UserButton afterSignOutUrl="/" />
          </nav>
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
