import { Brain, LaptopMinimalCheck, Speech } from "lucide-react";

const featureData = [
  {
    icon: Brain,
    title: "AI Feedback & Scoring",
    description:
      "Get detailed feedback on every interview. Your performance is scored across multiple dimensions to help you pinpoint strengths and growth areas.",
  },
  {
    icon: LaptopMinimalCheck,
    title: "Live Coding Interviews",
    description:
      "Code in a realistic environment with AI prompts and live validation. Mimic real interviews with built-in test cases and code grading.",
  },
  {
    icon: Speech,
    title: "Communication Analysis",
    description:
      "Train your verbal delivery with real-time speech feedback. We track clarity, filler words, tone, pacing, and overall answer structure.",
  },
];

function Features() {
  return (
    <section className="w-full flex flex-col items-center py-16 gap-8">
      <div className="flex flex-col gap-4 max-w-5xl text-center p-4">
        <p className="text-xl text-blue-400 uppercase">Features</p>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground">
          Built to replicate real interviews <br className="hidden md:block" /> and make you better at them
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 w-full max-w-5xl p-4">
        {featureData.map(({ icon: Icon, title, description }) => (
          <div className="flex flex-col gap-4 md:gap-8 w-5/6 md:w-1/3" key={title}>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200">
              <Icon className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <p className="text-md text-neutral-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
