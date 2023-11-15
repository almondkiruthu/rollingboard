export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type Siteconfig = {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
  };
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};
