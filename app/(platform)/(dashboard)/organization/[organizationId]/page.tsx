import { Suspense } from "react";

import BoardList from "./_components/board-list-component";
import Info from "./_components/info-component";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const OrganizationIdPage = () => {
  return (
    <div className="w-full">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
