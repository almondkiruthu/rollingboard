import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const RegitsterPage = () => {
  return (
    <div
      className="container grid h-screen w-screen flex-col items-center justify-center
    lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div
        className="hidden h-full bg-gradient-to-bl from-cyan-700 via-rose-400 to-slate-300
      lg:block"
      ></div>
      <div className="lg:p-8">
<div className="mx-auto flex w-full">

</div>
      </div>
    </div>
  );
};

export default RegitsterPage;
