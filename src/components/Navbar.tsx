import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      {/* Main Floating Navbar Wrapper */}
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="nav-brand">
              <img src="/ras-logo.png" alt="RAS Logo" style={{ height: '40px', objectFit: 'contain' }} />
              <span style={{color: 'var(--ras-plum)'}}>IEEE RAS</span> CUSB
            </Link>
            
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/team" className="nav-link">Core Team</Link>
              <Link href="/events" className="nav-link">Events</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/contact" className="nav-link">Contact Us</Link>
            </div>
            
            <div className="nav-actions">
              <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Become a RAS Member
              </a>
              <Link href="/login" className="nav-link login-link">Login</Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
