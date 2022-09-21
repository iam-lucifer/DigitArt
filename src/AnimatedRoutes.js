import React from "react";
import Index from "./pages/home/index";
import Gallery from "./pages/gallery/gallery";
import Checkout from "./pages/checkout/checkout";
import About from "./pages/about/about";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Index />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/checkout" component={<Checkout />} />
    </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
