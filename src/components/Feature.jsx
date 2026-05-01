import React from 'react'
import "../pages/Feature.css";
const features = [
  {
    id: 1,
    title: "Fast Performance",
    description: "Experience lightning fast load times and smooth interactions.",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Secure Platform",
    description: "Your data is protected with top-level security measures.",
    icon: "🔒",
  },
  {
    id: 3,
    title: "Easy to Use",
    description: "User-friendly interface designed for everyone.",
    icon: "👌",
  },
  {
    id: 4,
    title: "Customizable",
    description: "Tailor the platform to suit your needs.",
    icon: "🎨",
  },
  {
    id: 5,
    title: "Cloud Sync",
    description: "Access your data anywhere, anytime.",
    icon: "☁️",
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "We are here to help you anytime.",
    icon: "💬",
  },
];
function Feature() {
  return (
     <div className="features">
      
      {/* Hero Section */}
      <section className="features-hero">
        <h1>Our Features</h1>
        <p>Everything you need to build amazing products</p>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

    </div>
  )
}

export default Feature