import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Visualizer from "./Pages/Visualizer";

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