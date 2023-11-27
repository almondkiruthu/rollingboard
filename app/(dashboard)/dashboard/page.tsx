import { redirect } from "next/navigation";

import DashBoardHeader from "@/components/header";
import DashBoardShell from "@/components/shell";
import TaskItem from "@/components/task-item";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export const metdata = {
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
          <div>{/* TODO: Create a placeHolder */}</div>
        )}
      </div>
    </DashBoardShell>
  );
};

export default DashBoardPage;
