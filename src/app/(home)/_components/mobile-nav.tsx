import * as React from "react";

import Link from "next/link";

import { Icons } from "../../../components/icons";
import { Separator } from "../../../components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";

interface MobileNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MobileNav = ({ items, children }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-75 transition">
        <Icons.menu />
      </SheetTrigger>
      <SheetContent side="left" className="pl-1">
        <div className="flex flex-col gap-y-2 items-center">
          <Link href="/" className="flex items-center space-x-2 w-full pl-5">
            <Icons.mainLogo />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <Separator className="my-2 ml-8" />
          <nav className="flex flex-col items-center justify-center text-sm gap-y-2">
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
