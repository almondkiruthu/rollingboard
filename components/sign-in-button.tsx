"use client";

import { useState } from "react";

import { Icons } from "./icons";
import { Button } from "./ui/button";

interface SignInButtonProps {
  signIn: () => void;
}

const SignInButton = ({ signIn }: SignInButtonProps) => {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  return (
    <div>
      <Button
        disabled={isGithubLoading}
        className="w-full"
        variant="outline"
        onClick={() => {
          setIsGithubLoading(true);
          signIn();

          setIsGithubLoading(false);
        }}
      >
        {isGithubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}
        Github
      </Button>
    </div>
  );
};

export default SignInButton;
