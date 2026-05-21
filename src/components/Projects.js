import React from "react";

const Projects = () => {
  const businessProjects = [
    {
      image: "/mcfire.jpg",
      title: "MC FIRE 2025",
      subtitle: "Head Organizer",
      desc: "Coordinated overall operations for the host/presenter talent search competition. Managed timelines, personnel allocation, and cross-department collaboration.",
      linkText: "View Event Details",
    },
    {
      image: "/ftufashionshow.jpg",
      title: "FTU Fashion Show 2024",
      subtitle: "Organizing Committee Member",
      desc: "Managed the front-of-house operations for 'Phân Tâm'. Coordinated VIP check-in, audience entry flow, and guest reception logistics.",
      linkText: "View Album",
    },
    {
      image: "https://images.unsplash.com/photo-1521791136368-1a86827076b2?auto=format&fit=crop&w=800&q=80",
      title: "LynkiD Partner Drive",
      subtitle: "Business Development Support",
      desc: "Identified retail prospects, managed contract compliance, voucher data verification, and facilitated the digital onboarding of premium partners.",
      linkText: "Read Campaign Case",
    },
    {
      image: "/dahoinga.jpg",
      title: "Russian Gala 2022",
      subtitle: "Head of Content",
      desc: "Designed the artistic content blueprint, ensuring theme coherence across play scripts, musical sections, and logistical schedules.",
      linkText: "Explore Content Blueprint",
    },
    {
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      title: "DIAS Fashion Club",
      subtitle: "Co-founder",
      desc: "Co-founded the club at Phan Boi Chau High School. Built visual branding, foundational concepts, and directed initial stage member collaborations.",
      linkText: "View Brand Identity",
    },
  ];

  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-secondary-container" id="projects">
      <div className="max-w-container-max mx-auto">
        <div className="reveal-on-scroll mb-16 max-w-3xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Selected Projects & Highlights</h2>
          <div className="w-16 h-1 bg-primary mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            A comprehensive overview of my leadership roles, event operations, and creative coordination, coupled with real memories from key events.
          </p>
        </div>

        {/* Business & Event Projects */}
        <div className="mb-20">
          <h3 className="font-headline-md text-2xl text-on-surface mb-8">Event Management & Business Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessProjects.map((proj, idx) => (
              <div key={idx} className="bg-surface rounded-lg overflow-hidden hover-card reveal-on-scroll flex flex-col md:flex-row" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="w-full md:w-1/3 overflow-hidden border-r border-outline-variant/30 relative bg-surface-variant">
                  <img
                    alt={proj.title}
                    className="w-full h-full object-cover aspect-video md:aspect-[3/4] hover:scale-105 transition-transform duration-500"
                    src={proj.image}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">{proj.subtitle}</span>
                    <h4 className="font-headline-md text-xl text-on-surface mb-2">{proj.title}</h4>
                    <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{proj.desc}</p>
                  </div>
                  <a className="text-primary font-label-md hover:underline flex items-center gap-1 mt-2" href="#contact">
                    {proj.linkText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Operations Gallery */}
        <div>
          <h3 className="font-headline-md text-2xl text-on-surface mb-8">Event Operations & Highlights Gallery</h3>
          <p className="font-body-md text-on-surface-variant mb-12 max-w-3xl">
            A visual documentation of actual large-scale events I have organized, directed, and managed, capturing key stages, crew coordinations, and memorable live production highlights.
          </p>

          <div className="space-y-16">
            {/* FTU Fashion Show */}
            <div className="reveal-on-scroll">
              <div className="border-l-4 border-primary pl-4 mb-6">
                <h4 className="font-headline-md text-xl md:text-2xl text-on-surface">FTU Fashion Show 2024: "Phan Tam"</h4>
                <p className="text-on-surface-variant text-sm font-label-md">Organizing Committee & Front-of-House Lead</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card">
                  <img
                    alt="FTU Fashion Show Highlights"
                    className="w-full h-full object-cover"
                    src="/ftufashionshowrieng.jpg"
                  />
                </div>
                <div className="md:col-span-8 aspect-[16/9] md:aspect-auto overflow-hidden rounded-lg hover-card">
                  <img
                    alt="FTU Fashion Show Catwalk"
                    className="w-full h-full object-cover"
                    src="/ftufashionshow.jpg"
                  />
                </div>
              </div>
            </div>

            {/* MC FIRE */}
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <div className="border-l-4 border-primary pl-4 mb-6">
                <h4 className="font-headline-md text-xl md:text-2xl text-on-surface">MC FIRE 2025</h4>
                <p className="text-on-surface-variant text-sm font-label-md">Head Organizer — Presenter Search Competition</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 aspect-[16/9] md:aspect-auto overflow-hidden rounded-lg hover-card order-2 md:order-1">
                  <img
                    alt="MC FIRE Stage"
                    className="w-full h-full object-cover"
                    src="/mcfire.jpg"
                  />
                </div>
                <div className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card order-1 md:order-2">
                  <img
                    alt="MC FIRE Head Organizer"
                    className="w-full h-full object-cover"
                    src="/mcfirerieng.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Dạ Hội Nga / Russian Gala */}
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <div className="border-l-4 border-primary pl-4 mb-6">
                <h4 className="font-headline-md text-xl md:text-2xl text-on-surface">Russian Gala 2022: "Da Hoi Nga"</h4>
                <p className="text-on-surface-variant text-sm font-label-md">Head of Content — Theme, Flow & Stage Performance Coordination</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card">
                  <img
                    alt="Russian Gala Portrait"
                    className="w-full h-full object-cover"
                    src="/dahoingarieng.jpg"
                  />
                </div>
                <div className="md:col-span-8 aspect-[16/9] md:aspect-auto overflow-hidden rounded-lg hover-card">
                  <img
                    alt="Russian Gala Stage Performance"
                    className="w-full h-full object-cover"
                    src="/dahoinga.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
