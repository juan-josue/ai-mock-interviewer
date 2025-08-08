import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

import { useCodeRunner } from "@/hooks/useCodeExecutor";

const placeHolderCode = `class Solution:
    def isValid(self, s: str) -> bool:
        d = { '{' : '}', '(' : ')', '[' : ']'}
        stack = []

        for char in s:
            if char in d.keys():
                stack.append(char)
            else:
                if not stack or char != d[stack[-1]]:
                    return False
                else:
                    stack.pop()
        return stack == []
`;

function CodeEditor() {
  const [code, setCode] = useState(placeHolderCode);
  const { output, loading, error, run } = useCodeRunner();

  return (
    <div className="flex flex-col w-full h-full">
      <Editor
        defaultLanguage="python"
        value={code}
        onChange={(val: string | undefined) => setCode(val || "")}
        defaultValue={placeHolderCode}
      />
      <div className="flex justify-end w-full p-4">
        <Button onClick={() => run(code)} variant="outline" disabled={loading}>
          {loading ? (
            <p className="flex items-center gap-2">
              <Loader2Icon className="animate-spin" /> Running...
            </p>
          ) : (
            "Run Code"
          )}
        </Button>
      </div>
      {error && (
        <div className="flex w-full p-4 text-sm text-red-500">{error}</div>
      )}
      {output && <div className="flex w-full p-4">{output}</div>}
    </div>
  );
}

export default CodeEditor;
