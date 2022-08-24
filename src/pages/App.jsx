import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import NotFound from "./notFound/NotFound";
import Navbar from "../components/Navbar";
import Products from "./products/Products";
import Product from "../components/product/Product";
import { Contact, Footer, About } from "./LazyComponentsPages";

import { candles, paintings } from "../productsData";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="products" element={<Products />}>
          <Route path="velas" element={<Product product={candles} />} />
          <Route path="pinturas" element={<Product product={paintings} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
