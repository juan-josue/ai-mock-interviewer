import Nav from "./Nav";
import Hero from "./Hero";
import DemoVideo from "./DemoVideo";
import Features from "./Features";
import Process from "./Process";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

function Landing() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <DemoVideo />
      <Features />
      <Process />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Landing;
