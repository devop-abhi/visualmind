import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Visualizer from "./pages/Visualizer";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/visualizer/:topic"
        element={<Visualizer />}
      />

    </Routes>
  );
}

export default App;