import FormPopover from "@/components/form/form-popover";
import Hint from "@/components/hint";
import { Icons } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";

const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg font-heading text-neutral-700">
        <Icons.user className="h-7 w-7 mr-2" />
        Your Projects
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* TODO: Map the projects  */}
        <FormPopover side="right" sideOffset={10}>
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-gradient-to-br from-cyan-600/50 to-slate-500/50 rounded-sm
            flex flex-col gap-y-1 items-center justify-center hover:transition"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">5 remaining</span>
            <Hint
              sideOffset={40}
              description={`Free Workspaces can have upto to 5 open projects. For unlimited projects upgrade this worksapce.
              `}
            >
              <Icons.question className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

export default BoardList;

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid gird-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
    </div>
  );
};
