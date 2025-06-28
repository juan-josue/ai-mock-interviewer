import { FlaskConical } from "lucide-react";

function Footer() {
  return (
    <section className="w-full flex flex-col items-center bg-neutral-100">
      <div className="flex w-full max-w-5xl items-start justify-between text-neutral-500 py-16">
        <div className="flex gap-2 items-center text-primary">
          <FlaskConical />
          <p className="text-2xl font-bold">Mock Lab</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-primary">Website</p>
          <a>Demo Video</a>
          <a>Features</a>
          <a>Testimonials</a>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-primary">Resources</p>
          <a>Contact</a>
          <a>Support</a>
          <a>Status</a>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-primary">Social</p>
          <a>LinkedIn</a>
          <a>GitHub</a>
          <a>YouTube</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
