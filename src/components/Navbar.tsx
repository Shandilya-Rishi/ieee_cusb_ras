import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <>
      {/* Main Floating Navbar Wrapper */}
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="nav-brand">
              <img src="/ras-logo.png" alt="RAS Logo" style={{ height: '40px', objectFit: 'contain' }} />
              <span className="ieee-text">IEEE RAS CUSB</span>
            </Link>
            
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/team" className="nav-link">Core Team</Link>
              <Link href="/events" className="nav-link">Events</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/contact" className="nav-link">Contact Us</Link>
            </div>
            
            <div className="nav-actions">
              <ThemeToggle />
              <Link href="/join" className="btn btn-primary">
                Become a RAS Member
              </Link>
              <Link href="/login" className="nav-link login-link">Login</Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
