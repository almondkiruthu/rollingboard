import { FormInput } from "@/components/form/form-input";
import { Project } from "@prisma/client";

interface BoardTitleFormProps {
  data: Project;
}

const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  return (
    <form className="flex items-center gap-x-2">
      <FormInput
        id="title"
        onBlur={onBlur}
        defaultValue={title}
        className="text-lg font-bold px-[7px] py-1 bg-transparent"
      />
    </form>
  );
};

export default BoardTitleForm;
