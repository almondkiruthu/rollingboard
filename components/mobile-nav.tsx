import * as React from "react";

import Link from "next/link";

import { Icons } from "./icons";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";

interface MobileNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const MobileNav = ({ items, children }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Icons.menu />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-y-4 w-full items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 border-b w-full pb-4"
          >
            <Icons.mainLogo />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
