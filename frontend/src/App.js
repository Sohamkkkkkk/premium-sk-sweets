import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Signature from "@/pages/Signature";
import Catalogue from "@/pages/Catalogue";
import FastFood from "@/pages/FastFood";
import Celebrations from "@/pages/Celebrations";
import Gallery from "@/pages/Gallery";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signature" element={<Signature />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/fast-food" element={<FastFood />} />
        <Route path="/celebrations" element={<Celebrations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
