import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";
import { Safari } from "@/components/magicui/safari";

function CallToAction() {
  return (
    <section className="w-full flex flex-col items-center py-16 gap-16">
      <div className="relative flex flex-col items-center gap-4 w-5xl text-center p-16 pb-0 rounded-4xl overflow-hidden">
        <h1 className="text-5xl font-bold text-center text-foreground">
          Train like it's the real thing.
        </h1>
        <Button className="bg-blue-400 text-background max-w-sm">
          <FlaskConical /> Get started for free
        </Button>

        {/* Safari clipping wrapper */}
        <div className="w-11/12 h-[400px] overflow-hidden">
          <Safari className="w-full scale-100" url="https://magicui.design" />
        </div>

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
