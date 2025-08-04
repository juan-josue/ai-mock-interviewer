import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Nav from "../Landing/Nav";
function Dashboard() {
  return (
    <>
      <Nav />
      <div className="border-2">
        <SignedIn>
          {/* Dashboard content goes here */}
          <div className="mt-20 flex justify-center items-center h-full w-full">Dashboard stuff</div>
        </SignedIn>
      </div>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default Dashboard;
