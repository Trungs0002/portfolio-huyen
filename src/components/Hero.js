import React, { useEffect, useRef } from "react";

const Hero = () => {
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const { clientX, clientY } = e;
      const xOffset1 = (window.innerWidth / 2 - clientX) * 2 / 100;
      const yOffset1 = (window.innerHeight / 2 - clientY) * 2 / 100;

      const xOffset2 = (window.innerWidth / 2 - clientX) * -3 / 100;
      const yOffset2 = (window.innerHeight / 2 - clientY) * -3 / 100;

      if (shape1Ref.current) {
        shape1Ref.current.style.transform = `translateX(${xOffset1}px) translateY(${yOffset1}px)`;
      }
      if (shape2Ref.current) {
        shape2Ref.current.style.transform = `translateX(${xOffset2}px) translateY(${yOffset2}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
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

  return (
    <section
      className="min-h-screen pt-32 pb-section-padding-mobile md:pb-section-padding-desktop px-gutter flex items-center relative overflow-hidden section-block"
      id="home"
    >
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <div
        ref={shape1Ref}
        className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rounded-full blur-xl pointer-events-none transition-transform duration-100 ease-out"
      ></div>
      <div
        ref={shape2Ref}
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none transition-transform duration-100 ease-out"
      ></div>

      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="md:col-span-7 space-y-8 reveal-on-scroll">
          <div>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-4 leading-tight">
              Nguyen Ngoc <br />
              <span className="text-primary italic">Khanh Huyen</span>
            </h1>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Business Development Intern at LynkiD | President of MC and Fashion Club | Deputy Youth Union Secretary at Foreign Trade University | Co-founder of DIAS Fashion.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-primary/90 transition-colors ambient-shadow animate-pulse-shimmer"
              href="#cv"
              onClick={(e) => handleScrollToSection(e, "#cv")}
            >
              View My CV
            </a>
            <a
              className="border border-primary text-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-surface-variant/50 transition-colors"
              href="#experience"
              onClick={(e) => handleScrollToSection(e, "#experience")}
            >
              Explore My Experience
            </a>
            <a
              className="flex items-center gap-2 text-secondary font-label-md text-label-md hover:text-primary transition-colors py-4 px-2"
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
            >
              <span>Contact Me</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Right Portrait */}
        <div className="md:col-span-5 relative reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
          <div className="relative w-full aspect-[4/5] rounded-t-full rounded-b-lg overflow-hidden glass-panel border border-surface/50 p-2 hover-card">
            <div className="w-full h-full rounded-t-full rounded-b-sm overflow-hidden bg-surface-variant relative">
              <img
                alt="NGUYEN NGOC KHANH HUYEN Portrait"
                className="w-full h-full object-cover"
                src="/avatar.jpg"
              />
            </div>
          </div>

          {/* Floating Tags */}
          <div className="absolute top-1/4 -left-8 bg-surface text-on-surface font-label-md text-label-md px-4 py-2 rounded-full ambient-shadow border border-surface-variant flex items-center gap-2 animate-float">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            Business Development
          </div>
          <div className="absolute bottom-1/4 -right-4 bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-full ambient-shadow flex items-center gap-2 animate-float-delayed">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              event
            </span>
            Event Operations
          </div>
          <div className="absolute -bottom-6 left-1/4 bg-surface text-on-surface font-label-md text-label-md px-4 py-2 rounded-full ambient-shadow border border-surface-variant animate-float">
            Leadership
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
