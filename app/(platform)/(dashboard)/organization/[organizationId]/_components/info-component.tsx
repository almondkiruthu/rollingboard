"use client";

import Image from "next/image";

import { Icons } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";

const Info = () => {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return <Info.Skeleton />;
  }
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-8 h-8 relative">
        <Image
          fill
          src={organization?.imageUrl as string}
          alt="Organization"
          className="rounded-md object-cover w-4 h-4"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl font-heading">
          {organization?.name}
        </p>
        <div className="flex items-center text-xs text-muted-foreground">
          <Icons.billing className="h-3 w-3 mr-2" />
          You are on the Free Plan
        </div>
      </div>
    </div>
  );
};

export default Info;

interface InfoSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}
Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-8 h-8 relative">
        <Skeleton className="w-full h-full absolute" />
      </div>
      <div className="space-y-1">
        <Skeleton className="h-10 w-[200px]" />
        <div className="flex items-center">
          <Skeleton className="h-3 w-3 mr-2" />
          <Skeleton className="h-3 w-[100px]" />
        </div>
      </div>
    </div>
  );
};
