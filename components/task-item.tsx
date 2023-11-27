import Link from "next/link";

import { Skeleton } from "./ui/skeleton";
import { formatDate } from "@/lib/utils";
import { Task } from "@prisma/client";

interface TaskItemProps {
  task: Pick<Task, "id" | "title" | "published" | "createdAt">;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${task.id}`}
          className="font-semibold hover:underline"
        >
          {task.title}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(task.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      {/* TODO: Create CRUD task operations */}
    </div>
  );
};

export default TaskItem;

TaskItem.Skeleton = function TaskItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-5 w-4/5" />
      </div>
    </div>
  );
};
