import { Badge } from "@/components/ui/badge";

function Problem() {
  return (
    <div className="flex flex-col gap-4 w-4/12 p-4 border-r-1 border-neutral-200 bg-background">
      {/* problem title and difficulty */}
      <div className="flex items-center gap-4">
        <h1 className="text-primary text-lg">Problem Name Here</h1>
        <Badge variant="default">Easy</Badge>
      </div>

      {/* problem description */}
      <p className="text-sm text-neutral-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        possimus placeat quos eius nihil. Explicabo sed quisquam suscipit
        aliquid voluptates.
      </p>

      {/* problem constraints */}
      <h2 className="text-sm text-primary">Constraints</h2>
      <ul className="flex flex-col gap-4 pl-5 text-neutral-500 text-left text-sm list-disc">
        <li className="marker:text-blue-400">
          <span className="inline px-2 py-1 rounded-sm border-1 border-neutral-300 bg-neutral-100">{`0 < a <= 10^5`}</span>
          where{" "}
          <span className="inline px-2 py-1 rounded-sm border-1 border-neutral-300 bg-neutral-100">{`a`}</span>{" "}
          is an integer.
        </li>
        <li className="marker:text-blue-400">
          <span className="inline px-2 py-1 rounded-sm border-1 border-neutral-300 bg-neutral-100">{`-20 < b <= 20`}</span>
          where{" "}
          <span className="inline px-2 py-1 rounded-sm border-1 border-neutral-300 bg-neutral-100">{`b`}</span>{" "}
          is an integer.
        </li>
      </ul>

      {/* problem examples */}
      <h2 className="text-sm text-primary">Examples</h2>
      <p className="text-sm text-neutral-500">Input</p>
      <p className="text-sm text-neutral-500">
        <span className="inline px-2 py-1 rounded-sm border-1 border-neutral-300 bg-neutral-100">{`[ 1, 2, 3, 4 ]`}</span>
      </p>
      <p className="text-sm text-neutral-500">Output</p>
      <p className="text-sm text-neutral-500">
        <span className="inline px-2 py-1 rounded-sm border-1 border-neutral-300 bg-neutral-100">{`[ 'Foo', 'Bar' ]`}</span>
      </p>
    </div>
  );
}

export default Problem;
