'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: 'participant',
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          category: formData.category,
          name: formData.name,
          email: formData.email,
          message: formData.message
        }]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ category: 'participant', name: '', email: '', message: '' });
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        Contact Us
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
        Have questions? Want to collaborate? Reach out to the IEEE RAS CUSB chapter.
      </p>

      <div className="card">
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label htmlFor="category" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>I am a...</label>
            <select 
              id="category" 
              name="category" 
              value={formData.category} 
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
                fontSize: '1rem'
              }}
            >
              <option value="participant">Student / Individual (Events, Networking, Membership)</option>
              <option value="organizer">Working Professional / Organization (Collaborations, Sponsorships)</option>
            </select>
          </div>

          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
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
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
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
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'transparent',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            ></textarea>
          </div>

          {status === 'success' && (
            <div style={{ padding: '1rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', borderRadius: '0.375rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              Thank you! Your message has been sent successfully. We will get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div style={{ padding: '1rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', borderRadius: '0.375rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              {errorMessage}
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={status === 'loading'}
            style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p>Alternatively, you can email us directly at:</p>
        <a href="mailto:official.ieee.ras.cusb@example.com" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem', display: 'inline-block' }}>
          official.ieee.ras.cusb@example.com
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
          <a href="https://www.linkedin.com/company/rascusb" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', transition: 'color 0.2s' }} title="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.instagram.com/ieeerascusb/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', transition: 'color 0.2s' }} title="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
