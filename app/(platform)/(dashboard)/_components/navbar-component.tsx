import Link from "next/link";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header
      className="fixed w-full bg-background/95 z-50 backdrop-blur 
  supports-[backdrop-filter]:bg-background/60 border-b shadow-sm h-20 flex item-center"
    >
      {/* TODO: Mobile Sidebar  */}
      <div className="container flex items-center gap-x-6">
        <div className="hidden md:flex">
          <Link href="/" className="items-center space-x-2 flex">
            <Icons.mainLogo className="hidden md:inline-block" />
            <span className="hidden font-bold md:inline-block">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div>
          <Button variant="primary" size="sm" className="flex items-center">
            <Icons.add className="md:mr-2 h-4 w-4" />
            <p className="hidden md:block">New Project</p>
          </Button>
        </div>
        <nav className="ml-auto flex items-center gap-x-2">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:slug"
            afterSelectOrganizationUrl="/organization/:slug"
            afterLeaveOrganizationUrl="/select-org"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
