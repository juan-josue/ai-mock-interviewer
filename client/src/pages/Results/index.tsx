import Hero from "./Hero";
import Score from "./Score";
import Communication from "./Communication";

function index() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Score />
      <Communication />
    </div>
  );
}

export default index;
