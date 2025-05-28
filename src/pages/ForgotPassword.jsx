import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPassword = () => {
  return (
    <section className="py-10 flex justify-center items-center min-h-lvh">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Forgot Password
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Reset Your Password
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Enter your email address below and we'll send you instructions to reset your password.
          </p>
          <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
            <Button className="w-full sm:w-auto" asChild>
              <a href="#">
                Send Reset Link
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;