import React, { useState, useRef } from "react";

const Projects = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollContainerRef = useRef(null);

  // eslint-disable-next-line
  const handleScroll = () => {
    if (!isExpanded && scrollContainerRef.current) {
      if (scrollContainerRef.current.scrollLeft > 10) {
        setIsExpanded(true);
      }
    }
  };

  const scroll = (direction) => {
    if (!isExpanded && direction === "right") {
      setIsExpanded(true);
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const cardWidth = scrollContainerRef.current.querySelector('.snap-start')?.clientWidth || 300;
          scrollContainerRef.current.scrollTo({
            left: cardWidth * 1.5,
            behavior: "smooth",
          });
        }
      }, 50);
      return;
    }

    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

  const creativeProjects = [
    {
      image: "/1.hoamong.jpg",
      title: "Hoa Mong",
      role: "Concept & Styling",
    },
    {
      image: "/2.ngayxuangayxua.jpg",
      title: "Ngay Xua Ngay Xua",
      role: "Visual Production",
    },
    {
      image: "/3.ngansacthanhxuan.jpg",
      title: "Ngan Sac Thanh Xuan",
      role: "Creative Direction",
    },
    {
      image: "/4.taitinh.jpg",
      title: "Tai Tinh",
      role: "Concept & Execution",
    },
    {
      image: "/5.greencollection.jpg",
      title: "Green Collection",
      role: "Sustainable Production",
    },
    {
      image: "/6.hihy.jpg",
      title: "Hi Hy",
      role: "Visual Coordination",
    },
    {
      image: "/7.ngoclamkinhky.jpg",
      title: "Ngoc Lam Kinh Ky",
      role: "Traditional Concept Styling",
    },
    {
      image: "/8.joyride.jpg",
      title: "Joyride",
      role: "Concept & Coordination",
    },
    {
      image: "/9.vorong.jpg",
      title: "Vo Rong",
      role: "Creative Production",
    },
    {
      image: "/10.hoaluandich.jpg",
      title: "Hoa Luan Dich",
      role: "Concept Planning",
    },
    {
      image: "/11.colormony.jpg",
      title: "Colormony",
      role: "Creative Coordination",
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

          <div className="space-y-20 lg:space-y-24">
            {/* MC FIRE */}
            <div className="reveal-on-scroll grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="border-l-4 border-primary pl-4 mb-4">
                  <h4 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold">MC FIRE 2025: Van Hoa Thoi So</h4>
                  <p className="text-on-surface-variant text-sm font-label-md">Head Organizer</p>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  MC FIRE 2025 is a student MC competition organized by FTU MC & Fashion Club to discover and develop young hosting talents. The project reflects my experience in managing event planning, team coordination, and program operations.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-12 gap-4">
                <div
                  className="col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/mcfirerieng.jpg")}
                >
                  <img
                    alt="MC FIRE Head Organizer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/mcfirerieng.jpg"
                  />
                </div>
                <div
                  className="col-span-8 aspect-[3/2] overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/mcfire.jpg")}
                >
                  <img
                    alt="MC FIRE Stage"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/mcfire.jpg"
                  />
                </div>
              </div>
            </div>

            {/* FTU Fashion Show */}
            <div className="reveal-on-scroll grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" style={{ transitionDelay: "0.1s" }}>
              <div className="lg:col-span-7 grid grid-cols-12 gap-4 order-2 lg:order-1">
                <div
                  className="col-span-8 aspect-[3/2] overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/ftufashionshow.jpg")}
                >
                  <img
                    alt="FTU Fashion Show Catwalk"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/ftufashionshow.jpg"
                  />
                </div>
                <div
                  className="col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/ftufashionshowrieng.jpg")}
                >
                  <img
                    alt="FTU Fashion Show Highlights"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/ftufashionshowrieng.jpg"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="border-l-4 border-primary pl-4 mb-4">
                  <h4 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold">FTU Fashion Show 2024: "Phan Tam"</h4>
                  <p className="text-on-surface-variant text-sm font-label-md">Organizing Committee & OutSite Leader</p>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  FTU Fashion Show 2024: “Phan Tam” is a student fashion show organized by FTU MC & Fashion Club, combining runway performance, stage production, and event operations. My role focused on outside-area coordination, including guest reception, check-in, and crowd flow management.
                </p>
              </div>
            </div>

            {/* Dạ Hội Nga / Russian Gala */}
            <div className="reveal-on-scroll grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" style={{ transitionDelay: "0.2s" }}>
              <div className="lg:col-span-5">
                <div className="border-l-4 border-primary pl-4 mb-4">
                  <h4 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold">Russian Gala 2022: Fantajor</h4>
                  <p className="text-on-surface-variant text-sm font-label-md">Head of Content</p>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Russian Gala 2022 is a cultural event built around a consistent program theme. My role focused on developing the content direction, program flow, and script framework for the event.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-12 gap-4">
                <div
                  className="col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/dahoingarieng.jpg")}
                >
                  <img
                    alt="Russian Gala Portrait"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/dahoingarieng.jpg"
                  />
                </div>
                <div
                  className="col-span-8 aspect-[3/2] overflow-hidden rounded-lg hover-card cursor-pointer"
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
            <div className="reveal-on-scroll grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" style={{ transitionDelay: "0.3s" }}>
              <div className="lg:col-span-7 grid grid-cols-12 gap-4 order-2 lg:order-1">
                <div
                  className="col-span-8 aspect-[3/2] overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/vitiengcuoitretho.jpg")}
                >
                  <img
                    alt="Vì Tiếng Cười Trẻ Thơ Stage / Activities"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/vitiengcuoitretho.jpg"
                  />
                </div>
                <div
                  className="col-span-4 aspect-[3/4] overflow-hidden rounded-lg hover-card cursor-pointer"
                  onClick={() => setActiveImage("/vitiengcuoitrethorieng.jpg")}
                >
                  <img
                    alt="Vì Tiếng Cười Trẻ Thơ Portrait / Committee Member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/vitiengcuoitrethorieng.jpg"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="border-l-4 border-primary pl-4 mb-4">
                  <h4 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold">Vi Tieng Cuoi Tre Tho 2021</h4>
                  <p className="text-on-surface-variant text-sm font-label-md">Finance Committee</p>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Vi Tieng Cuoi Tre Tho 2021 is a volunteer project organized to support children at SOS Children’s Village through fundraising and community engagement activities. My role focused on contacting potential sponsors, communicating the project’s purpose, and supporting financial preparation for the event.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Projects Gallery (Swiper / Horizontal Scroll) */}
        <div className="mt-24 border-t border-primary/10 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <h3 className="font-headline-md text-2xl text-on-surface mb-4">Creative Projects</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                A selection of photoshoots and visual productions where I contributed to concept development, production planning, creative coordination, and on-set execution. This section reflects my experience in organizing image-based projects and translating creative ideas into visual outcomes.
              </p>
            </div>
            
            {/* Swiper Controls */}
            <div className="flex items-center gap-4 self-end md:self-auto">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-primary/20 bg-surface/50 hover:bg-primary hover:border-primary text-on-surface hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md"
                aria-label="Previous photos"
              >
                <span className="material-symbols-outlined font-bold">arrow_back</span>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-primary/20 bg-surface/50 hover:bg-primary hover:border-primary text-on-surface hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md"
                aria-label="Next photos"
              >
                <span className="material-symbols-outlined font-bold">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Horizontal Slider Container */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 px-2 cursor-grab active:cursor-grabbing no-scrollbar"
            >
              {creativeProjects.map((item, idx) => {
                const isThirdCard = idx === 2;
                const showOverlay = !isExpanded && isThirdCard;

                if (showOverlay) {
                  return (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[40vw] lg:w-[28vw] aspect-[3/2] snap-start relative overflow-hidden rounded-2xl bg-surface-variant hover-card cursor-pointer shadow-md hover:shadow-2xl border border-primary/5 transition-all duration-500 group"
                      onClick={() => {
                        setIsExpanded(true);
                        setTimeout(() => {
                          if (scrollContainerRef.current) {
                            const cardWidth = scrollContainerRef.current.querySelector('.snap-start')?.clientWidth || 300;
                            scrollContainerRef.current.scrollTo({
                              left: cardWidth * 2,
                              behavior: "smooth",
                            });
                          }
                        }, 50);
                      }}
                    >
                      {/* Blurred Background Image */}
                      <img
                        src={item.image}
                        alt="More Photoshoots"
                        className="w-full h-full object-cover filter blur-[3px] scale-105"
                      />

                      {/* Glassmorphism Expander Details */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex flex-col items-start justify-center p-6 sm:p-8 md:p-10 text-left group-hover:bg-black/50 transition-colors duration-300">
                        <span className="material-symbols-outlined text-white/90 text-3xl mb-2 animate-pulse">
                          arrow_forward
                        </span>
                        <h4 className="font-headline-md text-5xl md:text-6xl text-white font-light tracking-widest font-serif leading-none">
                          +8
                        </h4>
                        <p className="font-label-md text-xs md:text-sm text-white/90 uppercase tracking-widest mt-4 font-bold">
                          Scroll
                        </p>
                        <p className="text-white/60 text-[10px] md:text-xs mt-1 font-light max-w-[120px] leading-tight">
                          to view all
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[40vw] lg:w-[28vw] aspect-[3/2] snap-start relative overflow-hidden rounded-2xl bg-surface-variant hover-card cursor-pointer shadow-md hover:shadow-2xl border border-primary/5 transition-all duration-500 group"
                    onClick={() => setActiveImage(item.image)}
                  >
                    {/* Photo */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <span className="material-symbols-outlined text-white/90 text-xl absolute top-4 right-4 bg-white/10 p-1.5 rounded-full backdrop-blur-sm transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300">
                        zoom_in
                      </span>
                      
                      <h4 className="font-headline-md text-lg md:text-xl text-white font-bold leading-tight transform translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
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
