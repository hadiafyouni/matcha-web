import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 1. Import Router tools
import "./App.css"
import Header from "../Home/Header/Header";
import Sidebar from "../Home/Sidebar/Sidebar";
import Home from "../Home/Home";
import Menu from "../Menu/Menu"; // 2. Import your new Menu component

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen((prev) => !prev);
  }

  // Helper to close menu when a link is clicked
  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <BrowserRouter> {/* 3. Wrap everything in BrowserRouter */}
      <Header isOpen={isOpen} handleMenuClick={handleMenuClick} />

      {/* Pass closeMenu to Sidebar so links can close the drawer */}
      <Sidebar isOpen={isOpen} closeMenu={closeMenu} />

      <main>
        <Routes> {/* 4. Define your "TV Screen" area */}

          {/* URL: / -> Shows Home */}
          <Route path="/" element={<Home isOpen={isOpen} />} />

          {/* URL: /menu -> Shows Menu */}
          <Route path="/menu" element={<Menu isOpen={isOpen} />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}