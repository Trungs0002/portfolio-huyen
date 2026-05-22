import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Business Development Intern",
      company: "LynkiD",
      duration: "2026 - Present",
      description:
        "Supported the search, outreach, and communication with potential partners during business development activities. Monitored contracts, voucher/product information, and supported the partner onboarding process onto the application.",
    },
    {
      title: "President of MC and Fashion Club",
      company: "Foreign Trade University, Hanoi",
      duration: "10/2025 - Present",
      description:
        "Represented the club in working with brands, partners, and external organizations during collaboration processes. Coordinated tasks across departments, monitored implementation progress, and summarized results after programs.",
    },
    {
      title: "Deputy Youth Union Secretary & Class Association President",
      company: "Foreign Trade University, Hanoi",
      duration: "10/2023 - Present",
      description:
        "Received, updated, and communicated information from the University Youth Union to students in the class. Coordinated with the class committee to implement activities and support general class operations.",
    },
    {
      title: "Head of Event Organization Department",
      company: "MC and Fashion Club, Foreign Trade University",
      duration: "10/2024 - 10/2025",
      description:
        "Developed master plans and timelines, assigned tasks, and monitored the progress of event organization. Prepared checklists, budget estimates, operation layouts, and post-event summaries.",
    },
    {
      title: "Head Organizer",
      company: "MC FIRE 2025: Van Hoa Thoi So",
      duration: "05/2025",
      description:
        "Coordinated the overall operation of MC FIRE 2025: Van Hoa Thoi So, a competition seeking talented hosts and presenters. Built the timeline, allocated personnel, coordinated departments, and supervised the event operation process.",
    },
    {
      title: "Organizing Committee Member",
      company: "FTU Fashion Show 2024: 'Phan Tam'",
      duration: "08/2024",
      description:
        "Contributed to building the timeline, tracking progress, and coordinating the implementation of event components. Led the outside/front-of-house area, in charge of guest reception, check-in, guest guidance, and crowd flow coordination.",
    },
    {
      title: "Head of Content",
      company: "Russian Gala 2022: Fantajor",
      duration: "08/2022 - 12/2022",
      description:
        "Developed the overall content direction for the program, ensuring consistency in theme, message, and flow. Generated ideas, developed program content, and worked with other departments to turn concepts into practical event components.",
    },
    {
      title: "Co-founder",
      company: "DIAS Fashion Club",
      duration: "03/2021",
      description:
        "Participated in developing the initial idea and strategic direction for the club. Built the club’s concept, visual identity, and foundational activities. Coordinated early-stage operations including task allocation, member connection, and internal activity implementation.",
    },
    {
      title: "External Relations Committee Member",
      company: "Vi Tieng Cuoi Tre Tho 2021",
      duration: "01/2021",
      description:
        "Contacted and communicated with potential partners and sponsors to secure financial support for the volunteer project. Assisted in building project introduction content, conveying program objectives, and mobilizing resources for activities at the SOS Children's Village.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of International Business Administration",
      school: "Foreign Trade University, Hanoi",
      duration: "2023 - Present",
      gpa: "3.57",
      description:
        "Major in International Business Administration. Active student leader serving as Deputy Youth Union Secretary and MC & Fashion Club President.",
    },
    {
      degree: "Russian-specialized Class, Cohort 49",
      school: "Phan Boi Chau High School for the Gifted, Nghe An",
      duration: "2020 - 2023",
      description:
        "Active student with experience in event organization and program content development. One of the most prestigious gifted high schools in Vietnam.",
    },
  ];

  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface" id="experience">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Experience & Activities</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Experience */}
          <div className="lg:col-span-7 reveal-on-scroll">
            <h3 className="font-headline-md text-2xl text-on-surface mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">work</span>
              Professional Experience & Activities
            </h3>
            <div className="space-y-8 border-l-2 border-primary/20 pl-6 relative">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div
                    className={`absolute -left-[35px] top-1 w-4 h-4 rounded-full ring-4 ring-surface-container-low ${idx === 0 ? "bg-primary" : "bg-surface-variant border-2 border-primary"
                      }`}
                  ></div>
                  <h4 className="font-headline-md text-xl text-on-surface">{exp.title}</h4>
                  <p className="text-primary font-label-md mb-2">
                    {exp.company} | {exp.duration}
                  </p>
                  <div className="text-on-surface-variant font-body-md leading-relaxed space-y-1">
                    {exp.description.split('.').map((sentence, sIdx) => {
                      const trimmed = sentence.trim();
                      if (!trimmed) return null;
                      return (
                        <span key={sIdx} className="block">
                          • {trimmed}.
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-5 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <h3 className="font-headline-md text-2xl text-on-surface mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">school</span>
              Education
            </h3>
            <div className="space-y-8 border-l-2 border-primary/20 pl-6 relative">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div
                    className={`absolute -left-[35px] top-1 w-4 h-4 rounded-full ring-4 ring-surface-container-low ${idx === 0 ? "bg-primary" : "bg-surface-variant border-2 border-primary"
                      }`}
                  ></div>
                  <h4 className="font-headline-md text-xl text-on-surface">{edu.degree}</h4>
                  <p className="text-primary font-label-md mb-2">
                    {edu.school} | {edu.duration}
                  </p>
                  <div className="text-on-surface-variant font-body-md leading-relaxed space-y-1 mb-3">
                    {edu.description.split('.').map((sentence, sIdx) => {
                      const trimmed = sentence.trim();
                      if (!trimmed) return null;
                      return (
                        <span key={sIdx} className="block">
                          • {trimmed}.
                        </span>
                      );
                    })}
                  </div>
                  {edu.gpa && (
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded px-2.5 py-1 text-primary font-label-md font-semibold">
                      <span className="material-symbols-outlined text-sm">stars</span>
                      Cumulative GPA: {edu.gpa} / 4.00
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
