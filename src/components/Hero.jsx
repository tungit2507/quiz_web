import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroImage from '@/assets/image/MSJA-Quiz.jpg';
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="py-10 flex justify-center">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-3xl font-bold text-pretty sm:text-4xl lg:text-6xl">
              Challenge Yourself with Quiz Web!
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground text-base sm:text-lg lg:text-xl">
              Join exciting quizzes, sharpen your mind, and compete with friends. Explore hundreds of topics, from general knowledge to specialized fields. Start your journey and conquer the challenges today!
            </p>
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild className="w-full sm:w-auto md:w-28">
                <Link to={"/start-quiz"}>Start Quiz</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to={"/create-quiz"}>
                  Create quiz session
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={HeroImage || 'hero'}
              alt="Quiz Time hero image"
              className="max-h-60 sm:max-h-80 lg:max-h-96 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;