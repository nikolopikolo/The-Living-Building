import React from 'react';
import { BuildingTextures } from './BuildingTextures';
import { BuildingFrame } from './BuildingFrame';
import { RoofStructure } from './RoofStructure';
import { ApartmentRooms } from './ApartmentRooms';
import { StairwellSection } from './StairwellSection';
import { BasementInfrastructure } from './BasementInfrastructure';
import { CourtyardSection } from './CourtyardSection';
import { ZoneHighlightLayer } from '../interactions/ZoneHighlightLayer';
import type { InteractiveZone, Language } from '../types';

interface ArchitecturalCutawayProps {
  zones: InteractiveZone[];
  activeZoneId: string | null;
  hoveredZoneId: string | null;
  onZoneSelect: (zone: InteractiveZone) => void;
  onZoneHover: (zoneId: string | null) => void;
  language: Language;
}

export const ArchitecturalCutaway: React.FC<ArchitecturalCutawayProps> = ({
  zones,
  activeZoneId,
  hoveredZoneId,
  onZoneSelect,
  onZoneHover,
  language,
}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 1000 850"
        className="w-full h-full max-h-[88vh] architectural-cutaway filter drop-shadow-md"
        style={{ overflow: 'visible' }}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Architectural Cutaway: The Living Building Tbilisi"
      >
        {/* Architectural Textures & Gradients */}
        <BuildingTextures />

        {/* Background Atmosphere & Section Envelope */}
        <g id="envelope-background">
          {/* Subtle warm wash behind rooms */}
          <rect
            x="180"
            y="160"
            width="650"
            height="500"
            fill="#E8E0D1"
            fillOpacity="0.4"
          />
        </g>

        {/* 1. Structural Frame (Columns, floor slabs, level marks, earth) */}
        <BuildingFrame />

        {/* 2. Subterranean Infrastructure & Sardapi */}
        <BasementInfrastructure />

        {/* 3. Tbilisi Shared Courtyard & Talavari */}
        <CourtyardSection />

        {/* 4. Communal Stairwell (Sadarbozo) */}
        <StairwellSection />

        {/* 5. Residential Apartment Rooms (Floors 1 - 5) */}
        <ApartmentRooms />

        {/* 6. Rooftop & Aerial Canopy */}
        <RoofStructure />

        {/* 7. Interactive Zone Highlight & Selection Layer */}
        <ZoneHighlightLayer
          zones={zones}
          activeZoneId={activeZoneId}
          hoveredZoneId={hoveredZoneId}
          onZoneSelect={onZoneSelect}
          onZoneHover={onZoneHover}
          language={language}
        />

        {/* 8. Architectural Drafting Marginalia & Graphic Scale Bar */}
        <g id="drafting-marginalia" opacity="0.6">
          {/* Graphic Scale Bar (Bottom Right) */}
          <g transform="translate(820, 810)">
            <text
              x="0"
              y="-6"
              fontFamily="JetBrains Mono, monospace"
              fontSize="6"
              fill="#343B37"
              letterSpacing="0.8"
            >
              SCALE 1:50 · МЕТР
            </text>
            {/* Scale Bar Checkers */}
            <rect x="0" y="0" width="20" height="3" fill="#262B29" />
            <rect x="20" y="0" width="20" height="3" fill="#E8E0D1" stroke="#262B29" strokeWidth="0.5" />
            <rect x="40" y="0" width="20" height="3" fill="#262B29" />
            <rect x="60" y="0" width="20" height="3" fill="#E8E0D1" stroke="#262B29" strokeWidth="0.5" />
            <text x="0" y="10" fontFamily="JetBrains Mono, monospace" fontSize="5" fill="#343B37">0m</text>
            <text x="40" y="10" fontFamily="JetBrains Mono, monospace" fontSize="5" fill="#343B37">5m</text>
            <text x="80" y="10" fontFamily="JetBrains Mono, monospace" fontSize="5" fill="#343B37">10m</text>
          </g>

          {/* North Orientation Compass */}
          <g transform="translate(930, 110)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="#343B37" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="0" y1="-16" x2="0" y2="16" stroke="#343B37" strokeWidth="0.8" />
            <polygon points="0,-16 -3,-5 3,-5" fill="#965D45" />
            <text x="0" y="-18" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#262B29" fontWeight="600">N</text>
          </g>
        </g>
      </svg>
    </div>
  );
};
