import React from "react";

const Footer = () => {
  const socials = [
    { label: "LinkedIn", href: "#linkedin" },
    { label: "GitHub", href: "#github" },
    { label: "Instagram", href: "#instagram" },
    { label: "Dribbble", href: "#dribbble" },
  ];

  return (
    <footer className="w-full py-section-padding-mobile md:py-16 bg-surface-container border-t border-outline-variant/30 reveal-on-scroll">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-gutter gap-unit">
        <span className="font-headline-md text-primary text-headline-md font-headline-md">NNKH</span>
        <p className="font-body-md text-body-md text-primary">
          © 2026 Nguyen Ngoc Khanh Huyen. All rights reserved.
        </p>
        <ul className="flex gap-4">
          {socials.map((soc, idx) => (
            <li key={idx}>
              <a
                className="font-label-md text-label-md text-secondary hover:text-primary underline decoration-primary/30 transition-all opacity-80 hover:opacity-100"
                href={soc.href}
              >
                {soc.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
