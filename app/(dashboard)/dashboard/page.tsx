import { redirect } from "next/navigation";

import EmptyPlaceHolder from "@/components/empty-placeholder";
import DashBoardHeader from "@/components/header";
import DashBoardShell from "@/components/shell";
import TaskItem from "@/components/task-item";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export const metadata = {
  title: "Dashboard",
};

const DashBoardPage = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in" || "/sign-up");
  }
  const tasks = await db.task.findMany({
    where: {
      creatorId: userId,
    },
    select: {
      id: true,
      title: true,
      published: true,
      description: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return (
    <DashBoardShell>
      <DashBoardHeader
        header="Projects"
        text="Create and manage projects"
      ></DashBoardHeader>
      <div>
        {tasks?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <EmptyPlaceHolder className="bg-slate-50/30 py-8 dark:bg-transparent">
            <EmptyPlaceHolder.Icon name="project" />
            <EmptyPlaceHolder.Title>No Projects created</EmptyPlaceHolder.Title>
            <EmptyPlaceHolder.Description>
              You don&apos;t have any projects yet. Start creating tasks.
            </EmptyPlaceHolder.Description>
            {/* TODO:Create Project create button */}
          </EmptyPlaceHolder>
        )}
      </div>
    </DashBoardShell>
  );
};

export default DashBoardPage;
