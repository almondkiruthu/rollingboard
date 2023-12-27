import { Icons } from "@/components/icons";
import { Organization } from "@clerk/nextjs/server";
import { Task, TaskCard } from "@prisma/client";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type OrganizationNavItem = {
  label: string;
  icon?: keyof typeof Icons;
  href: string;
};

export type OrganizationSideBarNav = {
  organizationSideBarNav: OrganizationNavItem[];
};

export type SideBarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type Siteconfig = {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
    twitter?: string;
  };
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashBoardConfig = {
  mainNav: MainNavItem[];
  sideBarNav: SideBarNavItem[];
};

export type TaskWithCards = Task & { taskCards: TaskCard[] };
