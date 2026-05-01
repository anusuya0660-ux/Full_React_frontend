import React from "react";
import "../pages/service.css";

const servicesData = [
  {
    title: "Web Development",
    desc: "We build fast, responsive and scalable websites.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    desc: "Modern and user-friendly interface designs.",
    icon: "🎨",
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile applications.",
    icon: "📱",
  },
  {
    title: "SEO Optimization",
    desc: "Improve your website ranking on search engines.",
    icon: "🚀",
  },
  {
    title: "Cloud Services",
    desc: "Secure and scalable cloud solutions.",
    icon: "☁️",
  },
  {
    title: "Maintenance",
    desc: "Reliable support and maintenance services.",
    icon: "🛠️",
  },
];

const service = () => {
  return (
    <div className="services-container">
      {/* Hero */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>We provide high-quality digital solutions for your business</p>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default service;