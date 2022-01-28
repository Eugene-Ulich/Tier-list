import "./App.css";

import TierList from "./components/TierList";
import Footer from "./components/theme/Footer";
import Header from "./components/theme/Header";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create-new-tier-list" element={<Change />} />
        <Header />
        <TierList />
        <Footer />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
