"use client";

import { useRef } from "react";

import { useRouter } from "next/navigation";

import { FormInput } from "./form-input";
import FormPicker from "./form-picker";
import FormSubmit from "./form-submit";
import { createProject } from "@/actions/create-project";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { toast } from "@/hooks/use-toast";

interface FormPopoverProps {
  children?: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const FormPopover = ({
  children,
  side,
  align,
  sideOffset,
}: FormPopoverProps) => {
  const router = useRouter();
  const closeRef = useRef<HTMLButtonElement>(null);
  const { execute, fieldErrors } = useAction(createProject, {
    onSucces: (data) => {
      toast({
        title: "Project Created ! 🎉",
      });
      closeRef.current?.click;
      // router.push(`/project/${data.id}`);
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;
    execute({ title, image });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create a project
        </div>
        <PopoverClose>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <Icons.close className="h-3 w-3" />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <FormPicker id="image" errors={fieldErrors} />
            <FormInput
              id="title"
              label="Project title"
              type="text"
              errors={fieldErrors}
            />
          </div>
          <FormSubmit className="w-full">Create</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default FormPopover;
