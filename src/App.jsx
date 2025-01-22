import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/banner";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import PricingPage from "./pages/pricing-page";
import RequestDemo from "./pages/request-demo";
import Footer from "./components/footer";
import Motion from "./components/motion";


export default function Home() {
  return (
    <div>
      <Router>
        <Banner />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Section1 />
                <Section2 />
                <Section3 />
                <Motion />
                <Section4 />
                <Section5 />
                <Section6 />
                <Footer />
              </main>
            }
          />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/request-demo" element={<RequestDemo />} />
        </Routes>
      </Router>
    </div>
  );
}
