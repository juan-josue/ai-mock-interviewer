import Editor from "@monaco-editor/react";

import SideNav from "./SideNav";
import Problem from "./Problem";
import Header from "./Header";
import Chat from "./Chat";

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

function index() {
  return (
    <div className="flex w-screen h-screen overflow-y-hidden">
      {/* vertical nav menu */}
      <SideNav />

      {/* main content area */}
      <main className="flex flex-col w-full h-full">
        <Header />

        <div className="flex w-full h-full">
          <Problem />
          <div className="flex flex-col w-6/12 border-r-1 border-neutral-200 bg-background">
            <Editor
              height="100%"
              defaultLanguage="python"
              defaultValue={placeHolderCode}
            />
          </div>
          <Chat />
        </div>
      </main>
    </div>
  );
}

export default index;
