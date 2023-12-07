import FormPopover from "@/components/form/form-popover";
import { Icons } from "@/components/icons";

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
            className="aspect-video realtive h-full w-full bg-gradient-to-br from-cyan-600/50 to-slate-500/50 rounded-sm
            flex flex-col gap-y-1 items-center justify-center hover:animate-pulse"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">5 remaining</span>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

export default BoardList;
