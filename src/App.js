import "./App.css";
//import { fetchDatabase } from "./components/controller/InitializeFirebase";

import Footer from "./components/theme/Footer";
import Header from "./components/theme/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  /*  const db = new Promise((resolve) => {
    const result = fetchDatabase();
    if (result) {
      resolve(result);
    }
  }).then((result) => console.log(result)); */
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
      {/*       <div>
        Database:<div>test</div>
      </div> */}
    </React.Fragment>
  );
}

export default App;
