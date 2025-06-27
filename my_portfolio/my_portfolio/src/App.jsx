// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

// Import icons (you'll need to install react-icons: npm install react-icons)
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaCode,
  FaDatabase,
  FaMobile,
  FaArrowUp
} from 'react-icons/fa';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://via.placeholder.com/400x300",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      image: "https://via.placeholder.com/400x300",
      tech: ["React", "Firebase", "Material-UI"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts and interactive maps",
      image: "https://via.placeholder.com/400x300",
      tech: ["React", "OpenWeather API", "Chart.js"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <FaCode />, items: ["React", "JavaScript", "HTML/CSS", "TypeScript"] },
    { name: "Backend", icon: <FaDatabase />, items: ["Node.js", "Python", "MongoDB", "PostgreSQL"] },
    { name: "Mobile", icon: <FaMobile />, items: ["React Native", "Flutter", "iOS", "Android"] }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Portfolio</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer & Creative Thinker</p>
            <p className="hero-description">
              I build exceptional digital experiences that live on the internet.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
            <div className="social-links">
              <a href="#" className="social-link"><FaGithub /></a>
              <a href="#" className="social-link"><FaLinkedin /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaEnvelope /></a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="gradient-border">
                <img src="https://via.placeholder.com/400x400" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional web applications. With expertise in modern technologies and a 
                keen eye for design, I bring ideas to life through code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>30+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((category, index) => (
              <div key={index} className="skill-category">
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <div className="skill-items">
                  {category.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.github} className="project-link">GitHub</a>
                    <a href={project.live} className="project-link">Live Demo</a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-text">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a href="mailto:your.email@example.com" className="btn btn-primary">Send Message</a>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;