import { ReactNode } from "react";

import Link from "next/link";

import { Icons } from "@/components/icons";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="h-20 md:justify-between items-center flex py-6">
          <Link href="/" className="items-center space-x-2 flex">
            <Icons.mainLogo className="hidden md:inline-block" />
            <span className="hidden font-bold md:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <div className="flex h-20 items-center py-6">
            <MainNav items={marketingConfig.mainNav} />
          </div>
          <nav className="flex gap-x-4 ml-auto md:ml-0">
            <Link
              href="/login"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                "px-4"
              )}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                }),
                "px-4 border-white"
              )}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default MarketingLayout;
