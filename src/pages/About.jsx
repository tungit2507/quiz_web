import { Button } from "@/components/ui/button";
import QuizLogo from "@/assets/image/MSJA-Quiz.jpg";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="py-10">
      <div className="">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">About Quiz Web</h1>
          <p className="text-muted-foreground">
            Quiz Web is a modern platform for quiz lovers to challenge themselves, learn new things, and compete with friends. Our mission is to make learning fun and accessible for everyone through interactive quizzes on a wide range of topics.
          </p>
        </div>
        <div className="grid cols-12  lg:grid-cols-3">
            <img  
              src={QuizLogo}
              alt="Quiz Web Logo"
              className="size-full max-h-[420px] rounded-xl object-cover lg:col-span-2 bg-center"
            />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="w-full text-center lg:text-left bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
                <img
                    src={QuizLogo}
                    alt="Quiz Web Logo"
                    className="h-32 object-cover"
                  />
              <div className="text-center md:text-left">
                <p className="mb-2 text-lg font-semibold">Why Choose Quiz Web?</p>
                <p className="text-muted-foreground">
                  Enjoy a seamless quiz experience, track your progress, and join a vibrant community of learners. Whether you want to test your knowledge or just have fun, Quiz Web is the place for you!
                </p>
              </div>
              <Button variant="outline" className="lg:mr-auto" asChild>
                <Link to="/start-quiz">
                  Start a Quiz
                </Link>
              </Button>
            </div>
        
          </div>
        </div>
        <div className="bg-muted relative overflow-hidden rounded-xl p-10 md:p-16 mt-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">Our Achievements</h2>
            <p className="text-muted-foreground max-w-xl">
              We are proud to help thousands of users learn and have fun every day.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            <div className="flex flex-col lg:gap-4">
              <p>Quizzes Created</p>
              <span className="text-4xl font-semibold md:text-5xl">1,200+</span>
            </div>
            <div className="flex flex-col gap-4">
              <p>Active Users</p>
              <span className="text-4xl font-semibold md:text-5xl">5,000+</span>
            </div>
            <div className="flex flex-col gap-4">
              <p>Topics Covered</p>
              <span className="text-4xl font-semibold md:text-5xl">300+</span>
            </div>
            <div className="flex flex-col gap-4">
              <p>Community Rating</p>
              <span className="text-4xl font-semibold md:text-5xl">4.9/5</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default About;