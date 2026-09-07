export default function JoinPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
        Join IEEE RAS CUSB
      </h1>
      
      <div className="card" style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: 'var(--ras-plum)' }}>Why Join Us?</h2>
        <p style={{ marginBottom: '1rem' }}>
          By becoming a member of the IEEE Robotics and Automation Society (RAS) Student Branch Chapter at CUSB, 
          you gain access to a global network of robotics professionals and researchers.
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          <li>Access to exclusive robotics workshops and hands-on training sessions.</li>
          <li>Networking opportunities with industry leaders and academic researchers.</li>
          <li>Discounts on IEEE RAS global conferences and publications.</li>
          <li>Opportunities to lead and participate in collaborative robotics projects.</li>
        </ul>
      </div>

      <div className="card" style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: 'var(--ras-plum)' }}>How to Join</h2>
        <p style={{ marginBottom: '1rem' }}>
          Follow the step-by-step instructions in the document below to properly register your membership 
          with IEEE and affiliate with the RAS CUSB chapter.
        </p>
        
        {/* Placeholder for PDF link */}
        <a href="/join-steps.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Download Instruction PDF
        </a>

        <div style={{ marginTop: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Video Walkthrough</h3>
          {/* Placeholder for Video Embed (e.g., YouTube) */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.5rem', backgroundColor: 'var(--neutral-200)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neutral-600)' }}>
              [ Embed YouTube Video Here ]
            </div>
            {/* 
              Example embed code:
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                title="Join Instructions" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            */}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Ready to become a member?</p>
        <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
          Proceed to IEEE Global Join Page
        </a>
      </div>
    </div>
  );
}
