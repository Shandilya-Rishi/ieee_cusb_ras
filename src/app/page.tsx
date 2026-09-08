import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <ShaderAnimation />
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
          
          <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
            <a href="https://www.linkedin.com/company/rascusb" target="_blank" rel="noopener noreferrer" className="social-icon-hero" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/ieeerascusb/" target="_blank" rel="noopener noreferrer" className="social-icon-hero" title="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
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
