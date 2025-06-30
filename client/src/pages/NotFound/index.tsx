import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { SparklesText } from "@/components/magicui/sparkles-text";

import { FlaskConical } from "lucide-react";

import { Link } from "react-router";

function Hero() {
  return (
    <section className="relative flex justify-center items-center w-screen h-screen pt-32 pb-16 bg-background">
      <InteractiveGridPattern
        className="z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        squares={[40, 30]}
      />
      <div className="z-10 flex flex-col items-center gap-8 px-4 text-center">
        <h1 className=" text-center text-foreground text-3xl md:text-5xl font-bold">
          <SparklesText className="text-9xl">404</SparklesText>
          Uh Oh! Page Not Found!
        </h1>
        <h2 className="text-foreground text-2xl">
          Return to the home page by clicking the button below.
        </h2>

        <Link to="/">
          <Button className="text-background bg-blue-400">
            <FlaskConical /> Home Page
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
