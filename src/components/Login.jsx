import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/image/MSJA-Quiz.jpg";

const Login = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <a href="/" className="mb-6 flex items-center gap-2">
                <img src={Logo} className="max-h-8" alt="Quiz Web Logo" />
              </a>
              <h1 className="mb-2 text-2xl font-bold">Login</h1>
              <p className="text-muted-foreground">Welcome back</p>
            </div>
            <div>
              <div className="grid gap-4">
                <Input type="email" placeholder="Enter your email" required />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-muted-foreground"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password
                  </a>
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Log in
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  Log in with Google
                </Button>
              </div>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Don't have an account?</p>
                <a href="/sign-up" className="font-medium text-primary">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;