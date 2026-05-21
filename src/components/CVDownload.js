import React from "react";

const CVDownload = () => {
  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-primary-container text-center" id="cv">
      <div className="max-w-3xl mx-auto reveal-on-scroll">
        <h2 className="font-headline-lg text-headline-lg text-on-primary mb-6">Ready to collaborate?</h2>
        <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8">
          Download my full curriculum vitae to explore my professional background in detail.
        </p>
        <a
          className="inline-block bg-surface text-primary font-label-md text-label-md px-10 py-4 rounded-full hover:bg-surface-variant transition-colors ambient-shadow text-lg font-bold"
          href="#download-cv"
          onClick={(e) => {
            e.preventDefault();
            alert("Curriculum Vitae (PDF) download started!");
          }}
        >
          Download Full CV (PDF)
        </a>
      </div>
    </section>
  );
};

export default CVDownload;
