import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Header from "../Home/Header/Header";
import Sidebar from "../Home/Sidebar/Sidebar";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import ProductDetail from "../ProductDetail/ProductDetail";
import OurStory from "../OurStory/OurStory";
import Cart from "../Cart/Cart";
import { CartProvider } from "../context/CartContext";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen((prev) => !prev);
  }

  // Helper to close the sidebar when a link is clicked
  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <Header isOpen={isOpen} handleMenuClick={handleMenuClick} />
        <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />

        {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

        <main className={isOpen ? "main-content blurred" : "main-content"}>
          <Routes>
            <Route path="/" element={<Home isOpen={isOpen} />} />
            <Route path="/menu" element={<Menu isOpen={isOpen} />} />
            <Route path="/menu/:id" element={<ProductDetail />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}