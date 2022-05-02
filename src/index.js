import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./table.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowCL from "./ShowCL";
import EditList from "./EditList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Route exact path="/" element={<App />} />
    <Route path="/CategoryList/Edit" element={<EditList />} />
    <Route path="/CategoryList/Show" element={<ShowCL />} />
  </React.StrictMode>
);
