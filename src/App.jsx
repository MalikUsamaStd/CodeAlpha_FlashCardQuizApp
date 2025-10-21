import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlashcardViewer from "./Component/FlashCardViewer";
import FlashcardManager from "./Component/FlashcardManager";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <Navbar/>
        <Routes>
          <Route path="/" element={<FlashcardViewer />} />
          <Route path="/manage" element={<FlashcardManager />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
