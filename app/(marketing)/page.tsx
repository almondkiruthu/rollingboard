import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const MarketingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="absolute h-72 w-72 top-[50%] left-[42%] bg-yellow-700"></div>
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center opacity-0">
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
            Create, share, and get feedback with collaborative <br /> boards for
            rapid development.
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
    </>
  );
};

export default MarketingPage;

// Eclipse Styles

// border-radius: 37.5rem;
// background: linear-gradient(180deg, #FF6161 0%, #43FFDD 35.88%, #45BCFF 67.65%, #D795FF 100%);
// filter: blur(132.34390258789062px);

// Rectangle styles

// Layout
// width: 35.79731rem;
// height: 35.79731rem;
// transform: rotate(45deg);

// Colors and shape
// border-radius: 12.5rem;
// background: linear-gradient(180deg, #FFDC61 0%, #43FFDD 35.88%, #45BCFF 67.65%, #D795FF 100%);

// Noise
// background: url(<path-to-image>), lightgray 0% 0% / 50px 50px repeat;
// background-blend-mode: soft-light;

// width: 62.5rem;
// height: 62.5rem;
// flex-shrink: 0;
