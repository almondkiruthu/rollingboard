import { UpdateBoard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Project } from "@prisma/client";
import { z } from "zod";

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Project>;
