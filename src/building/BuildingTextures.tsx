import React from 'react';

export const BuildingTextures: React.FC = () => {
  return (
    <defs>
      {/* 45° Architectural Section Cutaway Concrete Hatching */}
      <pattern
        id="arch-concrete-hatch"
        width="6"
        height="6"
        patternTransform="rotate(45 0 0)"
        patternUnits="userSpaceOnUse"
      >
        <line x1="0" y1="0" x2="0" y2="6" stroke="#262B29" strokeWidth="1" strokeOpacity="0.45" />
      </pattern>

      {/* Dense Subterranean Soil / Earth Hatching */}
      <pattern
        id="subterranean-earth"
        width="12"
        height="12"
        patternUnits="userSpaceOnUse"
      >
        <rect width="12" height="12" fill="#343B37" fillOpacity="0.12" />
        <line x1="1" y1="2" x2="4" y2="2" stroke="#262B29" strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="7" y1="5" x2="10" y2="5" stroke="#262B29" strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="2" y1="9" x2="6" y2="9" stroke="#262B29" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="8" cy="10" r="0.8" fill="#965D45" fillOpacity="0.6" />
      </pattern>

      {/* Weathered Brickwork Foundation */}
      <pattern
        id="weathered-brick"
        width="24"
        height="12"
        patternUnits="userSpaceOnUse"
      >
        <rect width="24" height="12" fill="#C4B7A2" fillOpacity="0.35" />
        <line x1="0" y1="6" x2="24" y2="6" stroke="#965D45" strokeWidth="0.75" strokeOpacity="0.5" />
        <line x1="0" y1="12" x2="24" y2="12" stroke="#965D45" strokeWidth="0.75" strokeOpacity="0.5" />
        <line x1="12" y1="0" x2="12" y2="6" stroke="#965D45" strokeWidth="0.75" strokeOpacity="0.4" />
        <line x1="6" y1="6" x2="6" y2="12" stroke="#965D45" strokeWidth="0.75" strokeOpacity="0.4" />
        <line x1="18" y1="6" x2="18" y2="12" stroke="#965D45" strokeWidth="0.75" strokeOpacity="0.4" />
      </pattern>

      {/* Herringbone Wooden Parquet */}
      <pattern
        id="herringbone-parquet"
        width="14"
        height="14"
        patternUnits="userSpaceOnUse"
      >
        <rect width="14" height="14" fill="#E8E0D1" fillOpacity="0.9" />
        <path
          d="M0 0 L7 7 L0 14 M7 0 L14 7 L7 14"
          fill="none"
          stroke="#C4B7A2"
          strokeWidth="0.9"
        />
        <line x1="7" y1="0" x2="7" y2="14" stroke="#965D45" strokeWidth="0.5" strokeOpacity="0.35" />
      </pattern>

      {/* Caucasian Kilim / Georgian Wall Carpet Geometric Pattern */}
      <pattern
        id="caucasian-carpet"
        width="18"
        height="18"
        patternUnits="userSpaceOnUse"
      >
        <rect width="18" height="18" fill="#965D45" fillOpacity="0.85" />
        <polygon points="9,2 16,9 9,16 2,9" fill="#262B29" fillOpacity="0.8" />
        <polygon points="9,5 13,9 9,13 5,9" fill="#C4B7A2" />
        <circle cx="9" cy="9" r="1.5" fill="#74826A" />
      </pattern>

      {/* Gradients */}
      {/* Rust and Corroded Metal */}
      <linearGradient id="rust-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7D4732" />
        <stop offset="45%" stopColor="#965D45" />
        <stop offset="80%" stopColor="#AF7359" />
        <stop offset="100%" stopColor="#586450" />
      </linearGradient>

      {/* Concrete Weathering Gradient */}
      <linearGradient id="concrete-weathering" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C4B7A2" />
        <stop offset="30%" stopColor="#D7CCBC" />
        <stop offset="70%" stopColor="#C4B7A2" />
        <stop offset="100%" stopColor="#AA9C86" />
      </linearGradient>

      {/* Moss Damp Patina Gradient */}
      <linearGradient id="moss-patina" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#586450" stopOpacity="0.75" />
        <stop offset="50%" stopColor="#74826A" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#74826A" stopOpacity="0" />
      </linearGradient>

      {/* Interior Ambient Occlusion (Ceiling Shadow) */}
      <linearGradient id="ambient-ceiling-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#262B29" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#262B29" stopOpacity="0.0" />
      </linearGradient>

      {/* Warm Domestic Incandescent Glow */}
      <radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F7F3EB" stopOpacity="0.7" />
        <stop offset="40%" stopColor="#E8E0D1" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#E8E0D1" stopOpacity="0" />
      </radialGradient>

      {/* Interactive Zone Pulsing Glow */}
      <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  );
};
