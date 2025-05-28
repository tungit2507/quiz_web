import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

const SignUp = ({
  heading = "Sign Up",
  subheading = "Create a new account",
  logoUrl = "https://www.shadcnblocks.com",
  logoSrc = "https://shadcnblocks.com/images/block/block-1.svg",
  logoAlt = "Shadcnblocks",
  signupText = "Sign up",
  // googleText = "Sign up with Google",
  loginText = "Already have an account?",
  loginUrl = "/login",
} = {}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <a href={logoUrl} className="mb-6 flex items-center gap-2">
                <img src={logoSrc} className="h-10" alt={logoAlt} />
              </a>
              <h1 className="mb-2 text-2xl font-bold">{heading}</h1>
              <p className="text-muted-foreground">{subheading}</p>
            </div>
            <div>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="mt-2 w-full">
                  {signupText}
                </Button>
                {/* <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {googleText}
                </Button> */}
              </div>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>{loginText}</p>
                <Link to={loginUrl} className="font-medium text-primary">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;