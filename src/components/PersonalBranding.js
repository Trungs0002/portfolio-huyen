import React, { useState, useEffect } from 'react';

const PersonalBranding = () => {
  const [activeZoomImage, setActiveZoomImage] = useState(null);
  const [activeZoomTitle, setActiveZoomTitle] = useState('');

  // Lock body scroll when zoom overlay is active
  useEffect(() => {
    if (activeZoomImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeZoomImage]);

  const handleImageClick = (src, title) => {
    setActiveZoomImage(src);
    setActiveZoomTitle(title);
  };

  return (
    <section
      className="section-block px-6 md:px-16 py-32 bg-[#fbf9f8] reveal-on-scroll"
      id="branding"
    >
      {/* Custom Spring/Bounce Animations for Zoom Lightbox */}
      <style>{`
        @keyframes pb-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pb-zoom-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .pb-animate-fade-in {
          animation: pb-fade-in 0.25s ease-out forwards;
        }
        .pb-animate-zoom-in {
          animation: pb-zoom-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      <div className="max-w-[900px] mx-auto space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-4xl text-on-surface">Personal Branding Materials</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto"></div>
          <p className="font-body-md text-base text-on-secondary-container leading-relaxed">
            A collection of Canva-based visuals created for my Personal Brand, LOOM project, LinkedIn presence, and portfolio communication.
          </p>

          {/* Centered Canva Link Button */}
          <div className="pt-2">
            <a
              href="https://www.canva.com/design/DAHKZW_LMKc/Dxms1SHqknmP4UNSVGCApw/edit?ui=e30"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded font-body-md text-xs font-bold hover:bg-primary/95 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              View My Work on Canva
            </a>
          </div>
        </div>

        {/* Stack of Big Brand Sections (matching Huyen's typography) */}
        <div className="space-y-24">

          {/* Item 1: Personal Brand Identity Board */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-primary/10 pb-3">
              <h3 className="font-headline-md text-2xl text-on-surface">Personal Brand Identity Board</h3>
              <span className="font-body-md text-[10px] text-on-secondary-container uppercase tracking-wider font-semibold">Canva Visual 01</span>
            </div>

            {/* Large Image Container - Auto-expanding to match image height exactly */}
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-primary/10 shadow-[0_15px_45px_rgba(97,0,0,0.02)] bg-surface-container group cursor-zoom-in"
              onClick={() => handleImageClick('/1.png', 'Personal Brand Identity Board')}
            >
              {/* Premium hover glass overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-30 flex items-center justify-center">
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 bg-black/40 p-3 rounded-full backdrop-blur-sm shadow-md">
                  zoom_in
                </span>
              </div>

              {/* Fallback pattern (only shows when image fails or is loading) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-surface/40 flex items-center justify-center p-8 text-center z-0 min-h-[200px] md:min-h-[250px]">
                <div className="space-y-2">
                  <span className="font-headline-md text-2xl md:text-3xl text-primary/40 italic block select-none">
                    Personal Brand Identity Board
                  </span>
                  <span className="font-body-md text-[10px] text-primary/50 tracking-widest uppercase block select-none">
                    Canva Guideline Design
                  </span>
                </div>
              </div>

              <img
                alt="Personal Brand Identity Board"
                className="w-full h-auto block relative z-10 transition-transform duration-700 group-hover:scale-[1.01]"
                src="/1.png"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Description Card */}
            <div className="glass-panel p-6 md:p-8 rounded-xl border border-primary/10 bg-surface/60 backdrop-blur-md shadow-sm space-y-4 w-full">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded font-body-md text-xs font-bold uppercase tracking-wider">
                  Type: Branding guideline graphic
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container text-on-secondary-container rounded font-body-md text-xs font-semibold">
                  <span className="material-symbols-outlined text-xs">build</span>
                  Tools: Canva
                </span>
              </div>
              <p className="font-body-md text-sm md:text-base text-on-secondary-container leading-relaxed">
                <strong>Purpose:</strong> To define and present my personal brand identity across website, LinkedIn, and professional materials.
              </p>
            </div>
          </div>


          {/* Item 2: LinkedIn Banner */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-primary/10 pb-3">
              <h3 className="font-headline-md text-2xl text-on-surface">LinkedIn Banner</h3>
              <span className="font-body-md text-[10px] text-on-secondary-container uppercase tracking-wider font-semibold">Canva Visual 02</span>
            </div>

            {/* Large Image Container - Auto-expanding to match image height exactly */}
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-primary/10 shadow-[0_15px_45px_rgba(97,0,0,0.02)] bg-surface-container group cursor-zoom-in"
              onClick={() => handleImageClick('/linkedin.png', 'LinkedIn Banner')}
            >
              {/* Premium hover glass overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-30 flex items-center justify-center">
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 bg-black/40 p-3 rounded-full backdrop-blur-sm shadow-md">
                  zoom_in
                </span>
              </div>

              {/* Fallback pattern (only shows when image fails or is loading) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-surface/40 flex items-center justify-center p-8 text-center z-0 min-h-[150px] md:min-h-[200px]">
                <div className="space-y-2">
                  <span className="font-headline-md text-2xl md:text-3xl text-secondary/40 italic block select-none">
                    LinkedIn Banner
                  </span>
                  <span className="font-body-md text-[10px] text-secondary/50 tracking-widest uppercase block select-none">
                    Professional Banner Design
                  </span>
                </div>
              </div>

              <img
                alt="LinkedIn Banner"
                className="w-full h-auto block relative z-10 transition-transform duration-700 group-hover:scale-[1.01]"
                src="/linkedin.png"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Description Card */}
            <div className="glass-panel p-6 md:p-8 rounded-xl border border-primary/10 bg-surface/60 backdrop-blur-md shadow-sm space-y-4 w-full">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded font-body-md text-xs font-bold uppercase tracking-wider">
                  Type: Personal branding banner
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container text-on-secondary-container rounded font-body-md text-xs font-semibold">
                  <span className="material-symbols-outlined text-xs">build</span>
                  Tools: Canva
                </span>
              </div>
              <p className="font-body-md text-sm md:text-base text-on-secondary-container leading-relaxed">
                <strong>Purpose:</strong> To present my professional positioning as an International Business student and future operations professional.
              </p>
            </div>
          </div>


          {/* Item 3 & 4: LOOM Project */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-primary/10 pb-3">
              <h3 className="font-headline-md text-2xl text-on-surface">LOOM Project</h3>
              <span className="font-body-md text-[10px] text-on-secondary-container uppercase tracking-wider font-semibold">Canva Visual 03 & 04</span>
            </div>

            {/* Image 3 Container - Auto-expanding to match image height exactly */}
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-primary/10 shadow-[0_15px_45px_rgba(97,0,0,0.02)] bg-surface-container group cursor-zoom-in"
              onClick={() => handleImageClick('/2.png', 'LOOM Brand Identity (Visual 03)')}
            >
              {/* Premium hover glass overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-30 flex items-center justify-center">
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 bg-black/40 p-3 rounded-full backdrop-blur-sm shadow-md">
                  zoom_in
                </span>
              </div>

              {/* Fallback pattern (only shows when image fails or is loading) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-secondary/15 flex items-center justify-center p-8 text-center z-0 min-h-[200px] md:min-h-[250px]">
                <div className="space-y-2">
                  <span className="font-headline-md text-2xl md:text-3xl text-primary/40 italic block select-none">
                    LOOM Brand Identity (Visual 03)
                  </span>
                  <span className="font-body-md text-[10px] text-primary/50 tracking-widest uppercase block select-none">
                    Visual Presentation Graphics
                  </span>
                </div>
              </div>

              <img
                alt="LOOM Brand Identity Part 1"
                className="w-full h-auto block relative z-10 transition-transform duration-700 group-hover:scale-[1.01]"
                src="/2.png"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Image 4 Container - Auto-expanding to match image height exactly */}
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-primary/10 shadow-[0_15px_45px_rgba(97,0,0,0.02)] bg-surface-container group cursor-zoom-in"
              onClick={() => handleImageClick('/3.png', 'LOOM Brand Identity (Visual 04)')}
            >
              {/* Premium hover glass overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-30 flex items-center justify-center">
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 bg-black/40 p-3 rounded-full backdrop-blur-sm shadow-md">
                  zoom_in
                </span>
              </div>

              {/* Fallback pattern (only shows when image fails or is loading) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/15 to-surface/40 flex items-center justify-center p-8 text-center z-0 min-h-[200px] md:min-h-[250px]">
                <div className="space-y-2">
                  <span className="font-headline-md text-2xl md:text-3xl text-primary/40 italic block select-none">
                    LOOM Brand Identity (Visual 04)
                  </span>
                  <span className="font-body-md text-[10px] text-primary/50 tracking-widest uppercase block select-none">
                    Visual Presentation Graphics
                  </span>
                </div>
              </div>

              <img
                alt="LOOM Brand Identity Part 2"
                className="w-full h-auto block relative z-10 transition-transform duration-700 group-hover:scale-[1.01]"
                src="/3.png"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Joint Description Card for both Image 3 & 4 */}
            <div className="glass-panel p-6 md:p-8 rounded-xl border border-primary/10 bg-surface/60 backdrop-blur-md shadow-sm space-y-4 w-full">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded font-body-md text-xs font-bold uppercase tracking-wider">
                  Type: Brand identity banner
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container text-on-secondary-container rounded font-body-md text-xs font-semibold">
                  <span className="material-symbols-outlined text-xs">build</span>
                  Tools: Canva
                </span>
              </div>
              <p className="font-body-md text-sm md:text-base text-on-surface leading-relaxed">
                <strong>Purpose:</strong> To present LOOM's brand positioning as an upcycled denim bag brand that transforms old materials and personal memories into stylish, functional, and future-oriented fashion products.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Premium Full-Screen Zoom Lightbox Overlay */}
      {activeZoomImage && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md pb-animate-fade-in cursor-zoom-out"
          onClick={() => setActiveZoomImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-300 p-2 focus:outline-none"
            onClick={() => setActiveZoomImage(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          {/* Lightbox Inner Container */}
          <div
            className="relative max-w-[92vw] max-h-[82vh] md:max-w-[85vw] md:max-h-[85vh] flex flex-col items-center justify-center pb-animate-zoom-in"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          >
            <img
              alt={activeZoomTitle}
              className="max-w-full max-h-full object-contain rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10 cursor-zoom-out"
              src={activeZoomImage}
              onClick={() => setActiveZoomImage(null)}
            />
            {activeZoomTitle && (
              <p className="mt-4 font-headline-md text-lg text-white/90 text-center tracking-wide drop-shadow-md select-none">
                {activeZoomTitle}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PersonalBranding;
