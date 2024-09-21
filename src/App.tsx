import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reading from "./pages/Reading";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<Reading />} />
      </Routes>
    </Router>
  );
}

export default App;
