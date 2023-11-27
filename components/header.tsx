interface DashBoardHeaderProps {
  header: string;
  text?: string;
  children?: React.ReactNode;
}

const DashBoardHeader = ({ header, text, children }: DashBoardHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="font-heading text-3xl md:text-4xl">{header}</h1>
        {text && <p className="text-lg text-muted-foreground ">{text}</p>}
      </div>
      {children}
    </div>
  );
};

export default DashBoardHeader;
