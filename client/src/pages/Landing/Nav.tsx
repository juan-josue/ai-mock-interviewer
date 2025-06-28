import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";
import { LogIn } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function Nav() {
  return (
    <section className="fixed w-screen flex flex-col items-center justify-center z-50 bg-background">
      <nav className="flex justify-between w-full max-w-5xl py-4">
        <div className="flex gap-2 items-center">
          <FlaskConical />
          <p className="text-2xl font-bold">Mock Lab</p>
        </div>
        <div className="flex gap-4">
          <Button className="text-foreground" variant="outline">
            <LogIn /> Login
          </Button>
          <Button className="bg-blue-400 text-background">
            <FlaskConical /> Get started for free
          </Button>
        </div>
      </nav>
      <Separator />
    </section>
  );
}

export default Nav;
