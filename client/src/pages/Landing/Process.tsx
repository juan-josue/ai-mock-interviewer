import { useRef, forwardRef } from "react";

import { Speech, FileCode, Brain, ClipboardPlus } from "lucide-react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

import { cn } from "@/lib/utils";

const bulletPoints = [
  "Analyze your code for efficiency, correctness, and structure, just like a real interviewer would.",
  "Get feedback on your spoken answers, including clarity, pacing, and filler words.",
  "Receive a structured performance breakdown across technical skills and communication.",
];

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

function AnimatedDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-10"
    >
      {/* Beams */}
      <AnimatedBeam
        duration={5}
        curvature={3}
        gradientStartColor="#7dedf5"
        gradientStopColor="#6055d9"
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
      />
      <AnimatedBeam
        duration={5}
        delay={1}
        curvature={3}
        gradientStartColor="#7dedf5"
        gradientStopColor="#6055d9"
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
      />
      <AnimatedBeam
        duration={5}
        delay={2}
        gradientStartColor="#7dedf5"
        gradientStopColor="#6055d9"
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
      <div className="flex size-full flex-col items-stretch justify-center gap-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex gap-16 flex-col items-center">
            <Circle ref={div1Ref}>
              <FileCode />
            </Circle>
            <Circle ref={div2Ref}>
              <Speech />
            </Circle>
          </div>

          <Circle className="bg-blue-200" ref={div3Ref}>
            <Brain className="text-blue-600" />
          </Circle>
          <Circle ref={div4Ref}>
            <ClipboardPlus />
          </Circle>
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section className="flex flex-col items-center gap-16 w-full py-16 bg-neutral-100">
      <div className="flex flex-col md:flex-row md:items-center gap-4 max-w-5xl p-4">
        {/* process bullet points */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 text-center">
          <h1 className="text-4xl text-center md:text-left text-foreground font-bold ">
            Recieve detailed AI feedback on code and communication.
          </h1>
          <ul className="flex flex-col gap-4 pl-5 text-left text-md list-disc">
            {bulletPoints.map((point, index) => {
              return (
                <li className="marker:text-blue-400" key={index}>
                  {point}
                </li>
              );
            })}
          </ul>
        </div>

        {/* animated diagram */}
        <div className="flex items-center justify-center w-full">
          <AnimatedDiagram />
        </div>
      </div>
    </section>
  );
}

export default Process;
