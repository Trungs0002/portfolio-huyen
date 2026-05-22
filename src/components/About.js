import React, { useState } from "react";

const About = () => {
  const [activeImage, setActiveImage] = useState(null);

  const skillImages = [
    { src: "/skill1.jpg", alt: "Skill Highlight 1", className: "col-span-2 aspect-[16/9]" },
    { src: "/skill2.jpg", alt: "Skill Highlight 2", className: "col-span-1 aspect-[4/3]" },
    { src: "/skill3.jpg", alt: "Skill Highlight 3", className: "col-span-1 aspect-[4/3]" },
  ];

  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface" id="about">
      <div className="max-w-container-max mx-auto reveal-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">About Me</h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
              I am Nguyen Ngoc Khanh Huyen, a Business Administration student at Foreign Trade University, with experience in event organization, program operations, and partner-related work. My working style is structured, planning-oriented, and focused on practical execution.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Through student clubs, competitions, and event projects, I have developed skills in planning, coordinating people, building program content, and managing implementation progress. I am currently expanding my experience in Business Development at LynkiD.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
              My career interests include Business Development, Partnership, Event Management, and Brand/Project Coordination.
            </p>
            {/* Quick Details Box */}
            <div className="bg-secondary-container/50 rounded-lg p-6 border border-primary/10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div>
                <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">Date of Birth</span>
                <span className="text-on-surface font-body-md font-semibold">24 Sept 2005</span>
              </div>
              <div>
                <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">Location</span>
                <span className="text-on-surface font-body-md font-semibold">Hanoi, Vietnam</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {skillImages.map((img, idx) => (
              <div
                key={idx}
                className={`${img.className} overflow-hidden rounded-xl hover-card ring-1 ring-primary/10 shadow-md hover:shadow-lg transition-all cursor-pointer`}
                onClick={() => setActiveImage(img.src)}
              >
                <img
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src={img.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out transition-all duration-300"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-full flex items-center justify-center"
            onClick={() => setActiveImage(null)}
          >
            <span className="material-symbols-outlined text-2xl font-bold">close</span>
          </button>
          <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl relative transition-all duration-300 scale-100">
            <img
              src={activeImage}
              alt="Zoomed Skill Highlight"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
