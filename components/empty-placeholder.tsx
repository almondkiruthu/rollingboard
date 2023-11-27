import * as React from "react";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface EmptyPlaceHolderProps extends React.HTMLAttributes<HTMLDivElement> {}

const EmptyPlaceHolder = ({
  className,
  children,
  ...props
}: EmptyPlaceHolderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col min-h-[400px] items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
};

export default EmptyPlaceHolder;

interface EmptyPlaceholderIconProps
  extends Partial<React.SVGProps<SVGSVGElement>> {
  name: keyof typeof Icons;
}

EmptyPlaceHolder.Icon = function EmptyPlaceHolderIcon({
  name,
  className,
}: EmptyPlaceholderIconProps) {
  const Icon = Icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
      <Icon className={cn("h-10 w-10", className)} />
    </div>
  );
};

interface EmptyPlacholderTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

EmptyPlaceHolder.Title = function EmptyPlaceHolderTitle({
  className,
  ...props
}: EmptyPlacholderTitleProps) {
  return (
    <h2 className={cn("mt-6 text-xl font-semibold", className)} {...props} />
  );
};

interface EmptyPlacholderDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

EmptyPlaceHolder.Description = function EmptyPlaceHolderDescription({
  className,
  ...props
}: EmptyPlacholderDescriptionProps) {
  return (
    <p
      className={cn(
        "mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
