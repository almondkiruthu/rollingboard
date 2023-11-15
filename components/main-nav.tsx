import * as React from "react";

import Link from "next/link";

import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { MainNavItem } from "@/types";

interface MainNavProps {
  items?: MainNavItem[];
  children: React.ReactNode;
}

const MainNav = ({ items, children }: MainNavProps) => {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.mainLogo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
};

export default MainNav;
