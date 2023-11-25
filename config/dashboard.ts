import { DashBoardConfig } from "@/types";

export const dashboardConfig: DashBoardConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
  ],
  sideBarNav: [
    {
      title: "Projects",
      href: "/dashboard",
      icon: "project",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
};
