import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EnterNewPassword = () => {
  return (
    <section className="py-10 flex justify-center items-center min-h-lvh">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Set New Password
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Create a New Password
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Enter your new password below. Make sure it’s strong and unique to keep your Quiz Web account secure.
          </p>
          <form className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            <Input
              type="password"
              placeholder="New password"
              className="w-full"
              required
            />
            <Input
              type="password"
              placeholder="Confirm new password"
              className="w-full"
              required
            />
            <Button className="w-full sm:w-auto" type="submit">
              Reset Password
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnterNewPassword;