import React from 'react';
import type { InteractiveZone, Language, PerspectiveFilter } from '../types';

interface ZoneHighlightLayerProps {
  zones: InteractiveZone[];
  activeZoneId: string | null;
  hoveredZoneId: string | null;
  onZoneSelect: (zone: InteractiveZone) => void;
  onZoneHover: (zoneId: string | null) => void;
  language: Language;
  selectedPerspective?: PerspectiveFilter;
}

export const ZoneHighlightLayer: React.FC<ZoneHighlightLayerProps> = ({
  zones,
  activeZoneId,
  hoveredZoneId,
  onZoneSelect,
  onZoneHover,
  language,
  selectedPerspective = 'ALL',
}) => {
  return (
    <g id="interactive-zones-layer">
      {zones.map((zone) => {
        const isHovered = hoveredZoneId === zone.id;
        const isActive = activeZoneId === zone.id;
        const matchesPerspective =
          selectedPerspective === 'ALL' ||
          (zone.perspectives && zone.perspectives.includes(selectedPerspective as any));

        const isSubdued = !matchesPerspective;

        const { x, y, width, height } = zone.coordinates;
        const { x: mx, y: my } = zone.markerPoint;

        const title = language === 'KA' ? zone.titleKa : zone.titleEn;
        const floorBadge = language === 'KA' ? zone.floorLevelKa : zone.floorLevel;

        return (
          <g
            key={zone.id}
            id={`zone-${zone.id}`}
            className={`zone-interactive perspective-transition ${isSubdued ? 'perspective-dimmed' : ''}`}
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
              fill={isActive ? '#965D45' : matchesPerspective && selectedPerspective !== 'ALL' ? '#74826A' : '#74826A'}
              fillOpacity={isActive ? 0.2 : isHovered ? 0.14 : matchesPerspective && selectedPerspective !== 'ALL' ? 0.08 : 0.001}
              stroke={isActive ? '#965D45' : isHovered ? '#74826A' : matchesPerspective && selectedPerspective !== 'ALL' ? '#586450' : 'none'}
              strokeWidth={isActive ? 1.6 : 1}
              strokeDasharray={isActive ? 'none' : '4,3'}
              className="transition-all duration-300"
            />

            {/* Architectural Corner Crop Marks (Appears on hover or active) */}
            {(isHovered || isActive || (matchesPerspective && selectedPerspective !== 'ALL')) && (
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
                r={isActive ? 14 : isHovered ? 12 : 9}
                fill={isActive ? '#965D45' : '#262B29'}
                fillOpacity={isActive ? 0.28 : isHovered ? 0.2 : 0.14}
                stroke={isActive ? '#965D45' : '#343B37'}
                strokeWidth={isActive ? 1.6 : 1}
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
                opacity={isHovered || isActive ? 1 : 0.8}
              >
                <rect
                  x="0"
                  y="0"
                  width={zone.floorLevel.length * 6 + 14}
                  height="14"
                  fill={isActive ? '#965D45' : '#262B29'}
                  rx="2"
                  stroke={isHovered ? '#74826A' : 'none'}
                  strokeWidth="0.8"
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

              {/* Hover Contextual Field Label Pill */}
              {isHovered && (
                <g
                  transform="translate(12, -26)"
                  className="pointer-events-none filter drop-shadow-sm"
                >
                  <rect
                    x="0"
                    y="0"
                    width={Math.max(title.length * 5.6 + 22, 110)}
                    height="18"
                    fill="#F7F3EB"
                    stroke="#262B29"
                    strokeWidth="1"
                    rx="2"
                  />
                  <circle cx="8" cy="9" r="2.5" fill="#965D45" />
                  <text
                    x="15"
                    y="12.5"
                    fontFamily="Inter, sans-serif"
                    fontSize="7.8"
                    fontWeight="600"
                    fill="#262B29"
                  >
                    {title}
                  </text>
                </g>
              )}
            </g>
          </g>
        );
      })}
    </g>
  );
};
