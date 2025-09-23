import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import leo1Img from "./assets/leo1.jpg";
import leo2Img from "./assets/leo2.jpg";
import webdesignImg from "./assets/webdesign.jpg";
import WebsiteDevelopmentImg from "./assets/WebsiteDevelopment.jpg";
import AzureCloudImg from "./assets/AzureCloud.jpg";
import ticketImg from "./assets/ticket.png";
import foodappImg from "./assets/foodapp.jpg";
import loginImg from "./assets/login.jpg";

function App() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [popup, setPopup] = useState({ show: false, success: false, message: "" });
  const [activeTab, setActiveTab] = useState("skills");
  const [showPopup, setShowPopup] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send("service_gdhzn9b", "template_4kddtri", form, "e554S0A-_svGT0AqJ")
      .then(() => {
        setSending(false);
        setPopup({ show: true, success: true, message: "Message sent successfully ✅" });
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setPopup({ ...popup, show: false }), 3000);
      })
      .catch((err) => {
        console.error(err);
        setSending(false);
        setPopup({ show: true, success: false, message: "❌ Failed to send message." });
        setTimeout(() => setPopup({ ...popup, show: false }), 3000);
      });
  };

  return (
    <>
      {/* ---------- Navbar ---------- */}
      <nav className="navbar">
        <div className="logo">My Portfolio</div>
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-right">
          <div className="social-icons">
            <a href="https://github.com/leorajnj/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:leoraj.nj20@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/leorajnj20112003/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <button className="btn" onClick={() => setShowPopup(true)}>Let’s Talk</button>
        </div>
      </nav>

      {/* Popup Card */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <h3>Contact Me</h3>
            <p>Phone:+91 7708745841</p>
            <p>
              Mail:leoraj.nj20@gmail.com{" "}
              <a
                href="mailto:leoraj.nj20@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail
              </a>
            </p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* ---------- Hero Section ---------- */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p>Welcome To My World</p>
          <h1>
            Hi, I'm <span className="highlight">Leo Raj NJ</span><br />
            <span className="highlight">Frontend Developer.</span>
          </h1>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn resume-btn">View Resume</button>
          </a>
        </div>
        <div className="hero-img">
          <img src={leo1Img} alt="Profile" />
        </div>
      </section>

      {/* ---------- About Section ---------- */}
      <section className="section about" id="about">
        <div className="about-img">
          <img src={leo2Img} alt="profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Enthusiastic and motivated Computer Science graduate seeking an entry-level position
            where I can apply my strong analytical skills, dedication, and passion for continuous
            learning to contribute to the company's success and grow professionally.
          </p>

          <div className="tabs">
            <button className={activeTab === "skills" ? "active" : ""} onClick={() => setActiveTab("skills")}>Main Skills</button>
            <button className={activeTab === "education" ? "active" : ""} onClick={() => setActiveTab("education")}>Education</button>
            <button className={activeTab === "experience" ? "active" : ""} onClick={() => setActiveTab("experience")}>Experience</button>
          </div>

          <div className="tab-content">
            {activeTab === "skills" && (
  <div className="skills-container">
    {/* Left Column */}
    <ul className="skills-list">
      <li>HTML/CSS</li>
      <li>React.js</li>
      <li>JavaScript</li>
      <li>Java (Core)</li>
      <li>Git & GitHub</li>
      <li>Azure</li>
      <li>SQL</li>
     
    </ul>

    {/* Right Column */}
    <ul className="skills-list">
      <li>
        Tools:
        <ul>
          <li>VS Code</li>
          <li>MS Office (Word, Excel, PowerPoint)</li>
        </ul>
      </li>
    </ul>
  </div>
)}

            {activeTab === "education" && (
              <ul>
                <li>B.E. Computer Science Engineering – 6.5 CGPA (2021 - 2025)</li>
                <li>HSC – 75% (2021)</li>
                <li>SSLC – 62% (2019)</li>
              </ul>
            )}
            {activeTab === "experience" && (
              <ul>
                <li>Internship in Web Development:
                  <ul>
                    <li>Bus Booking App</li>
                    <li>Food Ordering App</li>
                  </ul>
                </li>
                <li>Internship in IoT:
                  <ul>
                    <li>Accident Detection System</li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* ---------- Services Section ---------- */}
      <section className="section" id="services">
        <h2 className="section-title">My Services</h2>  
        <p className="section-subtitle">Here are the main services I provide.</p>
        <div className="card-grid">
          <div className="card-item">
            <img src={webdesignImg} alt="Web Design" />
            <div className="card-info"><span>Design</span><h3>Web Design</h3></div>
          </div>
          <div className="card-item">
            <img src={WebsiteDevelopmentImg} alt="Development" />
            <div className="card-info"><span>Development</span><h3>Website Development</h3></div>
          </div>
          <div className="card-item">
            <img src={AzureCloudImg} alt="Cloud" />
            <div className="card-info"><span>Cloud</span><h3>Azure Cloud</h3></div>
          </div>
        </div>
      </section>

      {/* ---------- Portfolio Section ---------- */}
      <section className="section" id="portfolio">
        <h2 className="section-title">My Latest Project</h2>
        <p className="section-subtitle">Some real-world projects I worked on.</p>
        <div className="card-grid">
          <a href="https://ticketbookin.netlify.app/" target="_blank" rel="noreferrer" className="card-item">
            <img src={ticketImg} alt="ticket" />
            <div className="card-info"><span>Web App</span><h3>Bus Booking App</h3></div>
          </a>
          <a href="https://coffee-shop-webdesign.netlify.app/" target="_blank" rel="noreferrer" className="card-item">
            <img src={foodappImg} alt="" />
            <div className="card-info"><span>Web Design</span><h3>Coffee shop</h3></div>
          </a>
          <a href="https://login-webdesign.netlify.app/" target="_blank" rel="noreferrer" className="card-item">
            <img src={loginImg} alt="login" />
            <div className="card-info"><span>web Design</span><h3>Login page</h3></div>
          </a>
        </div>
      </section>

      {/* ---------- Contact Section ---------- */}
      <section className="section contact" id="contact">
        <div className="contact-left">
          <h2>Hire Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your E-mail *" value={form.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Write a Subject" value={form.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange}></textarea>
            <button type="submit" disabled={sending}>{sending ? "Sending..." : "Submit"}</button>
          </form>

          {popup.show && (
            <div className={`popup ${popup.success ? "success" : "error"}`}>
              {popup.message}
            </div>
          )}

        </div>

        <div className="contact-right">
          <h2>Thank You!</h2>
          <p>
            I’m truly grateful for your time in exploring my portfolio.  
            Your interest means a lot, and I’d be delighted to connect with you.Let’s create something amazing together 
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
