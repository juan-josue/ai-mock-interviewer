import { Progress } from "@/components/ui/progress";
import { Braces, Brain, MessageCircleCode } from "lucide-react";

import Hero from "./Hero";

function index() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <section className="relative flex w-full justify-center">
        <div className="flex gap-16 w-full max-w-5xl p-8 rounded-xl border-2 border-accent bg-background">
          {/* Scores */}
          <div className="flex flex-col gap-16 w-2/3">
            {/* Communication Score */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-primary">
                <div className="flex gap-2">
                  <MessageCircleCode /> Communication
                </div>
                65%
              </div>
              <Progress className="w-full" value={65} />
            </div>

            {/* Code Quality */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-primary">
                <div className="flex gap-2">
                  <Braces /> Code Quality
                </div>
                85%
              </div>
              <Progress className="w-full" value={85} />
            </div>

            {/* Problem Solving */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-primary">
                <div className="flex gap-2">
                  <Brain /> Problem Solving
                </div>
                75%
              </div>
              <Progress className="w-full" value={75} />
            </div>
          </div>
          <div className="w-1/3 h-[300px] rounded-lg bg-accent"></div>
        </div>
      </section>
    </div>
  );
}

export default index;
