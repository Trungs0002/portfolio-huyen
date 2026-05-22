import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Career", href: "#career" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  // Smooth scroll handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open

    const targetElement = document.querySelector(id);
    if (targetElement) {
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // Tracking active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + (document.getElementById("navbar")?.offsetHeight || 0) + 100;

      // Select sections
      const sections = document.querySelectorAll(".section-block");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = id;
        }
      });

      // Bottom of page check
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(97,0,0,0.1)] transition-all duration-300 ease-in-out"
        id="navbar"
      >
        {/* Desktop Nav */}
        <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4 hidden md:flex">
          <a
            className="font-headline-md text-primary tracking-tighter text-headline-md font-headline-md"
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
          >
            NNKH
          </a>
          <ul className="flex items-center gap-8 nav-links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    className={`nav-link font-label-md text-label-md transition-colors px-2 py-1 ${isActive
                        ? "text-primary font-bold border-b-2 border-primary pb-1 rounded-none"
                        : "text-secondary hover:text-primary hover:bg-surface-variant/20 rounded-lg"
                      }`}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/90 transition-colors ambient-shadow animate-pulse-shimmer"
            href="#cv"
            onClick={(e) => handleScrollTo(e, "#cv")}
          >
            Download CV
          </a>
        </div>

        {/* Mobile Nav Header */}
        <div className="md:hidden flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
          <a
            className="font-headline-md text-primary tracking-tighter text-headline-md font-headline-md"
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
          >
            NNKH
          </a>
          <button
            aria-label="Open menu"
            className="text-on-surface hover:text-primary transition-colors focus:outline-none p-2"
            onClick={() => setIsOpen(true)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-64 bg-surface shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button
            aria-label="Close menu"
            className="text-on-surface hover:text-primary transition-colors focus:outline-none p-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-8 py-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  className={`mobile-nav-link font-label-md text-label-md transition-colors block ${isActive
                      ? "text-primary font-bold border-b-2 border-primary pb-1 rounded-none"
                      : "text-secondary hover:text-primary"
                    }`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="px-8 mt-auto mb-8">
          <a
            className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/90 transition-colors ambient-shadow animate-pulse-shimmer block text-center"
            href="#cv"
            onClick={(e) => handleScrollTo(e, "#cv")}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-on-surface/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;
