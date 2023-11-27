import { redirect } from "next/navigation";

import DashBoardHeader from "@/components/header";
import DashBoardShell from "@/components/shell";
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
      <div>{tasks?.length}</div>
    </DashBoardShell>
  );
};

export default DashBoardPage;
