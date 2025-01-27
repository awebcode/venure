"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Zod Schema for Login and Register Validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password confirmation must match the password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function LoginRegisterDropdown() {
  const [currentTab, setCurrentTab] = React.useState("login");

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "all",
  });

  const registerForm = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
    mode: "all",
  });

  const handleLoginSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log("Login Data:", data);
  };

  const handleRegisterSubmit = (data: z.infer<typeof registerSchema>) => {
    console.log("Register Data:", data);
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{currentTab === "login" ? "Login" : "Register"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login" onValueChange={(value) => setCurrentTab(value)}>
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login">
            <form
              onSubmit={loginForm.handleSubmit(handleLoginSubmit)}
              className="space-y-4"
            >
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...loginForm.register("email")}
                  placeholder="Enter your email"
                />
                <p className="text-sm text-red-500">
                  {loginForm.formState.errors.email?.message}
                </p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...loginForm.register("password")}
                  placeholder="Enter your password"
                />
                <p className="text-sm text-red-500">
                  {loginForm.formState.errors.password?.message}
                </p>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </TabsContent>

          {/* Register Form */}
          <TabsContent value="register">
            <form
              onSubmit={registerForm.handleSubmit(handleRegisterSubmit)}
              className="space-y-4"
            >
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...registerForm.register("email")}
                  placeholder="Enter your email"
                />
                <p className="text-sm text-red-500">
                  {registerForm.formState.errors.email?.message}
                </p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...registerForm.register("password")}
                  placeholder="Enter your password"
                />
                <p className="text-sm text-red-500">
                  {registerForm.formState.errors.password?.message}
                </p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...registerForm.register("confirmPassword")}
                  placeholder="Confirm your password"
                />
                <p className="text-sm text-red-500">
                  {registerForm.formState.errors.confirmPassword?.message}
                </p>
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
}
