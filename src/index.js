import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Blades,
  Contact,
  Care,
  Create,
  Repurpose,
} from "./components";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blades" element={<Blades />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/care" element={<Care />} />
      <Route path="/create" element={<Create />} />
      <Route path="/repurpose" element={<Repurpose />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

//serviceWorker.unregister();