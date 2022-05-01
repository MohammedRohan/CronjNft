import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sendnotification from "./Sendnotification";
import Allnotification from "./Allnotification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/SendNotification" element={<Sendnotification />} />
        <Route
          path="/SendNotification/AllNotification"
          element={<Allnotification />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
