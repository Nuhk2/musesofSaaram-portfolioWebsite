import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";
import HeroWithLeaves from "./components/HeroWithLeaves";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121110]">
        {/* Navbar stays fixed and visible across all pages */}
        <Navbar />

        {/* Routes for your pages */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                {/* Assign IDs so Navbar buttons can scroll to these sections */}
                
                <section id="hero">
                  <HeroWithLeaves />
                </section>

                {/* <section id="">
                  <Hero />
                </section> */}

                <section id="projects">
                  <Portfolio />
                </section>

                <section id="services">
                  <Services />
                </section>

                <section id="about">
                  <About />
                </section>

                <section id="contacts">
                  <Contact />
                </section>
              

              <section id="contact">
                <Footer/>
                </section>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
