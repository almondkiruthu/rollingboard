"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { OrganizationSideBarNav } from "@/types";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const routes: OrganizationSideBarNav = {
    organizationSideBarNav: [
      {
        label: "Projects",
        icon: "boards",
        href: `/organization/${organization.id}`,
      },
      {
        label: "Activity",
        icon: "activity",
        href: `/organization/${organization.id}/activity`,
      },
      {
        label: "Settings",
        icon: "settings",
        href: `/organization/${organization.id}/settings`,
      },
      {
        label: "Billing",
        icon: "billing",
        href: `/organization/${organization.id}/billing`,
      },
    ],
  };

  const onClick = (href: string) => {
    router.push(href);
  };
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-cyan-500/10 text-cyan-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="organization"
              className="rounded-sm object-cover"
            />
            <span className="font-medium text-sm">{organization.name}</span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.organizationSideBarNav.map((route) => (
          <Button
            key={route.label}
            size="sm"
            onClick={() => onClick(route.href)}
            className={cn(
              "w-full font-normal justify-start pl-10 mb-1",
              pathname === route.href && "bg-cyan-500/10 text-cyan-700"
            )}
            variant="ghost"
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default NavItem;

interface SkeletonNavItemProps extends React.HTMLAttributes<HTMLDivElement> {}

NavItem.Skeleton = function SkeletonNavItem({
  className,
  ...props
}: SkeletonNavItemProps) {
  return (
    <div className={(cn("flex items-center gap-x-2"), className)} {...props}>
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
