import React from 'react';
import type { InteractiveZone, Language } from '../types';

interface ZoneHighlightLayerProps {
  zones: InteractiveZone[];
  activeZoneId: string | null;
  hoveredZoneId: string | null;
  onZoneSelect: (zone: InteractiveZone) => void;
  onZoneHover: (zoneId: string | null) => void;
  language: Language;
}

export const ZoneHighlightLayer: React.FC<ZoneHighlightLayerProps> = ({
  zones,
  activeZoneId,
  hoveredZoneId,
  onZoneSelect,
  onZoneHover,
  language,
}) => {
  return (
    <g id="interactive-zones-layer">
      {zones.map((zone) => {
        const isHovered = hoveredZoneId === zone.id;
        const isActive = activeZoneId === zone.id;
        const { x, y, width, height } = zone.coordinates;
        const { x: mx, y: my } = zone.markerPoint;

        const title = language === 'KA' ? zone.titleKa : zone.titleEn;
        const floorBadge = language === 'KA' ? zone.floorLevelKa : zone.floorLevel;

        return (
          <g
            key={zone.id}
            id={`zone-${zone.id}`}
            className="zone-interactive"
            onClick={(e) => {
              e.stopPropagation();
              onZoneSelect(zone);
            }}
            onMouseEnter={() => onZoneHover(zone.id)}
            onMouseLeave={() => onZoneHover(null)}
            role="button"
            tabIndex={0}
            aria-label={`${floorBadge}: ${title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onZoneSelect(zone);
              }
            }}
            style={{ cursor: 'pointer', outline: 'none' }}
          >
            {/* Zone Interactive Bounding Fill (Hover highlight) */}
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              fill={isActive ? '#965D45' : '#74826A'}
              fillOpacity={isActive ? 0.18 : isHovered ? 0.12 : 0.001}
              stroke={isActive ? '#965D45' : isHovered ? '#74826A' : 'none'}
              strokeWidth={isActive ? 1.5 : 1}
              strokeDasharray={isActive ? 'none' : '4,3'}
              className="transition-all duration-300"
            />

            {/* Architectural Corner Crop Marks (Appears on hover or active) */}
            {(isHovered || isActive) && (
              <g stroke={isActive ? '#965D45' : '#343B37'} strokeWidth="1.5">
                {/* Top-Left */}
                <line x1={x} y1={y} x2={x + 10} y2={y} />
                <line x1={x} y1={y} x2={x} y2={y + 10} />
                {/* Top-Right */}
                <line x1={x + width} y1={y} x2={x + width - 10} y2={y} />
                <line x1={x + width} y1={y} x2={x + width} y2={y + 10} />
                {/* Bottom-Left */}
                <line x1={x} y1={y + height} x2={x + 10} y2={y + height} />
                <line x1={x} y1={y + height} x2={x} y2={y + height - 10} />
                {/* Bottom-Right */}
                <line x1={x + width} y1={y + height} x2={x + width - 10} y2={y + height} />
                <line x1={x + width} y1={y + height} x2={x + width} y2={y + height - 10} />
              </g>
            )}

            {/* Focal Point Reticle Marker */}
            <g transform={`translate(${mx}, ${my})`}>
              {/* Outer Pulse Ring */}
              <circle
                cx="0"
                cy="0"
                r={isActive ? 13 : isHovered ? 11 : 8}
                fill={isActive ? '#965D45' : '#262B29'}
                fillOpacity={isActive ? 0.25 : 0.15}
                stroke={isActive ? '#965D45' : '#343B37'}
                strokeWidth={isActive ? 1.5 : 1}
                className={isActive || isHovered ? 'animate-ping opacity-35' : ''}
              />

              {/* Center Dot */}
              <circle
                cx="0"
                cy="0"
                r={isActive ? 4.5 : 3.5}
                fill={isActive ? '#965D45' : '#262B29'}
                stroke="#E8E0D1"
                strokeWidth="1.2"
              />

              {/* Technical Zone Indicator Badge */}
              <g
                transform={`translate(12, -7)`}
                className="transition-opacity duration-200"
                opacity={isHovered || isActive ? 1 : 0.75}
              >
                <rect
                  x="0"
                  y="0"
                  width={zone.floorLevel.length * 6 + 14}
                  height="14"
                  fill="#262B29"
                  rx="2"
                />
                <text
                  x="7"
                  y="10"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="7.5"
                  fill="#E8E0D1"
                  fontWeight="600"
                  letterSpacing="0.5"
                >
                  {zone.floorLevel}
                </text>
              </g>
            </g>
          </g>
        );
      })}
    </g>
  );
};
