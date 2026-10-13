import React from 'react';

export const BuildingTextures: React.FC = () => {
  return (
    <defs>
      {/* 45° Architectural Section Cutaway Concrete Hatching (Dark Brutalist) */}
      <pattern
        id="arch-concrete-hatch"
        width="6"
        height="6"
        patternTransform="rotate(45 0 0)"
        patternUnits="userSpaceOnUse"
      >
        <line x1="0" y1="0" x2="0" y2="6" stroke="#191D1B" strokeWidth="1" strokeOpacity="0.65" />
      </pattern>

      {/* Dense Subterranean Soil / Excavated Earth Hatching (Dark Industrial) */}
      <pattern
        id="subterranean-earth"
        width="12"
        height="12"
        patternUnits="userSpaceOnUse"
      >
        <rect width="12" height="12" fill="#181B1A" />
        <line x1="1" y1="2" x2="4" y2="2" stroke="#2A302C" strokeWidth="0.8" strokeOpacity="0.8" />
        <line x1="7" y1="5" x2="10" y2="5" stroke="#2A302C" strokeWidth="0.8" strokeOpacity="0.8" />
        <line x1="2" y1="9" x2="6" y2="9" stroke="#2A302C" strokeWidth="0.8" strokeOpacity="0.8" />
        <circle cx="8" cy="10" r="0.8" fill="#52362E" fillOpacity="0.7" />
      </pattern>

      {/* Weathered Dark Brickwork Foundation */}
      <pattern
        id="weathered-brick"
        width="24"
        height="12"
        patternUnits="userSpaceOnUse"
      >
        <rect width="24" height="12" fill="#3D3833" fillOpacity="0.7" />
        <line x1="0" y1="6" x2="24" y2="6" stroke="#222725" strokeWidth="0.75" strokeOpacity="0.7" />
        <line x1="0" y1="12" x2="24" y2="12" stroke="#222725" strokeWidth="0.75" strokeOpacity="0.7" />
        <line x1="12" y1="0" x2="12" y2="6" stroke="#A35243" strokeWidth="0.75" strokeOpacity="0.4" />
        <line x1="6" y1="6" x2="6" y2="12" stroke="#A35243" strokeWidth="0.75" strokeOpacity="0.4" />
        <line x1="18" y1="6" x2="18" y2="12" stroke="#A35243" strokeWidth="0.75" strokeOpacity="0.4" />
      </pattern>

      {/* Herringbone Wooden Parquet (Aged Soviet Oak Parquet) */}
      <pattern
        id="herringbone-parquet"
        width="14"
        height="14"
        patternUnits="userSpaceOnUse"
      >
        <rect width="14" height="14" fill="#2E2B25" fillOpacity="0.95" />
        <path
          d="M0 0 L7 7 L0 14 M7 0 L14 7 L7 14"
          fill="none"
          stroke="#423E34"
          strokeWidth="0.9"
        />
        <line x1="7" y1="0" x2="7" y2="14" stroke="#211E1A" strokeWidth="0.6" strokeOpacity="0.6" />
      </pattern>

      {/* Caucasian Kilim / Georgian Wall Carpet Geometric Pattern (Darkened Wool) */}
      <pattern
        id="caucasian-carpet"
        width="18"
        height="18"
        patternUnits="userSpaceOnUse"
      >
        <rect width="18" height="18" fill="#572B23" fillOpacity="0.9" />
        <polygon points="9,2 16,9 9,16 2,9" fill="#1C201E" fillOpacity="0.9" />
        <polygon points="9,5 13,9 9,13 5,9" fill="#3D453E" />
        <circle cx="9" cy="9" r="1.5" fill="#B09A69" />
      </pattern>

      {/* Gradients */}
      {/* Heavy Rust and Oxidized Metal */}
      <linearGradient id="rust-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#632D24" />
        <stop offset="45%" stopColor="#A35243" />
        <stop offset="80%" stopColor="#7C3E33" />
        <stop offset="100%" stopColor="#303633" />
      </linearGradient>

      {/* Concrete Weathering Gradient (Cold Desaturated Brutalist) */}
      <linearGradient id="concrete-weathering" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#555B56" />
        <stop offset="25%" stopColor="#4A504B" />
        <stop offset="70%" stopColor="#3E443F" />
        <stop offset="100%" stopColor="#303633" />
      </linearGradient>

      {/* Faded Soviet Institutional Green Wall Paint */}
      <linearGradient id="soviet-wall-green" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#465044" />
        <stop offset="60%" stopColor="#384136" />
        <stop offset="100%" stopColor="#2E352C" />
      </linearGradient>

      {/* Faded Institutional Plaster Gray */}
      <linearGradient id="soviet-wall-gray" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3E4541" />
        <stop offset="70%" stopColor="#323835" />
        <stop offset="100%" stopColor="#282E2B" />
      </linearGradient>

      {/* Damp Moss Patina Gradient */}
      <linearGradient id="moss-patina" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#3E473C" stopOpacity="0.85" />
        <stop offset="50%" stopColor="#556251" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#687565" stopOpacity="0" />
      </linearGradient>

      {/* Interior Ambient Occlusion (Heavy Brutalist Ceiling Shadow) */}
      <linearGradient id="ambient-ceiling-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#101312" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#101312" stopOpacity="0.0" />
      </linearGradient>

      {/* Muted Incandescent Bulb Amber Glow */}
      <radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#B09A69" stopOpacity="0.5" />
        <stop offset="40%" stopColor="#8E7B50" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#151817" stopOpacity="0" />
      </radialGradient>

      {/* Interactive Zone Pulsing Glow */}
      <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  );
};
