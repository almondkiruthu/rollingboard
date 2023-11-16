import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const MarketingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link
              href={siteConfig.links.github}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Project Mangament App
            </Link>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Colaborate and build <br /> faster, together.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Create, share, and get feedback with collaborative <br /> boards
              for rapid development.
            </p>
            <div>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-cyan-700 text-foreground"
                )}
              >
                Create Kanban Board
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketingPage;
