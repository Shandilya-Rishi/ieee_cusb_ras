'use client';

import { useEffect, useState } from 'react';

// You can replace these URLs with the actual paths to your event images 
// once you upload them to your 'public' folder (e.g., '/events/event-1.jpg')
const eventImages = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80', // Conference/Crowd
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', // Workshop/Tech
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80'  // Students/Teamwork
];

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventImages.length);
    }, 5000); // Transitions to the next image every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-bg-slider">
      {eventImages.map((src, index) => (
        <div
          key={src}
          className={`hero-bg-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <style jsx>{`
        .hero-bg-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .hero-bg-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 2s ease-in-out, transform 10s ease-in-out;
          mix-blend-mode: luminosity; /* Blends the images smoothly into the plum gradient */
          transform: scale(1);
        }
        .hero-bg-slide.active {
          opacity: 0.15; /* Low opacity to ensure text remains highly readable */
          transform: scale(1.05); /* Very subtle zoom effect */
        }
      `}</style>
    </div>
  );
}
