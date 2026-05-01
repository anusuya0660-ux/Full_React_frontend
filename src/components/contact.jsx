import React from 'react'
import "../pages/contact.css";
function contact() {
  return (
    <div className="contact-wrapper">

      {/* Left Side Info */}
      <div className="contact-left">
        <h1>Let's Talk</h1>
        <p>Have a project in mind? We'd love to help you.</p>

        <div className="contact-details">
          <p>📍 123 Business Street, City</p>
          <p>📞 +123 456 7890</p>
          <p>📧 contact@example.com</p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="contact-right">
        <form className="form-box">
          <h2>Send a Message</h2>

          <div className="input-group">
            <input type="text" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea rows="4" required></textarea>
            <label>Message</label>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  )
}

export default contact