import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Counter from "./pages/counter";
import Profile from "./pages/profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
