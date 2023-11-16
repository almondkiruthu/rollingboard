import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import noiseBg from "@/public/hero/Noise-Animation.webp";
import gradientLeft from "@/public/hero/gradient-left.webp";
import gradientRight from "@/public/hero/gradient-right.webp";
import { ArrowRight } from "lucide-react";

const MarketingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center z-50">
          <div className="mb-8 flex">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                  RollingBoard ⚡️
                  <span className="inline-flex items-center pl-2 text-black dark:text-white">
                    Read More
                    <ArrowRight
                      className="pl-0.5 text-black dark:text-white"
                      size={16}
                    />
                  </span>
                </div>
              </span>
            </a>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Collaborate and build <br /> faster, together.
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
                "bg-cyan-700 text-foreground hover:transition-all"
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
