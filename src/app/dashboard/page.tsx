'use client';

export default function DashboardPage() {
  // Test Core Team Member Data
  const testUser = {
    name: 'Jane Doe',
    role: 'Web Master',
    email: 'webmaster@ras-cusb.ieee.org',
    joined: 'Jan 2024'
  };

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {testUser.name}</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.25rem' }}>Here is what is happening with IEEE RAS CUSB today.</p>
        </div>
        <div className="user-profile-badge">
          <div className="avatar">JD</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{testUser.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{testUser.role}</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stat-grid">
        <div className="stat-card">
          <h4>Total Events Hosted</h4>
          <div className="stat-value">24</div>
        </div>
        <div className="stat-card">
          <h4>Active Members</h4>
          <div className="stat-value">156</div>
        </div>
        <div className="stat-card">
          <h4>Unread Messages</h4>
          <div className="stat-value" style={{ color: '#f59e0b' }}>3</div>
        </div>
      </div>

      {/* Content Section: Recent Messages */}
      <section className="dashboard-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0 }}>Recent Contact Submissions</h2>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>View All</button>
        </div>
        
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 500 }}>Alex Smith</td>
              <td>alex.smith@example.com</td>
              <td>Sep 18, 2026</td>
              <td><span className="status-badge pending">New</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 500 }}>Maria Garcia</td>
              <td>m.garcia@university.edu</td>
              <td>Sep 17, 2026</td>
              <td><span className="status-badge active">Read</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 500 }}>James Wilson</td>
              <td>jwilson99@gmail.com</td>
              <td>Sep 15, 2026</td>
              <td><span className="status-badge active">Read</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Content Section: Upcoming Tasks */}
      <section className="dashboard-section">
        <h2>Your Tasks</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li style={{ padding: '1rem', backgroundColor: 'var(--bg-main)', borderRadius: '0.5rem', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Update Website Hero Image</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Due in 2 days</div>
            </div>
            <input type="checkbox" style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
          </li>
          <li style={{ padding: '1rem', backgroundColor: 'var(--bg-main)', borderRadius: '0.5rem', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Prepare Slides for Upcoming Workshop</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Due next week</div>
            </div>
            <input type="checkbox" style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
          </li>
        </ul>
      </section>
    </>
  );
}
