import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";
import ProjectDetail from "./components/ProjectDetail";
import HeroWithLeaves from "./components/Hero/HeroWithLeaves";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Preloader from "./components/Preloader";
function App() {
  return (
   
    <Router>
      <div className="min-h-screen bg-[#121110]">
        {/* Navbar stays fixed and visible across all pages */}
        <Navbar />

        {/* Routes for your pages */}
        
    <ScrollToHash />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                {/* Assign IDs so Navbar buttons can scroll to these sections */}
                
                <Preloader />
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
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
