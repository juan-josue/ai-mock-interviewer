import { Routes, Route } from "react-router";

import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Interview from "./pages/Interview";
import Results from "./pages/Results"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
