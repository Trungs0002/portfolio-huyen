import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields before sending your message!");
      return;
    }
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="section-block py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface-container-low" id="contact">
      <div className="max-w-container-max mx-auto reveal-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Get in Touch</h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed font-semibold">
              Think better<br />
              Build better<br />
              Be better
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary">mail</span>
                <a className="hover:text-primary transition-colors font-body-md" href="mailto:kkkhanhhuyenek@gmail.com">
                  nnkhanhhuyen249@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary">call</span>
                <a className="hover:text-primary transition-colors font-body-md" href="tel:0374748310">
                  0374 748 310
                </a>
              </div>
              <div className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="font-body-md">Lang Thuong, Hanoi, Vietnam</span>
              </div>
              <div className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary">language</span>
                <div className="flex gap-4 font-body-md flex-wrap">
                  <a
                    className="hover:text-primary transition-colors font-bold underline"
                    href="https://vn.linkedin.com/in/kh%C3%A1nh-huy%E1%BB%81n-nguy%E1%BB%85n-ng%E1%BB%8Dc-a1b361410"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="hover:text-primary transition-colors font-bold underline"
                    href="https://web.facebook.com/kkh.uyen24"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    className="hover:text-primary transition-colors font-bold underline"
                    href="https://www.instagram.com/kkh.uyen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-label-md text-on-surface mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full bg-surface border border-outline/30 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface"
                  id="name"
                  placeholder="Your name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-label-md text-on-surface mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full bg-surface border border-outline/30 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface"
                  id="email"
                  placeholder="Your email address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-label-md text-on-surface mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface border border-outline/30 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface h-32 resize-none"
                  id="message"
                  placeholder="How can we work together?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                className="bg-primary text-on-primary font-label-md px-8 py-3 rounded-md hover:bg-primary/90 transition-colors w-full md:w-auto"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
