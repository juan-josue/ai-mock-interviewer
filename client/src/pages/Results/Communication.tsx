import { Check, X } from "lucide-react";

function Communication() {
  return (
    <section className="w-full flex flex-col items-center py-16 gap-8">
      <div className="flex flex-col gap-4 w-full max-w-5xl text-left p-4">
        <p className="text-xl text-blue-400 uppercase">Communication</p>
        <h1 className="text-4xl font-bold text-left text-foreground">
          Strong communication is key. Here’s what you did well, what to
          improve, and exactly how to get there
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 w-full max-w-5xl p-4">
        {/* What went well */}
        <div className="flex flex-col gap-4 md:gap-8 w-5/6 md:w-1/2">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200">
            <Check className="text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            What you did right
          </h3>
          <ul className="flex flex-col gap-4 pl-5 text-left text-sm list-disc">
            <li className=" marker:text-blue-400">
              <div className="flex flex-col gap-4 text-neutral-500">
                <p>You opened with a clear summary of the problem:</p>
                <p className="p-4 text-primary rounded-md bg-accent">
                  “So we’re checking if each opening bracket has a matching
                  closing one, in the right order.”
                </p>
                <p>This helped ground your explanation.</p>
              </div>
            </li>
            <li className=" marker:text-blue-400">
              <div className="flex flex-col gap-4">
                <p className="text-md text-neutral-500">
                  Your step-by-step walkthrough of the stack logic was easy to
                  follow and well-paced.
                </p>
              </div>
            </li>
            <li className=" marker:text-blue-400">
              <div className="flex flex-col gap-4">
                <p className="text-md text-neutral-500">
                  You brought up an example unprompted:
                </p>
                <p className="p-4 text-md text-primary rounded-md bg-accent">
                  “For input like this, I expect false, since the closing order
                  is off.”
                </p>
                <p className="text-md text-neutral-500">
                  That showed good awareness of edge cases.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* What didn't go well */}
        <div className="flex flex-col gap-4 md:gap-8 w-5/6 md:w-1/2">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200">
            <X className="text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            What held you back
          </h3>
          <ul className="flex flex-col gap-4 pl-5 text-left text-sm list-disc">
            <li className=" marker:text-blue-400">
              <div className="flex flex-col gap-4 text-neutral-500">
                <p>You opened with a clear summary of the problem:</p>
                <p className="p-4 text-primary rounded-md bg-accent">
                  “So we’re checking if each opening bracket has a matching
                  closing one, in the right order.”
                </p>
                <p>This helped ground your explanation.</p>
              </div>
            </li>
            <li className=" marker:text-blue-400">
              <div className="flex flex-col gap-4">
                <p className="text-md text-neutral-500">
                  Your step-by-step walkthrough of the stack logic was easy to
                  follow and well-paced.
                </p>
              </div>
            </li>
            <li className=" marker:text-blue-400">
              <div className="flex flex-col gap-4">
                <p className="text-md text-neutral-500">
                  You brought up an example unprompted:
                </p>
                <p className="p-4 text-md text-primary rounded-md bg-accent">
                  “For input like this, I expect false, since the closing order
                  is off.”
                </p>
                <p className="text-md text-neutral-500">
                  That showed good awareness of edge cases.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Communication;
