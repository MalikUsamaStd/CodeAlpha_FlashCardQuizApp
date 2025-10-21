import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FlashCardManager from "./Components/FlashcardManager";
import FlashCardViewer from "./Components/FlashCardViewer";

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
