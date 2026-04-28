import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Header from "../Home/Header/Header";
import Sidebar from "../Home/Sidebar/Sidebar";
import Home from "../Home/Home";
import Products from "../Products/Products";
import ProductDetail from "../ProductDetail/ProductDetail";
import OurStory from "../OurStory/OurStory";
import Events from "../Events/Events";
import Cart from "../Cart/Cart";
import SignIn from "../SignIn/SignIn";
import Footer from "../Footer/Footer";
import { CartProvider } from "../context/CartContext";
import ScrollToTop from "../components/ScrollToTop";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <ScrollToTop />
        <Header isOpen={isOpen} handleMenuClick={handleMenuClick} />
        <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />

        {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}