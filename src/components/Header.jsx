import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import Logo from '@/assets/image/MSJA-Quiz.jpg'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";
import useAuthStore from "@/store/useAuthStore";

const Header = () => {


  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const currentUser = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout)



  const handleLogOut = () => {
    logout();
  }

  return (
    <section className="py-4 w-full">
      <div className="w-full">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex w-full">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} className="max-h-8" alt="Quiz Web Logo" />
              <span className="text-lg font-semibold tracking-tighter">
                Quiz Web
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/">Home</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Quiz</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-popover text-popover-foreground">
                      <NavigationMenuLink asChild className="w-auto">
                        <NavigationMenuLink asChild>
                          <Link to="/">Home</Link>
                        </NavigationMenuLink>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to={"/blog"}>Blog</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/about-us">About Us</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            {
              !isLoggedIn ?
                <>
                  <Button asChild variant="outline">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/sign-up">Sign up</Link>
                  </Button>
                </>
                :
                <>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>{`Hello, ${currentUser.name}`}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <NavigationMenuLink className="w-40">Your Profile</NavigationMenuLink>
                          <NavigationMenuLink className="w-40">Change Password</NavigationMenuLink>
                          <NavigationMenuLink className="w-40">Manage Quiz</NavigationMenuLink>
                          <NavigationMenuLink className="w-40">Your Learning Result</NavigationMenuLink>
                          <NavigationMenuLink className="w-40" onClick={handleLogOut}>Log out</NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </>
            }
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} className="max-h-8" alt="Quiz Web Logo" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to="/" className="flex items-center gap-2">
                      <img src={Logo} className="max-h-8" alt="Quiz Web Logo" />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    <AccordionItem value="home" className="border-b-0">
                      <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                        Home
                      </AccordionTrigger>
                      <AccordionContent>
                        <Link to="/" className="text-md font-semibold block py-2">Home</Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="quiz" className="border-b-0">
                      <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                        Quiz
                      </AccordionTrigger>
                      <AccordionContent>
                        <SubMenuLink
                          item={{
                            title: "Blog",
                            description: "The latest industry news, updates, and info",
                            icon: <Book className="size-5 shrink-0" />,
                            url: "#",
                          }}
                        />
                        <SubMenuLink
                          item={{
                            title: "Company",
                            description: "Our mission is to innovate and empower the world",
                            icon: <Trees className="size-5 shrink-0" />,
                            url: "#",
                          }}
                        />
                        <SubMenuLink
                          item={{
                            title: "Careers",
                            description: "Browse job listing and discover our workspace",
                            icon: <Sunset className="size-5 shrink-0" />,
                            url: "#",
                          }}
                        />
                        <SubMenuLink
                          item={{
                            title: "Support",
                            description: "Get in touch with our support team or visit our community forums",
                            icon: <Zap className="size-5 shrink-0" />,
                            url: "#",
                          }}
                        />
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="pricing" className="border-b-0">
                      <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                        Pricing
                      </AccordionTrigger>
                      <AccordionContent>
                        <Link to="#" className="text-md font-semibold block py-2">Pricing</Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="blog" className="border-b-0">
                      <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                        Blog
                      </AccordionTrigger>
                      <AccordionContent>
                        <Link to="#" className="text-md font-semibold block py-2">Blog</Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="about-us" className="border-b-0">
                      <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                        About Us
                      </AccordionTrigger>
                      <AccordionContent>
                        <Link to="/about-us" className="text-md font-semibold block py-2">About Us</Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex flex-col gap-3">

                    {
                      !isLoggedIn ?
                        <>
                          <Button asChild variant="outline">
                            <Link to="/login">Login</Link>
                          </Button>
                          <Button asChild>
                            <Link to="/sign-up">Sign up</Link>
                          </Button>
                        </>
                        :

                        <Accordion>
                          <AccordionItem value="blog" className="border-b-0">
                            <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                              {`Hello, ${currentUser.name}`}
                            </AccordionTrigger>
                            <AccordionContent>
                              <Link to={""} className="text-md font-semibold block py-2">Your Profile</Link>
                              <Link to={""} className="text-md font-semibold block py-2">Change Password</Link>
                              <Link to={""} className="text-md font-semibold block py-2">Your Quiz</Link>
                              <Link to={""} className="text-md font-semibold block py-2">Review Learning Result </Link>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                    }

                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

function SubMenuLink({ item }) {
  return (
    <Link
      to={item.url}
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
}

export default Header;