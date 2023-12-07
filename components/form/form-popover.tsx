"use client";

import { useRef } from "react";

import { useRouter } from "next/navigation";

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
  const { execute, data } = useAction(createProject, {
    onSucces: (data) => {
      toast({
        title: "Board Created!",
      });
      closeRef.current?.click;
      router.push(`/project/${data.id}`);
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
  });

  const onDubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create a board
        </div>
        <PopoverClose>
          <Button variant="ghost">
            <Icons.close className="h-3 w-3" />
          </Button>
        </PopoverClose>
        {/* TODO: Form  */}
      </PopoverContent>
    </Popover>
  );
};

export default FormPopover;
