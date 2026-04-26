import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 1. Import Router tools
import "./App.css"
import Header from "../Home/Header/Header";
import Sidebar from "../Home/Sidebar/Sidebar";
import Home from "../Home/Home";
import Menu from "../Menu/Menu"; // 2. Import your new Menu component
import ProductDetail from "../ProductDetail/ProductDetail";
import OurStory from "../OurStory/OurStory";

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
    <BrowserRouter>
      <Header isOpen={isOpen} handleMenuClick={handleMenuClick} />
      <Sidebar isOpen={isOpen} closeMenu={closeMenu} />

      <main className={isOpen ? "main-content blurred" : "main-content"}>
        <Routes>

          <Route path="/" element={<Home isOpen={isOpen} />} />

          <Route path="/menu" element={<Menu isOpen={isOpen} />} />

          <Route path="/menu/:id" element={<ProductDetail />} />

          <Route path="/story" element={<OurStory />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}