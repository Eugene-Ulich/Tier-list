import "./App.css";

import Footer from "./components/theme/Footer";
import Header from "./components/theme/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
