"use server";

import { revalidatePath } from "next/cache";

import { CreateProject } from "./schema";
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

  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
    image.split("|");

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageUserName ||
    !imageLinkHTML
  ) {
    return {
      error: "Missing fields. Failed to create board.",
    };
  }

  let project;

  try {
    project = await db.project.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageUserName,
        imageLinkHTML,
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
