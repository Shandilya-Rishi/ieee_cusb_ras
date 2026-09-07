import React from 'react';
import Link from 'next/link';

// Placeholder data for the Core Team
// In the future, this will be fetched from the Supabase database.
const CORE_TEAM = [
  {
    id: '1',
    name: 'Dr. Jane Doe',
    role: 'Faculty Chapter Advisor',
    image: 'https://ui-avatars.com/api/?name=Jane+Doe&background=7D1D4E&color=fff&size=256',
    email: 'advisor@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: null // Not applicable for advisor
  },
  {
    id: '2',
    name: 'John Smith',
    role: 'Chair',
    image: 'https://ui-avatars.com/api/?name=John+Smith&background=1E1E1E&color=fff&size=256',
    email: 'chair@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  },
  {
    id: '3',
    name: 'Alice Johnson',
    role: 'Vice Chair',
    image: 'https://ui-avatars.com/api/?name=Alice+Johnson&background=1E1E1E&color=fff&size=256',
    email: 'vicechair@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  },
  {
    id: '4',
    name: 'Michael Brown',
    role: 'Secretary',
    image: 'https://ui-avatars.com/api/?name=Michael+Brown&background=1E1E1E&color=fff&size=256',
    email: 'secretary@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  },
  {
    id: '5',
    name: 'Chris Wilson',
    role: 'Web Master',
    image: 'https://ui-avatars.com/api/?name=Chris+Wilson&background=A85324&color=fff&size=256',
    email: 'web1@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  },
  {
    id: '6',
    name: 'Sarah Davis',
    role: 'Web Master',
    image: 'https://ui-avatars.com/api/?name=Sarah+Davis&background=A85324&color=fff&size=256',
    email: 'web2@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  },
  {
    id: '7',
    name: 'David Miller',
    role: 'Head of Media',
    image: 'https://ui-avatars.com/api/?name=David+Miller&background=1E1E1E&color=fff&size=256',
    email: 'media@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  },
  {
    id: '8',
    name: 'Emma Moore',
    role: 'PR Head',
    image: 'https://ui-avatars.com/api/?name=Emma+Moore&background=1E1E1E&color=fff&size=256',
    email: 'pr@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  },
  {
    id: '9',
    name: 'Ryan Taylor',
    role: 'Event Coordinator',
    image: 'https://ui-avatars.com/api/?name=Ryan+Taylor&background=00629B&color=fff&size=256',
    email: 'event1@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  },
  {
    id: '10',
    name: 'Olivia Anderson',
    role: 'Event Coordinator',
    image: 'https://ui-avatars.com/api/?name=Olivia+Anderson&background=00629B&color=fff&size=256',
    email: 'event2@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  },
  {
    id: '11',
    name: 'James Thomas',
    role: 'Event Coordinator',
    image: 'https://ui-avatars.com/api/?name=James+Thomas&background=00629B&color=fff&size=256',
    email: 'event3@example.com',
    linkedin: 'https://linkedin.com/in/placeholder',
    github: 'https://github.com/placeholder'
  }
];

export default function TeamPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Core Team</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Meet the dedicated individuals behind the IEEE RAS CUSB Student Branch Chapter who are passionate about robotics, automation, and fostering a collaborative community.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2.5rem'
      }}>
        {CORE_TEAM.map((member) => (
          <div key={member.id} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              border: '4px solid var(--border-subtle)'
            }}>
              <img 
                src={member.image} 
                alt={member.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.25rem' }}>{member.name}</h3>
            <p style={{ color: 'var(--ras-plum)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {member.role}
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
              {member.email && (
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} title="Email">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} title="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} title="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
