import { redirect } from "next/navigation";

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
  return <div>DashBoard Page</div>;
};

export default DashBoardPage;
