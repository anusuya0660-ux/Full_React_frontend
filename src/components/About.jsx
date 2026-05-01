import React from 'react'
import "../pages/About.css";
import abou from "../assets/abou.jpg"; 
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
function About() {
  return (
  <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>We build modern, scalable and user-friendly applications.</p>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team of developers and designers dedicated to
            creating high-quality web experiences. Our mission is to deliver
            clean, efficient, and innovative solutions.
          </p>
        </div>

       
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
           <img src={member1} alt="Our Team" />
          
            <h3>John Doe</h3>
            <p>Frontend Developer</p>
          </div>

          <div className="team-card">
            <img src={member2} alt="Our Team" />
          
            <h3>Jane Smith</h3>
            <p>Backend Developer</p>
          </div>

          <div className="team-card">
           <img src={member3} alt="Our Team" />
          
            <h3>Alex Lee</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About