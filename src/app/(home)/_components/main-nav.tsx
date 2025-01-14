"use client";

import * as React from "react";

import Link from "next/link";

import MobileNav from "./mobile-nav";
import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const MainNav = ({ items, children }: MainNavProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                // item.href.startsWith(`/${segment}`)
                //   ? "text-foreground"
                //   : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <MobileNav items={items}>{children}</MobileNav>
    </div>
  );
};

export default MainNav;
