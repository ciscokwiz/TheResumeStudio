
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const signupSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters long",
    }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupValues = z.infer<typeof signupSchema>;

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Extract the redirect URL from query params if it exists
  const queryParams = new URLSearchParams(location.search);
  const redirectUrl = queryParams.get("redirect") || "/dashboard";

  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: SignupValues) => {
    console.info("Registration with:", values);
    
    // Simulate API call with a small delay
    setTimeout(() => {
      // In a real app, this would create a new user with a backend
      toast({
        title: "Account created successfully!",
        description: "Redirecting you to the dashboard...",
      });
      
      // Redirect to dashboard after successful signup
      setTimeout(() => {
        navigate(redirectUrl);
      }, 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Column - Form */}
      <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 py-12">
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </button>
          <h1 className="text-2xl md:text-3xl font-medium mb-2">
            Create an account
          </h1>
          <p className="text-muted-foreground">
            Join us to access premium resume services
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 md:space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Create Account
            </Button>

            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to={`/auth/login${redirectUrl !== "/dashboard" ? `?redirect=${redirectUrl}` : ""}`}
                  className="text-primary hover:underline"
                >
                  Sign in
                </Link>
              </span>
            </div>
          </form>
        </Form>
      </div>

      {/* Right Column - Image */}
      <div className="hidden md:block bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')"}}>
        <div className="h-full w-full bg-black/40 p-12 flex items-end">
          <div className="text-white">
            <h2 className="text-2xl font-medium mb-2">
              Join Our Community
            </h2>
            <p className="text-gray-200">
              Sign up to access premium templates and career services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
