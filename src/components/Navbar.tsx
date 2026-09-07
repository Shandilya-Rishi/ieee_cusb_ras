import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      {/* Top Global Header Bar */}
      <div className="global-top-bar">
        <div className="container global-top-bar-container">
          <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">IEEE.org</a>
          <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Xplore Digital Library</a>
          <a href="https://standards.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Standards</a>
          <a href="https://spectrum.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Spectrum</a>
          <a href="https://www.ieee.org/sitemap" target="_blank" rel="noopener noreferrer">More Sites</a>
        </div>
      </div>

      {/* Main Floating Navbar Wrapper */}
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="nav-brand">
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
