import BoardOptions from "./board-options";
import BoardTitleForm from "./board-title-form";
import { Project } from "@prisma/client";

interface BoardNavbarProps {
  data: Project;
}

const BoardNavbar = ({ data }: BoardNavbarProps) => {
  return (
    <div
      className="w-full h-16 z-[40] bg-black/50 fixed top-14 mt-5 
    flex items-center px-6 gap-x-4 text-white"
    >
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};

export default BoardNavbar;
