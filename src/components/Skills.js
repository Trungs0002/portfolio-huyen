import React from "react";

const Skills = () => {
  const skillsList = [
    "Event Organization & Operations",
    "Partnership Documentation & Contracts",
    "Microsoft Office (Word, Excel, PowerPoint)",
    "Basic SQL Data Querying",
    "English (IELTS 7.0)",
    "Team Coordination & Leadership",
    "Timeline & Budget Estimations",
  ];

  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface" id="skills">
      <div className="max-w-container-max mx-auto text-center reveal-on-scroll">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Skills & Expertise</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto animate-fade-in">
          {skillsList.map((skill, idx) => (
            <span
              key={idx}
              className="px-6 py-3 rounded-full border border-primary/30 text-on-surface font-label-md hover:bg-primary hover:text-on-primary transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Skills Showcase Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {["/skill1.jpg", "/skill2.jpg", "/skill3.jpg"].map((src, idx) => (
            <div key={idx} className="aspect-[4/3] overflow-hidden rounded-xl hover-card ring-1 ring-primary/10 shadow-md hover:shadow-lg transition-all">
              <img
                alt={`Skill Highlight ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
