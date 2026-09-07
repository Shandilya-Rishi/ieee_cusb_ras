export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">IEEE Robotics and Automation Society</h1>
          <h2 className="hero-subtitle">Student Branch Chapter CUSB</h2>
          
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)', margin: '2rem auto', maxWidth: '600px' }}></div>

          <p className="hero-text">
            Fostering technological innovation and excellence for the benefit of humanity. 
            Join us in exploring the future of robotics and automation.
          </p>
          <div className="hero-actions">
            <a href="/join" className="btn btn-hero">
              Become a RAS Member
            </a>
            <a href="/events" className="btn btn-secondary">
              View Events
            </a>
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <div className="about-grid">
          <div className="card">
            <h3>Our Mission</h3>
            <p>To advance innovation, education, and fundamental and applied research in robotics and automation.</p>
          </div>
          <div className="card">
            <h3>What We Do</h3>
            <p>We organize workshops, seminars, and hands-on sessions to build practical skills in modern robotics.</p>
          </div>
          <div className="card">
            <h3>Community</h3>
            <p>A vibrant network of students and professionals passionate about pushing the boundaries of technology.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
