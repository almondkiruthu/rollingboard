import { useRef, useState } from "react";

import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";
import { Project } from "@prisma/client";

interface BoardTitleFormProps {
  data: Project;
}

const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const { execute } = useAction();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(data.title);
  const [editing, setIsEditing] = useState<boolean>(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (editing) {
    return (
      <form className="flex items-center gap-x-2">
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={onBlur}
          defaultValue={title}
          className="text-lg font-bold px-[7px] py-1 bg-transparent"
        />
      </form>
    );
  }
};

export default BoardTitleForm;
