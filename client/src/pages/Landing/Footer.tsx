import { FlaskConical } from "lucide-react";

function Footer() {
  return (
    <section className="flex flex-col items-center w-full  bg-neutral-100">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full max-w-5xl p-16 text-neutral-500">
        <div className="flex gap-2 items-center text-primary">
          <FlaskConical />
          <p className="text-2xl font-bold">Mock Lab</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-primary font-bold ">Website</p>
          <a>Demo Video</a>
          <a>Features</a>
          <a>Testimonials</a>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-primary font-bold">Resources</p>
          <a>Contact</a>
          <a>Support</a>
          <a>Status</a>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-primary font-bold">Social</p>
          <a>LinkedIn</a>
          <a>GitHub</a>
          <a>YouTube</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
