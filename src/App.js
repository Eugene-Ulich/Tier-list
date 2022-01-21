import "./App.css";

import TierList from "./components/TierList";
import Footer from "./components/theme/Footer";
import Header from "./components/theme/Header";
import React from 'react';

function App() {

  return (
    <React.Fragment>
      <Header />
      <TierList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
