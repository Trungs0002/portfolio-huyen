import React from "react";

const Projects = () => {
  const businessProjects = [
    {
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      title: "MC FIRE 2025",
      subtitle: "Head Organizer",
      desc: "Coordinated overall operations for the host/presenter talent search competition. Managed timelines, personnel allocation, and cross-department collaboration.",
      linkText: "View Event Details",
    },
    {
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=800&q=80",
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
            A comprehensive overview of my leadership roles, event operations, and creative coordination, coupled with my visual fashion styling portfolio.
          </p>
        </div>

        {/* Business & Event Projects */}
        <div className="mb-20">
          <h3 className="font-headline-md text-2xl text-on-surface mb-8">Event Management & Business Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessProjects.map((proj, idx) => (
              <div key={idx} className="bg-surface rounded-lg overflow-hidden hover-card reveal-on-scroll flex flex-col md:flex-row" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="w-full md:w-1/3 overflow-hidden border-r border-outline-variant/30 relative">
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

        {/* Fashion Photography */}
        <div>
          <h3 className="font-headline-md text-2xl text-on-surface mb-8">Fashion Photography Portfolio</h3>
          <p className="font-body-md text-on-surface-variant mb-8 max-w-3xl">
            Beyond business strategy and large-scale operations, I express my creative vision through fashion photography and styling direction, focusing on geometric modern backgrounds and high-contrast styling layers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Left Featured Vertical */}
            <div className="md:col-span-5 reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg hover-card">
                  <img
                    alt="Editorial Series: Minimalist Modernism"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Mi_chpHp64ZWELQyHJx92hoxxTjY1D76PryZ4aUAgNa9uSn9QbsZOr1nFHszCu63iGBkQh2Ws_NpeN8oQSE0odIhz5Ovo-WRqcBpyBrMkONgqzFsHjcnYY7_Rk1hj8izhMQf6FJzIJYHb0MsknLxPNDzqYuSyTPQPKl0JN64tEd0gYhXdiVuO09bTiMwilk8BwyRJAHoARmVE9lVHNRTji19kxZ4KiK5PcxpUM-CzICYlB4uf1xDVv__40CDr6jbyaWQdbT1O1I"
                  />
                </div>
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-headline-md text-sm md:text-base italic text-on-surface-variant">Editorial Series: Minimalist Modernism</p>
                </div>
              </div>
            </div>
            {/* Right Grid */}
            <div className="md:col-span-7 flex flex-col gap-gutter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Detail Shot */}
                <div className="reveal-on-scroll space-y-4" style={{ transitionDelay: "0.2s" }}>
                  <div className="aspect-square overflow-hidden rounded-lg hover-card">
                    <img
                      alt="Texture & Detail: The Luxury of Craft"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4n4xlnf0dzk4fqWFIqpXMV_T4l17akWHubSrUS6ppypj19noThIoC8YCSGSqzgLMlyCMISzhHx7jTn0CzTsZVgaaQ5tY0wlK3J9aCh1qwEYLIiEtenXuHnktBXjKt-gAGhkzWr_sLYyhXQUzuBNdbqS6TpoSGZ61w2BBFG_ZtshR-KOZ7V2T81jsKusnx6zqFvuPe-wWCviA3A4flbFl2Eqf1Pruir6MMfFRUSrLyPWP5XUGZolb8b5lTDrRNdNuVE2gQ77mqubU"
                    />
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <p className="font-headline-md text-sm italic text-on-surface-variant">Texture & Detail: The Luxury of Craft</p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
              </div>
              {/* Horizontal lifestyle shot */}
              <div className="reveal-on-scroll space-y-4" style={{ transitionDelay: "0.3s" }}>
                <div className="aspect-[16/9] overflow-hidden rounded-lg hover-card">
                  <img
                    alt="Urban Elegance: Architectural Intersections"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Chwu34KLi_aqFLY2gI62P9Z4CPY9_AVdL32c6PuhuZYpyjZsaCy4u_s-qkksOkT5ZYNfBf6coTZjOXRAcQupM3-DbYV5Zdqp8mtypdZWTJ5YMPbAOHVaVsEOnG6QVCd_HTXqGzakuy3YTu3uYRXMyfhucpUOZuGt4R5kPaEQAvhda_9RQ6iJz-sUV35zmaIVJVTrbZtQJZhgHuLBhpsg_0UMw6m4Is37YxZd0c0hAzW9CFDyi_IfoHsxxtvyzTYQruYp0dbVJCM"
                  />
                </div>
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-headline-md text-sm italic text-on-surface-variant">Urban Elegance: Architectural Intersections</p>
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
