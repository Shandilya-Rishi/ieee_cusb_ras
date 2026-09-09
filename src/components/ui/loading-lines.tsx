"use client";

import React from "react";

const LoadingLines: React.FC = () => {
  const letters = "IEEE RAS CUSB".split("");

  return (
    <div className="loading-container">
      {/* Animated letters */}
      {letters.map((letter, idx) => (
        <span
          key={idx}
          className="loading-letter"
          style={{ animationDelay: `${0.1 + idx * 0.105}s` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}

      {/* Loader background */}
      <div className="loader-bg">
        <div className="loader-bg-inner" />
      </div>

      <style jsx>{`
        .loading-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
          width: auto;
          margin: 0 auto;
          font-size: 2rem;
          font-weight: 700;
          user-select: none;
          transform: scale(1.5); /* Scaled down slightly to fit mobile */
        }
        
        @media (min-width: 768px) {
          .loading-container {
            font-size: 2.5rem;
            transform: scale(1.8);
          }
        }

        .loading-letter {
          position: relative;
          display: inline-block;
          opacity: 0;
          z-index: 2;
          color: var(--text-heading);
          animation: letterAnim 4s linear infinite;
        }

        .loader-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-color: transparent;
          mask-image: repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px);
          -webkit-mask-image: repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px);
        }

        .loader-bg-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 50% 50%, var(--ras-plum-accent) 0%, transparent 50%),
            radial-gradient(circle at 45% 45%, var(--ras-plum) 0%, transparent 45%),
            radial-gradient(circle at 55% 55%, var(--ras-copper) 0%, transparent 45%),
            radial-gradient(circle at 45% 55%, var(--ras-ieee-blue) 0%, transparent 45%),
            radial-gradient(circle at 55% 45%, var(--ras-hero-plum-1) 0%, transparent 45%);
          mask-image: radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%);
          animation: transformAnim 2s infinite alternate cubic-bezier(0.6,0.8,0.5,1), opacityAnim 4s infinite;
        }

        @keyframes transformAnim {
          0% {
            transform: translate(-55%);
          }
          100% {
            transform: translate(55%);
          }
        }

        @keyframes opacityAnim {
          0%,
          100% {
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          65% {
            opacity: 0;
          }
        }

        @keyframes letterAnim {
          0% {
            opacity: 0;
          }
          5% {
            opacity: 1;
            text-shadow: 0 0 4px var(--ras-plum);
            transform: scale(1.1) translateY(-2px);
          }
          20% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingLines;
