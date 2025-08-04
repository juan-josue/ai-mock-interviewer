import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

/* 

  Authentication protector component
  This component checks if the user is signed in.
  If signed in, it renders the children components.
  If not signed in, it redirects the user to the sign-in page.

*/
export default function RequireAuth({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
