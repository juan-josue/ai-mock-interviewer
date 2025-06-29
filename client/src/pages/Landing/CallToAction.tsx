import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";
import { Safari } from "@/components/magicui/safari";

function CallToAction() {
  return (
    <section className="flex justify-center w-full">
      <div className="relative flex flex-col items-center gap-4 w-full max-w-5xl p-16 pb-0 rounded-4xl text-center">
        {/* typography */}
        <h1 className="text-5xl text-center text-foreground font-bold">
          Train like it's the real thing.
        </h1>
        <Button className="bg-blue-400 text-background max-w-sm">
          <FlaskConical /> Get started for free
        </Button>

        {/* browser mock */}
        <div className="w-full overflow-hidden">
          <Safari
            className="w-full h-auto max-w-full"
            url="https://magicui.design"
          />
        </div>

        {/* background flickering grid */}
        <FlickeringGrid
          className="absolute inset-0 -z-10 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>
    </section>
  );
}

export default CallToAction;
