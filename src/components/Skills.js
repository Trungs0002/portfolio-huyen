import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Operations & Event Management",
      icon: "event",
      skills: [
        "Event Organization & Operations",
        "Timeline & Budget Planning",
        "Process Coordination",
      ],
    },
    {
      title: "Partnership & Digital Tools",
      icon: "description",
      skills: [
        "Partnership Documentation & Contracts",
        "Microsoft Office: Word, Excel, PowerPoint",
        "Basic SQL Data Querying",
      ],
    },
    {
      title: "Coordination & Communication",
      icon: "forum",
      skills: [
        "Team Coordination & Leadership",
        "Partner Communication",
        "English: IELTS Academic 7.0",
      ],
    },
  ];

  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface" id="skills">
      <div className="max-w-container-max mx-auto text-center reveal-on-scroll">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Skills & Expertise</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 text-left">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-secondary-container/40 p-8 rounded-2xl border border-primary/10 hover-card flex flex-col"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                </div>
                <h3 className="font-headline-md text-lg md:text-xl text-on-surface font-bold leading-snug">
                  {cat.title}
                </h3>
              </div>

              {/* Decorative Divider */}
              <div className="w-full h-[1px] bg-primary/10 mb-6"></div>

              {/* Skills List inside capsules */}
              <ul className="space-y-4 flex-grow">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-start gap-3 bg-surface/50 rounded-xl p-3.5 border border-primary/5 hover:border-primary/20 transition-all duration-350 hover:bg-surface hover:shadow-sm"
                  >
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 flex-shrink-0">
                      verified
                    </span>
                    <span className="font-body-md text-on-surface font-medium leading-relaxed">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
