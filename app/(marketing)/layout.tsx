import Link from "next/link";

import { Icons } from "@/components/icons";
import MainNav from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";

const MarketingLayout = () => {
  return (
    <div className="flex flex-col min-h-screeen">
      <header className="container z-40 bg-background">
        <div className="md:flex justify-between">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.mainLogo />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <div className="flex h-20 items-center py-6">
            <MainNav items={marketingConfig.mainNav} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MarketingLayout;
