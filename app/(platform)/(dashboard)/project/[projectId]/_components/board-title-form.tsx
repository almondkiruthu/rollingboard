import { useRef, useState } from "react";

import { updateBoard } from "@/actions/update-board";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";
import { Project } from "@prisma/client";

interface BoardTitleFormProps {
  data: Project;
}

const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const { execute } = useAction(updateBoard, {
    onSucces: (data) => {
      // TODO: Add toast on success
      setTitle(data.title);
      disableEditing;
    },
    onError: (error) => {
      //TODO: Add toast on error
    },
  });
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

    execute({
      title,
      id: data.id,
    });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (editing) {
    return (
      <form
        action={onSubmit}
        ref={formRef}
        className="flex items-center gap-x-2"
      >
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
