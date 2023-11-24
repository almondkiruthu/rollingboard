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
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);

  const loginwithGithub = async () => {
    setIsGithubLoading(true);

    try {
      await signIn("github");
    } catch {
      // Toast Notification
      toast({
        title: "Something went wrong",
        description: "Your sign in request has failed please try again",
        variant: "destructive",
      });
    } finally {
      setIsGithubLoading(false);
    }
  };
  const onSubmit = async (values: z.infer<typeof userAuthFormSchema>) => {
    setIsLoading(true);

    const signInResult = await signIn("email");
  };

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full">Sign In with Email</Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        onClick={loginwithGithub}
        disabled={isLoading || isGithubLoading}
        type="button"
        variant="outline"
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

export default UserAuthForm;
