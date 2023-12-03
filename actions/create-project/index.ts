"use server";

import { revalidatePath } from "next/cache";

import { CreateProject } from "./schema";
import { InputType, ReturnType } from "./type";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title } = data;

  let project;

  try {
    project = await db.project.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: "Failed to Create",
    };
  }

  revalidatePath(`/project/${project.id}`);

  return { data: project };
};

export const createProject = createSafeAction(CreateProject, handler);
