'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrRole: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, this is just a UI design. We'll handle authentication logic later!
    console.log('Login attempt:', formData);
  };

  return (
    <div className="container" style={{ padding: '6rem 1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px', padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--ras-plum)', marginBottom: '0.5rem' }}>Core Team Portal</h1>
          <p style={{ color: 'var(--text-muted)' }}>Sign in to access the administrative dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="E.g. John Doe"
              value={formData.name} 
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'transparent',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          <div>
            <label htmlFor="emailOrRole" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Registered Email ID or Role</label>
            <input 
              type="text" 
              id="emailOrRole" 
              name="emailOrRole" 
              placeholder="E.g. Web Master or user@example.com"
              value={formData.emailOrRole} 
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'transparent',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your secure password"
              value={formData.password} 
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'transparent',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '1rem', padding: '0.875rem', fontSize: '1.1rem' }}
          >
            Access Portal
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <p>This portal is strictly restricted to IEEE RAS CUSB core team members.</p>
        </div>
      </div>
    </div>
  );
}
