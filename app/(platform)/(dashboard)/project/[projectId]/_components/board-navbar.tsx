import BoardTitleForm from "./board-title-form";
import { Project } from "@prisma/client";

interface BoardNavbarProps {
  data: Project;
}

const BoardNavbar = ({ data }: BoardNavbarProps) => {
  return (
    <div
      className="container w-full h-14 z-40 bg-black/50 fixed top-14 flex items-center px-8 py-14 
  gap-x-4 text-white
  "
    >
      <BoardTitleForm className="container" data={data} />
      <div className="ml-auto">{/* TODO: Create Board Options  */}</div>
    </div>
  );
};

export default BoardNavbar;
