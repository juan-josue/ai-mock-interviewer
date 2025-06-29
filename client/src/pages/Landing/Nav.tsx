import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { FlaskConical, LogIn, Menu } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <FlaskConical />
      <p className="text-2xl font-bold">Mock Lab</p>
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Button className="text-foreground" variant="outline">
        <LogIn /> Login
      </Button>
      <Button className="text-background bg-blue-400">
        <FlaskConical /> Get started for free
      </Button>
    </div>
  );
}

function Nav() {
  return (
    <section className="z-50 fixed w-full bg-background">
      <div className="mx-auto w-full max-w-5xl p-4">
        <nav className="flex justify-between w-full">
          <Logo />

          {/* Auth btns for medium or larger devices */}
          <div className="hidden md:flex">
            <AuthButtons />
          </div>

          {/* Hamburger drop down menu for small devices */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-4 p-8" side={"bottom"}>
                <Logo />
                <AuthButtons />
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>

      <Separator />
    </section>
  );
}

export default Nav;
