import React from 'react'
import "../pages/career.css";
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Bangalore",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Chennai",
    type: "Contract",
  },
];

function career() {
  return (
 <div className="careers">
      {/* Hero Section */}
      <section className="hero">
        <h1>Join Our Team</h1>
        <p>Build your future with us 🚀</p>
        <button className="apply-btn">View Open Roles</button>
      </section>

      {/* Culture Section */}
      <section className="culture">
        <h2>Why Work With Us?</h2>
        <div className="culture-grid">
          <div className="card">🌱 Growth Opportunities</div>
          <div className="card">💡 Innovative Work</div>
          <div className="card">🤝 Great Team</div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="jobs">
        <h2>Open Positions</h2>
        <div className="job-list">
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <span>{job.type}</span>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default career