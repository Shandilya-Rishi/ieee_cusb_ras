import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="nav-brand">
          <span className="ieee-text">IEEE RAS</span>
          <span className="cusb-text"> CUSB</span>
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
            Join RAS
          </a>
          {/* We will add Auth conditionally here later */}
          <Link href="/login" className="nav-link login-link">Login</Link>
        </div>
      </div>
    </nav>
  );
}
