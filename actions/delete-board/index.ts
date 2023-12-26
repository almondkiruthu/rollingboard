"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { DeleteBoard } from "./schema";
import { InputType, ReturnType } from "./type";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id } = data;

  let project;

  try {
    project = await db.project.delete({
      where: {
        id,
        orgId,
      },
    });
  } catch (error) {
    return {
      error: "Failed to delete",
    };
  }

  revalidatePath(`/organization/${orgId}`);
  redirect(`/organization/${orgId}`);
};

export const deleteBoard = createSafeAction(DeleteBoard, handler);
