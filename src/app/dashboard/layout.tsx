import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
      
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <Link href="/" className="nav-brand">
          <img src="/ras-logo.png" alt="RAS Logo" style={{ height: '32px' }} />
          <span style={{ fontWeight: 700, color: 'var(--ras-plum)' }}>Core Portal</span>
        </Link>
        
        <nav className="sidebar-nav">
          <Link href="/dashboard" className="sidebar-link active">
            Dashboard Overview
          </Link>
          <Link href="/dashboard" className="sidebar-link">
            Event Management
          </Link>
          <Link href="/dashboard" className="sidebar-link">
            Contact Messages
          </Link>
          <Link href="/dashboard" className="sidebar-link">
            Team Roster
          </Link>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
           <Link href="/" className="sidebar-link" style={{ color: 'var(--text-main)' }}>
             ← Back to Public Site
           </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-content">
        {children}
      </main>
      
    </div>
  );
}
