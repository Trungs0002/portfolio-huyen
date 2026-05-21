import React from "react";

const About = () => {
  const capabilities = [
    {
      icon: "event_available",
      title: "Event Operations",
      desc: "Timeline, planning & coordination",
    },
    {
      icon: "description",
      title: "Partnership Docs",
      desc: "Contracts & proposal processing",
    },
    {
      icon: "computer",
      title: "Tech Tools",
      desc: "MS Office & Basic SQL query",
    },
    {
      icon: "translate",
      title: "Languages",
      desc: "English (IELTS 7.0) & Russian",
    },
  ];

  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface" id="about">
      <div className="max-w-container-max mx-auto reveal-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">About Me</h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
              I am Nguyen Ngoc Khanh Huyen, a dedicated student of International Business Administration at Foreign Trade University (Hanoi) with a GPA of 3.57. My professional journey combines business development with a vibrant leadership presence in student organizations and large-scale event management.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Currently acting as the President of the MC and Fashion Club (FTU) and the Deputy Youth Union Secretary, I thrive in managing cross-functional teams, planning comprehensive timelines, building active partner relations, and translating conceptual ideas into flawless event operations.
            </p>
            {/* Quick Details Box */}
            <div className="bg-secondary-container/50 rounded-lg p-6 border border-primary/10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              <div>
                <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">Date of Birth</span>
                <span className="text-on-surface font-body-md font-semibold">24 Sept 2005</span>
              </div>
              <div>
                <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">Location</span>
                <span className="text-on-surface font-body-md font-semibold">Hanoi, Vietnam</span>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 border border-primary/20 flex flex-col justify-center items-center">
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider block text-center mb-0.5">Cumulative GPA</span>
                <span className="text-primary font-headline-md text-xl font-bold">3.57 / 4.00</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-secondary-container p-6 rounded-lg text-center hover-card">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">{cap.icon}</span>
                <h3 className="font-headline-md text-lg text-on-surface mb-1">{cap.title}</h3>
                <p className="text-sm text-on-surface-variant">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
