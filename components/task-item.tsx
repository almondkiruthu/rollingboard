import { Task } from "@prisma/client";

interface TaskItemProps {
  task: Pick<Task, "id" | "title" | "published" | "createdAt">;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return <div></div>;
};

export default TaskItem;
