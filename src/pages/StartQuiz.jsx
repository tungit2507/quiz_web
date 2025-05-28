import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const StartQuiz = () => {
  return (
    <section className="py-10 flex justify-center items-center  min-h-lvh">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Enter Quiz Code
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Start a Quiz Session
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Enter your quiz code below to join a quiz session and challenge yourself or compete with friends!
          </p>
          <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Enter quiz code"
              className="w-full"
            />
            <Button className="w-full sm:w-auto" asChild>
              <a href="/quiz">
                Start Quiz
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartQuiz;