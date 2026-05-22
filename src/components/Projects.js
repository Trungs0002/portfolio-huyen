import React, { useState } from "react";

const Projects = () => {
  const [activeImage, setActiveImage] = useState(null);

  const businessProjects = [
    {
      image: "/loom.png",
      title: "Loom Sustainable Startup Project",
      subtitle: "Top 15 I-Impact Competition 2026",
      desc: `LOOM is a sustainable fashion project focused on upcycled denim bags made from old jeans. The project explores product concept development, brand identity, visual storytelling, and online business potential.
My role included developing the project idea, brand direction, product concept, visual identity, business model, and pitching materials.`,
      linkText: "Visit Loom Denim",
      href: "https://loomdenim.vercel.app/",
    },
  ];

  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-secondary-container" id="projects">
      <div className="max-w-container-max mx-auto">
        <div className="reveal-on-scroll mb-16 max-w-3xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Selected Projects & Portfolio</h2>
          <div className="w-16 h-1 bg-primary mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            A comprehensive overview of my leadership roles, event operations, and creative coordination, coupled with real memories from key events.
          </p>
        </div>

        {/* Business & Event Projects */}
        <div className="mb-20">
          <h3 className="font-headline-md text-2xl text-on-surface mb-8">Brand & Business Projects</h3>
          <div className="grid grid-cols-1 gap-8">
            {businessProjects.map((proj, idx) => (
              <div key={idx} className="bg-gradient-to-br from-surface to-primary/5 rounded-2xl overflow-hidden hover-card reveal-on-scroll flex flex-col md:flex-row max-w-4xl mx-auto ring-1 ring-primary/20 hover:ring-2 hover:ring-primary/40 transition-all shadow-xl hover:shadow-2xl shadow-primary/5 hover:shadow-primary/10" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div
                  className="w-full md:w-2/5 overflow-hidden border-r border-outline-variant/30 relative bg-surface-variant cursor-pointer"
                  onClick={() => setActiveImage(proj.image)}
                >
                  <img
                    alt={proj.title}
                    className="w-full h-full object-cover aspect-video md:aspect-[4/3] hover:scale-105 transition-transform duration-500"
                    src={proj.image}
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500/90 to-amber-600/90 text-white rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm border border-amber-400/30 w-fit">
                      <span className="material-symbols-outlined text-sm animate-pulse text-amber-100">military_tech</span>
                      {proj.subtitle}
                    </span>
                    <h4 className="font-headline-md text-2xl text-on-surface mb-3">{proj.title}</h4>
                    <p className="text-on-surface-variant text-sm mb-4 leading-relaxed whitespace-pre-line">{proj.desc}</p>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg mt-4 w-fit"
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proj.linkText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Operations Gallery */}
        <div>
          <h3 className="font-headline-md text-2xl text-on-surface mb-8">Event & Organization Projects</h3>
          <p className="font-body-md text-on-surface-variant mb-12 max-w-3xl">
            A visual documentation of actual large-scale events I have organized, directed, and managed, capturing key stages, crew coordinations, and memorable live production highlights.
          </p>

          <div className="space-y-16">
            {/* FTU Fashion Show */}
            <div className="reveal-on-scroll">
              <div className="border-l-4 border-primary pl-4 mb-6">
                <h4 className="font-headline-md text-xl md:text-2xl text-on-surface">FTU Fashion Show 2024: "Phan Tam"</h4>
                <p className="text-on-surface-variant text-sm font-label-md mb-3">Organizing Committee & OutSite Leader</p>
                <p className="text-on-surface-variant text-sm max-w-4xl leading-relaxed mt-2">
                  FTU Fashion Show 2024: “Phan Tam” is a student fashion show organized by FTU MC & Fashion Club, combining runway performance, stage production, and event operations. My role focused on outside-area coordination, including guest reception, check-in, and crowd flow management.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div
                  className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/ftufashionshowrieng.jpg")}
                >
                  <img
                    alt="FTU Fashion Show Highlights"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/ftufashionshowrieng.jpg"
                  />
                </div>
                <div
                  className="md:col-span-8 aspect-[16/9] md:aspect-auto overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/ftufashionshow.jpg")}
                >
                  <img
                    alt="FTU Fashion Show Catwalk"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/ftufashionshow.jpg"
                  />
                </div>
              </div>
            </div>

            {/* MC FIRE */}
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <div className="border-l-4 border-primary pl-4 mb-6">
                <h4 className="font-headline-md text-xl md:text-2xl text-on-surface">MC FIRE 2025: Van Hoa Thoi So</h4>
                <p className="text-on-surface-variant text-sm font-label-md mb-3">Head Organizer</p>
                <p className="text-on-surface-variant text-sm max-w-4xl leading-relaxed mt-2">
                  MC FIRE 2025 is a student MC competition organized by FTU MC & Fashion Club to discover and develop young hosting talents. The project reflects my experience in managing event planning, team coordination, and program operations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div
                  className="md:col-span-8 aspect-[16/9] md:aspect-auto overflow-hidden rounded-lg hover-card order-2 md:order-1 cursor-pointer"
                  onClick={() => setActiveImage("/mcfire.jpg")}
                >
                  <img
                    alt="MC FIRE Stage"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/mcfire.jpg"
                  />
                </div>
                <div
                  className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card order-1 md:order-2 cursor-pointer"
                  onClick={() => setActiveImage("/mcfirerieng.jpg")}
                >
                  <img
                    alt="MC FIRE Head Organizer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/mcfirerieng.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Dạ Hội Nga / Russian Gala */}
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <div className="border-l-4 border-primary pl-4 mb-6">
                <h4 className="font-headline-md text-xl md:text-2xl text-on-surface">Russian Gala 2022: Fantajor</h4>
                <p className="text-on-surface-variant text-sm font-label-md mb-3">Head of Content</p>
                <p className="text-on-surface-variant text-sm max-w-4xl leading-relaxed mt-2">
                  Russian Gala 2022 is a cultural event built around a consistent program theme. My role focused on developing the content direction, program flow, and script framework for the event.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div
                  className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/dahoingarieng.jpg")}
                >
                  <img
                    alt="Russian Gala Portrait"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/dahoingarieng.jpg"
                  />
                </div>
                <div
                  className="md:col-span-8 aspect-[16/9] md:aspect-auto overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/dahoinga.jpg")}
                >
                  <img
                    alt="Russian Gala Stage Performance"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/dahoinga.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Vì Tiếng Cười Trẻ Thơ 2021 */}
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.3s" }}>
              <div className="border-l-4 border-primary pl-4 mb-6">
                <h4 className="font-headline-md text-xl md:text-2xl text-on-surface">Vi Tieng Cuoi Tre Tho 2021</h4>
                <p className="text-on-surface-variant text-sm font-label-md mb-3">Finance Committee</p>
                <p className="text-on-surface-variant text-sm max-w-4xl leading-relaxed mt-2">
                  Vi Tieng Cuoi Tre Tho 2021 is a volunteer project organized to support children at SOS Children’s Village through fundraising and community engagement activities. My role focused on contacting potential sponsors, communicating the project’s purpose, and supporting financial preparation for the event.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div
                  className="md:col-span-8 aspect-[16/9] md:aspect-auto overflow-hidden rounded-lg hover-card order-2 md:order-1 cursor-pointer"
                  onClick={() => setActiveImage("/vitiengcuoitretho.jpg")}
                >
                  <img
                    alt="Vì Tiếng Cười Trẻ Thơ Stage / Activities"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 animate-fade-in"
                    src="/vitiengcuoitretho.jpg"
                  />
                </div>
                <div
                  className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card order-1 md:order-2 cursor-pointer"
                  onClick={() => setActiveImage("/vitiengcuoitrethorieng.jpg")}
                >
                  <img
                    alt="Vì Tiếng Cười Trẻ Thơ Portrait / Committee Member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 animate-fade-in"
                    src="/vitiengcuoitrethorieng.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out transition-all duration-300 animate-fade-in"
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
              alt="Zoomed Project Highlight"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
