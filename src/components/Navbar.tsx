'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };

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
              <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
              <Link href="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>Core Team</Link>
              <Link href="/events" className={`nav-link ${isActive('/events') ? 'active' : ''}`}>Events</Link>
              <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
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
