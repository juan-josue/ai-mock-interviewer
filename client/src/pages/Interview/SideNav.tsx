import { Braces, File, FlaskConical, LayoutDashboard } from "lucide-react";

function SideNav() {
  return (
    <aside className="flex flex-col items-center justify-start gap-16 p-4 border-r-1 border-neutral-200 bg-background">
      <FlaskConical />
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-blue-400">
          <Braces />
        </div>
        <LayoutDashboard className="text-neutral-400" />
        <File className="text-neutral-400" />
      </div>
    </aside>
  );
}

export default SideNav;
