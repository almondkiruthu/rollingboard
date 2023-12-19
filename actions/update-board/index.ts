import { revalidatePath } from "next/cache";

import { InputType, ReturnType } from "./type";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, id } = data;

  let project;

  try {
    project = await db.project.update({
      where: {
        id,
        orgId,
      },
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: "Failed to update",
    };
  }

  revalidatePath(`/board/${id}`);
  return { data: project };
};
