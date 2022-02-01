import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./App";
import Home from "./components/theme/Home";
import CreateNewTierList from "./components/tier-list/CreateNewTierList";
import Discover from "./components/theme/Discover";
import TierList from "./components/TierList";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="create-new-tier-list" element={<CreateNewTierList />} />
        <Route path="category" element={<Discover />} />
        <Route path="category/:listName" element={<TierList />} />
        <Route
          path="*"
          element={
            <main>
              <h1>Oops! Something went wrong!</h1>
              <Link to="/">Go back to homepage</Link>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
