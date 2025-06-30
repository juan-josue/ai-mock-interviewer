import { AlarmClock, EllipsisVertical } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  return (
    <header className="flex items-center justify-end gap-4 w-full p-4 border-b-1 border-neutral-200 bg-background">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="flex items-center gap-2 px-2 py-1 rounded-sm text-sm text-neutral-500 border-1 border-neutral-200"><AlarmClock />13:26</span>
      <EllipsisVertical />
    </header>
  );
}

export default Header;
