import React from "react";

import Profile from "./components/Profile";
import ContactUs from "./components/ContactUs";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
