import React from 'react';

export function AuspiciousSwastik({
  size = 400,
  className = "",
  opacity = 0.18,
  glow = true
}) {
  return (
    <div
      className={`pointer-events-none select-none relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size, opacity }}
      aria-hidden="true"
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-[#C6A15B]/25 blur-3xl"
          style={{ transform: 'scale(0.85)' }}
        />
      )}

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          {/* Royal Gold Gradients */}
          <linearGradient id="swastikGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="30%" stopColor="#DFBF7E" />
            <stop offset="70%" stopColor="#C6A15B" />
            <stop offset="100%" stopColor="#9A7733" />
          </linearGradient>

          <linearGradient id="swastikRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#DFBF7E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C6A15B" stopOpacity="0.8" />
          </linearGradient>

          <filter id="royalGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Sacred Sunray Ring */}
        <circle
          cx="250"
          cy="250"
          r="235"
          stroke="url(#swastikRingGrad)"
          strokeWidth="2.5"
          strokeDasharray="6 8"
        />

        {/* Outer Lotus / Kalash Petal Ring */}
        <circle
          cx="250"
          cy="250"
          r="215"
          stroke="url(#swastikGoldGrad)"
          strokeWidth="3"
        />

        {/* Concentric Vedic Halo */}
        <circle
          cx="250"
          cy="250"
          r="185"
          stroke="url(#swastikRingGrad)"
          strokeWidth="1.5"
          strokeDasharray="12 12"
        />

        {/* 16 Radiating Rays / Petals around Mandala */}
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(
          (angle, i) => (
            <g key={i} transform={`rotate(${angle} 250 250)`}>
              <line
                x1="250"
                y1="25"
                x2="250"
                y2="45"
                stroke="url(#swastikGoldGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx="250"
                cy="18"
                r="3"
                fill="url(#swastikGoldGrad)"
              />
            </g>
          )
        )}

        {/* Inner Solid Border Ring */}
        <circle
          cx="250"
          cy="250"
          r="155"
          stroke="url(#swastikGoldGrad)"
          strokeWidth="2"
        />

        {/* ======================================================== */}
        {/* SACRED SWASTIK EMBLEM (Traditional Vedic Geometry)       */}
        {/* ======================================================== */}
        <g stroke="url(#swastikGoldGrad)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="miter">
          {/* Vertical Central Stem */}
          <line x1="250" y1="130" x2="250" y2="370" />

          {/* Horizontal Central Stem */}
          <line x1="130" y1="250" x2="370" y2="250" />

          {/* Top-Right Arm */}
          <polyline points="250,130 350,130" />

          {/* Bottom-Right Arm */}
          <polyline points="370,250 370,350" />

          {/* Bottom-Left Arm */}
          <polyline points="250,370 150,370" />

          {/* Top-Left Arm */}
          <polyline points="130,250 130,150" />
        </g>

        {/* Ornate Inner Line Accents for Depth */}
        <g stroke="#FFF2D6" strokeWidth="3" strokeLinecap="round" opacity="0.75">
          <line x1="250" y1="140" x2="250" y2="360" />
          <line x1="140" y1="250" x2="360" y2="250" />
          <polyline points="250,135 345,135" />
          <polyline points="365,250 365,345" />
          <polyline points="250,365 155,365" />
          <polyline points="135,250 135,155" />
        </g>

        {/* ======================================================== */}
        {/* 4 AUSPICIOUS BINDUS / DOTS (चतुर्बिंदू)                   */}
        {/* ======================================================== */}
        {/* Top-Right Quadrant Dot */}
        <circle cx="305" cy="195" r="9" fill="url(#swastikGoldGrad)" filter="url(#royalGlow)" />
        <circle cx="305" cy="195" r="4" fill="#FFF8EB" />

        {/* Bottom-Right Quadrant Dot */}
        <circle cx="305" cy="305" r="9" fill="url(#swastikGoldGrad)" filter="url(#royalGlow)" />
        <circle cx="305" cy="305" r="4" fill="#FFF8EB" />

        {/* Bottom-Left Quadrant Dot */}
        <circle cx="195" cy="305" r="9" fill="url(#swastikGoldGrad)" filter="url(#royalGlow)" />
        <circle cx="195" cy="305" r="4" fill="#FFF8EB" />

        {/* Top-Left Quadrant Dot */}
        <circle cx="195" cy="195" r="9" fill="url(#swastikGoldGrad)" filter="url(#royalGlow)" />
        <circle cx="195" cy="195" r="4" fill="#FFF8EB" />

        {/* Central Core Bindu */}
        <circle cx="250" cy="250" r="5" fill="#FFF8EB" />
      </svg>
    </div>
  );
}
