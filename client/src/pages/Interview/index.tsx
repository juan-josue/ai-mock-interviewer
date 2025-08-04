import SideNav from "./SideNav";
import Problem from "./Problem";
import Header from "./Header";
import Chat from "./Chat";
import CodeEditor from "./CodeEditor";

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
            <CodeEditor />
          </div>
          <Chat />
        </div>
      </main>
    </div>
  );
}

export default index;
