import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">IEEE RAS CUSB</h3>
          <p className="footer-text">
            Advancing innovation, education, and fundamental and applied research in robotics and automation.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/team">Core Team</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Connect</h4>
          <ul className="footer-links">
            <li><a href="https://www.ieee-ras.org/" target="_blank" rel="noopener noreferrer">IEEE RAS Global</a></li>
            <li><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE.org</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} IEEE Robotics and Automation Society CUSB. All rights reserved.</p>
      </div>
    </footer>
  );
}
