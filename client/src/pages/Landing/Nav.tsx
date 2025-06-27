import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";
import { LogIn } from 'lucide-react';

function Nav() {
  return (
    <section className="fixed z-50 p-4 flex justify-center w-screen">
        <nav className="flex justify-between w-full max-w-5xl">
          <div className="flex gap-2 items-center">
              <FlaskConical />
              <p className="text-2xl font-bold">Mock Lab</p>
          </div>
          <div className="flex gap-4">
            <Button className="text-foreground" variant="outline">
              <LogIn /> Login
            </Button>
            <Button className="bg-primary text-background">
              <FlaskConical /> Get started for free
            </Button>
          </div>
        </nav>
      </section>
  )
}

export default Nav