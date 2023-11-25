import Link from "next/link";
import { notFound } from "next/navigation";

import { Icons } from "@/components/icons";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import UserAccountNav from "@/components/user-account-nav";
import { dashboardConfig } from "@/config/dashboard";
import { siteConfig } from "@/config/site";
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
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
            />
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
