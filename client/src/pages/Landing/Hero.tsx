import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";
import { SparklesText } from "@/components/magicui/sparkles-text";

function Hero() {
  return (
    <section className="relative flex justify-center items-center w-screen pt-32 pb-16 bg-background">
      <InteractiveGridPattern
        className="z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        squares={[40, 30]}
      />
      <div className="flex z-10 flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-bold text-center text-foreground">
          Ace your next coding <br /> interview with <SparklesText className="inline-block">Mock Lab</SparklesText>
        </h1>
        <h5 className="text-2xl text-foreground">
          Intelligent mock technical interviews <br /> with insight beyond
          words.
        </h5>
        <Button className="bg-blue-400 text-background">
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
