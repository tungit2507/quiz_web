import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const BlogPost = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Quiz Insights
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Latest from the Quiz Blog
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Explore tips, strategies, and stories to help you master quizzes, boost your knowledge, and stay motivated. Discover how to get the most out of Quiz Web!
          </p>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href="/blog">
              View all blog posts
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <Card className="grid grid-rows-[auto_auto_1fr_auto] pt-0">
            <div className="aspect-16/9 w-full">
              <a
                href="/blog/how-to-prepare"
                className="transition-opacity duration-200 fade-in hover:opacity-70"
              >
                <img
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
                  alt="How to Prepare for Any Quiz"
                  className="h-full w-full object-cover object-center"
                />
              </a>
            </div>
            <CardHeader>
              <h3 className="text-lg font-semibold hover:underline md:text-xl">
                <a href="/blog/how-to-prepare">
                  How to Prepare for Any Quiz
                </a>
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover effective study techniques and time management tips to help you ace any quiz on Quiz Web. Learn how to stay focused and confident before test day.
              </p>
            </CardContent>
            <CardFooter>
              <a
                href="/blog/how-to-prepare"
                className="flex items-center text-foreground hover:underline"
              >
                Read more
                <ArrowRight className="ml-2 size-4" />
              </a>
            </CardFooter>
          </Card>
          <Card className="grid grid-rows-[auto_auto_1fr_auto] pt-0">
            <div className="aspect-16/9 w-full">
              <a
                href="/blog/top-quiz-topics"
                className="transition-opacity duration-200 fade-in hover:opacity-70"
              >
                <img
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
                  alt="Top 10 Most Popular Quiz Topics"
                  className="h-full w-full object-cover object-center"
                />
              </a>
            </div>
            <CardHeader>
              <h3 className="text-lg font-semibold hover:underline md:text-xl">
                <a href="/blog/top-quiz-topics">
                  Top 10 Most Popular Quiz Topics
                </a>
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Curious about what everyone is playing? Check out the most popular quiz categories on Quiz Web and find your next challenge!
              </p>
            </CardContent>
            <CardFooter>
              <a
                href="/blog/top-quiz-topics"
                className="flex items-center text-foreground hover:underline"
              >
                Read more
                <ArrowRight className="ml-2 size-4" />
              </a>
            </CardFooter>
          </Card>
          <Card className="grid grid-rows-[auto_auto_1fr_auto] pt-0">
            <div className="aspect-16/9 w-full">
              <a
                href="/blog/leaderboard-tips"
                className="transition-opacity duration-200 fade-in hover:opacity-70"
              >
                <img
                  src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
                  alt="Compete with Friends: Leaderboard Tips"
                  className="h-full w-full object-cover object-center"
                />
              </a>
            </div>
            <CardHeader>
              <h3 className="text-lg font-semibold hover:underline md:text-xl">
                <a href="/blog/leaderboard-tips">
                  Compete with Friends: Leaderboard Tips
                </a>
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Want to climb the leaderboard? Learn how to challenge friends, earn more points, and become a Quiz Web champion.
              </p>
            </CardContent>
            <CardFooter>
              <a
                href="/blog/leaderboard-tips"
                className="flex items-center text-foreground hover:underline"
              >
                Read more
                <ArrowRight className="ml-2 size-4" />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;