import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { SparklesText } from "@/components/magicui/sparkles-text";

function Hero() {
  return (
    <section className="relative flex justify-center items-center w-screen pt-32 pb-16 bg-background">
      <InteractiveGridPattern
        className="z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        squares={[40, 30]}
      />
      <div className="z-10 flex flex-col items-center gap-8 px-4 text-center">
        <h1 className=" text-center text-foreground text-3xl md:text-5xl font-bold">
          Great Work! Let's take <br /> a look at the{" "}
          <SparklesText className="block md:inline-block">Results</SparklesText>
        </h1>
        <h2 className="text-foreground text-2xl max-w-lg">
          You communicated your thought process clearly and showed strong
          algorithmic intuition!
        </h2>
      </div>
    </section>
  );
}

export default Hero;
