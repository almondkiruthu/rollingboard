import MainNav from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";

const MarketingLayout = () => {
  return (
    <div className="flex flex-col min-h-screeen">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
    </div>
  );
};

export default MarketingLayout;
