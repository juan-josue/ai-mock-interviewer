import Editor from "@monaco-editor/react";

import SideNav from "./SideNav";
import Problem from "./Problem";

function index() {
  return (
    <div className="flex w-screen h-screen bg-blue-400">
      {/* vertical nav menu */}
      <SideNav />

      {/* main content area */}
      <main className="flex flex-col w-full h-full">
        <header className="p-4 bg-green-200">header</header>

        <div className="flex w-full h-full bg-pink-300">
          <Problem />
          <div className="flex flex-col w-6/12 bg-blue-200">
            <Editor
              height="100%"
              defaultLanguage="python"
              defaultValue="print('Welcome to Mock Lab!')"
            />
          </div>
          <div className="flex flex-col w-3/12 bg-blue-200">dialogue area</div>
        </div>
      </main>
    </div>
  );
}

export default index;
