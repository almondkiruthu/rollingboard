import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import board from "@/public/marketing/boards.png";
import { ArrowRight } from "lucide-react";

const MarketingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pt-32">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1.5px,transparent_1.5px),linear-gradient(to_bottom,#4f4f4f2e_1.5px,transparent_1.5px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

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
          <Link
            href="/register"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-cyan-700 text-foreground"
            )}
          >
            Create Kanban Board
          </Link>
        </div>
      </section>
      <section
        id="featutres-cards"
        className="container space-y-6 py-8 md:py-12"
      >
        <div className="hidden dark:block">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-cyan-900/50 p-2 ring-1 ring-inset ring-cyan-900/50 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={board}
                  alt="w"
                  width={1364}
                  height={866}
                  quality={100}
                  className="rounded-md bg-cyan-900/50  shadow-2xl ring-1 ring-cyan-900/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:pt-20 lg:pb-18 hidden md:block"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-3">
          {/* Integrate Card*/}
          <div className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-background p-2">
            <div className="flex h-[220px] flex-col justify-between items-center text-center rounded-md p-6">
              <Icons.intergrate />
              <div className="space-y-4">
                <h3 className="font-bold">Integrate</h3>
                <p className="text-sm text-muted-foreground">
                  The ability to quickly set up and customize workflows for just
                  about anything.
                </p>
              </div>
            </div>
          </div>
          {/* Integrate Card*/}
          <div className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-background p-2">
            <div className="flex h-[220px] flex-col justify-between items-center text-center rounded-md p-6">
              <Icons.collaborate />
              <div className="space-y-2">
                <h3 className="font-bold">Collaborate</h3>
                <p className="text-sm text-muted-foreground">
                  Manage projects, organize tasks, and build team spirit—all in
                  one place.
                </p>
              </div>
            </div>
          </div>
          {/* Integrate Card*/}
          <div className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-background p-2">
            <div className="flex h-[220px] flex-col justify-between items-center text-center rounded-md p-6">
              <Icons.succeed />
              <div className="space-y-4">
                <h3 className="font-bold">Succeed</h3>
                <p className="text-sm text-muted-foreground">
                  Every single part of your task can be managed, tracked, and
                  shared with teammates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Rollingboard is open source and powered by open source software.{" "}
            <br />
            The code is available on{"  "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default MarketingPage;
