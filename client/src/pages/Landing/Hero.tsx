import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { SparklesText } from "@/components/magicui/sparkles-text";

import { FlaskConical } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex justify-center items-center w-screen pt-32 pb-16 bg-background">
      <InteractiveGridPattern
        className="z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        squares={[40, 30]}
      />
      <div className="z-10 flex flex-col items-center gap-8 px-4 text-center">
        <h1 className=" text-center text-foreground text-3xl md:text-5xl font-bold">
          Ace your next coding <br /> interview with{" "}
          <SparklesText className="block md:inline-block">
            Mock Lab
          </SparklesText>
        </h1>
        <h2 className="text-foreground text-2xl">
          Intelligent mock technical interviews <br /> with insight beyond
          words.
        </h2>
        <Button className="text-background bg-blue-400">
          <FlaskConical /> Get started for free
        </Button>
        <p className="text-md text-neutral-500">
          First 3 free interviews. No credit card required.
        </p>
      </div>
    </section>
  );
}

export default Hero;
