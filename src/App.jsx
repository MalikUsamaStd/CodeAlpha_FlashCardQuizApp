import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FlashCardViewer from "./Components/FlashCardViewer";
import FlashCardManager from " ./Components/FlashCardManager";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <Navbar/>
        <Routes>
          <Route path="/" element={<FlashCardViewer />} />
          <Route path="/manage" element={<FlashCardManager />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
