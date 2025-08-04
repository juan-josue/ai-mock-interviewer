import Nav from "@/pages/Landing/Nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-8 pt-20">
        {children}
      </main>
    </div>
  );
}
