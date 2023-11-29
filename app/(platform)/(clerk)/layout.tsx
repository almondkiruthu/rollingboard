const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center container">
      {children}
    </div>
  );
};

export default ClerkLayout;
