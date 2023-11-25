"use client";

import { useState } from "react";

import { Icons } from "./icons";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const userAuthFormSchema = z.object({
  email: z.string().email(),
});

const UserAuthForm = () => {
  const form = useForm<z.infer<typeof userAuthFormSchema>>({
    resolver: zodResolver(userAuthFormSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

  const loginwithGoogle = async () => {
    setIsGoogleLoading(true);

    try {
      await signIn("google");
    } catch {
      // Toast Notification
      toast({
        title: "Something went wrong",
        description: "Your sign in request has failed please try again",
        variant: "destructive",
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };
  const onSubmit = async (values: z.infer<typeof userAuthFormSchema>) => {
    setIsLoading(true);

    const signInResult = await signIn("email");
  };

  return (
    <div className="grid gap-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Continue with
          </span>
        </div>
      </div>
      <Button
        onClick={loginwithGoogle}
        disabled={isLoading || isGoogleLoading}
        type="button"
        variant="outline"
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
