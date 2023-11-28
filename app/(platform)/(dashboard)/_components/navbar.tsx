import { Icons } from "@/components/icons";
import MainNav from "@/components/main-nav";
import { dashboardConfig } from "@/config/dashboard";
import { siteConfig } from "@/config/site";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {" "}
      <header
        className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur 
      supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center py-6 md:justify-between">
          <Link href="/" className="items-center space-x-2 flex">
            <Icons.mainLogo className="hidden md:inline-block" />
            <span className="hidden font-bold md:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <div>
            <MainNav items={dashboardConfig.mainNav} />
          </div>
          <nav className="flex gap-x-3 ml-auto md:ml-0">
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
            <OrganizationSwitcher
              hidePersonal
              afterCreateOrganizationUrl="/organization/:id"
              afterLeaveOrganizationUrl="/select-org"
              afterSelectOrganizationUrl="/organziation/:id"
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
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
