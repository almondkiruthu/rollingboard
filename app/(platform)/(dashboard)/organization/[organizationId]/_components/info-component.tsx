import Image from "next/image";

import { Icons } from "@/components/icons";
import { useOrganization } from "@clerk/nextjs";

const Info = () => {
  const { organization, isLoaded } = useOrganization();
  return (
    <div className="flex items-center gap-x4">
      <div className="w-8 h-8 relative">
        <Image
          fill
          src={organization?.imageUrl as string}
          alt="Organization"
          className="rounded-md object-cover"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold tracking-tight text-xl">
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
