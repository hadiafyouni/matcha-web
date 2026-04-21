import { useState } from "react";
import "./App.css"
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <Header isOpen={isOpen} handleMenuClick={handleMenuClick} />
      <Sidebar isOpen={isOpen} />
      <Home />
    </>
  );
}