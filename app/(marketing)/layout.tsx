import { ReactNode } from "react";

import Link from "next/link";

import MainNav from "@/app/(marketing)/_components/main-nav";
import { Icons } from "@/components/icons";
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
    <div className="flex min-h-screen flex-col grid-bg relative h-full w-full">
      <div
        className="absolute -z-10 bottom-0 left-0 right-0 top-0 
      bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
      bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] 
      [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      ></div>
      <header
        className="fixed w-full bg-background/95 z-50 backdrop-blur 
      supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container h-20 md:justify-between items-center flex py-6">
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
              href="/sign-in"
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
              href="/sign-up"
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
      <main className="flex-1 pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default MarketingLayout;
