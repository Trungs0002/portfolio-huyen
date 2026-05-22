import React from "react";

const CareerDirection = () => {
  const directions = [
    {
      icon: "handshake",
      title: "Business Development & Partnership",
      aim: "I aim to develop in Business Development and Partnership roles, where I can work with partners, support collaboration processes, and contribute to business growth.",
      experience: "My current experience at LynkiD helps me understand partner communication, contract-related documents, voucher/product onboarding, and coordination between internal teams and external partners.",
    },
    {
      icon: "event_note",
      title: "Event & Project Operations",
      aim: "I am interested in event and project operations, especially planning, timeline management, team coordination, and program execution.",
      experience: "Through my roles in FTU MC & Fashion Club, MC FIRE 2025, and FTU Fashion Show, I have developed experience in organizing events, managing implementation progress, and coordinating different teams during real projects.",
    },
    {
      icon: "shopping_bag",
      title: "Fashion Branding & E-commerce",
      aim: "I am also interested in fashion branding and e-commerce, particularly how a fashion-related idea can be developed into a product, brand story, and online business presence.",
      experience: "Through DIAS Fashion Club and LOOM, I have explored brand concept development, visual direction, sustainable fashion ideas, and the way creative projects can connect with business strategy.",
    },
  ];

  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-secondary-container" id="career">
      <div className="max-w-container-max mx-auto reveal-on-scroll">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Career Direction</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directions.map((dir, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-2xl p-8 hover-card ring-1 ring-primary/10 hover:ring-primary/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">{dir.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-headline-md text-xl md:text-2xl text-on-surface mb-4 min-h-[56px] flex items-center">
                {dir.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-primary/20 mb-6"></div>

              {/* Aim Paragraph (Core Goal) */}
              <p className="font-body-md text-body-md text-on-surface font-semibold leading-relaxed mb-4 flex-grow-0">
                {dir.aim}
              </p>

              {/* Experience Paragraph (Background context) */}
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-auto">
                {dir.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerDirection;
