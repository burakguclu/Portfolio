import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import GitHubRepos from "./pages/GitHubRepos";
import "./style.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/github-repos" element={<GitHubRepos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
