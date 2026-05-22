import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CareerDirection from "./components/CareerDirection";
import CVDownload from "./components/CVDownload";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      // We add a tiny delay to let the DOM settle before observing
      const timer = setTimeout(() => {
        document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
          observer.observe(el);
        });
      }, 100);

      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="bg-secondary-container text-on-surface font-body-md text-body-md antialiased min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CareerDirection />
      <Experience />
      <Projects />
      <Skills />
      <CVDownload />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
