import { AlarmClock, ArrowLeftToLine, EllipsisVertical } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 w-full p-4 border-b-1 border-neutral-200 bg-background">
      <div className="flex items-center gap-4">
        <ArrowLeftToLine className="text-neutral-500" />
        <h1 className="text-primary text-lg"> Mock Technical Interview</h1>
      </div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="flex items-center gap-2 px-2 py-1 rounded-sm text-sm text-neutral-500 border-1 border-neutral-200">
          <AlarmClock />
          13:26
        </span>
        <EllipsisVertical />
      </div>
    </header>
  );
}

export default Header;
