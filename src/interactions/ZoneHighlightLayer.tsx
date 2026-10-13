import React, { useRef } from 'react';
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
  const pointerDownPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

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

        // Visual highlight colors: oxidized red / faded Soviet green / weathered concrete
        const highlightFill = isActive
          ? '#A35243'
          : matchesPerspective && selectedPerspective !== 'ALL'
          ? '#687565'
          : '#555B56';

        const highlightStroke = isActive
          ? '#A35243'
          : matchesPerspective && selectedPerspective !== 'ALL'
          ? '#B09A69'
          : '#555B56';

        // Low opacity translucent highlight with smooth transition
        const fillOpacity = isActive
          ? 0.22
          : isHovered
          ? (matchesPerspective && selectedPerspective !== 'ALL' ? 0.18 : 0.12)
          : (matchesPerspective && selectedPerspective !== 'ALL' ? 0.05 : 0);

        const strokeWidth = isActive ? 1.5 : 1;

        return (
          <g
            key={zone.id}
            id={`zone-${zone.id}`}
            className={`zone-interactive perspective-transition ${isSubdued ? 'perspective-dimmed' : ''}`}
            onPointerDown={(e) => {
              pointerDownPos.current = { x: e.clientX, y: e.clientY };
            }}
            onClick={(e) => {
              e.stopPropagation();
              // Prevent accidental selection during panning/dragging
              const dist = Math.hypot(
                e.clientX - pointerDownPos.current.x,
                e.clientY - pointerDownPos.current.y
              );
              if (dist > 6) return;
              onZoneSelect(zone);
            }}
            onMouseEnter={() => onZoneHover(zone.id)}
            onMouseLeave={() => onZoneHover(null)}
            role="button"
            tabIndex={0}
            aria-label={`${floorBadge}: ${title}. ${
              language === 'KA' ? 'დააჭირეთ დეტალებისთვის' : 'Click to explore architectural space.'
            }`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onZoneSelect(zone);
              }
            }}
            style={{ cursor: 'pointer', outline: 'none' }}
          >
            <title>{`${floorBadge}: ${title}`}</title>

            {/* Architectural Hit Area & Translucent Hover Highlight */}
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              fill={fillOpacity > 0 ? highlightFill : 'transparent'}
              fillOpacity={fillOpacity}
              stroke={
                isHovered || isActive
                  ? highlightStroke
                  : matchesPerspective && selectedPerspective !== 'ALL'
                  ? highlightStroke
                  : 'none'
              }
              strokeWidth={strokeWidth}
              strokeDasharray={
                isActive || isHovered
                  ? 'none'
                  : matchesPerspective && selectedPerspective !== 'ALL'
                  ? '4,3'
                  : 'none'
              }
              style={{
                pointerEvents: 'all',
                transition: 'fill-opacity 180ms ease-out, stroke 180ms ease-out, stroke-width 180ms ease-out',
              }}
            />

            {/* Architectural Corner Crop Marks (Appears on hover or active) */}
            {(isHovered || isActive) && (
              <g
                stroke={isActive ? '#A35243' : '#555B56'}
                strokeWidth="1.2"
                className="pointer-events-none"
                style={{ transition: 'stroke 180ms ease-out' }}
              >
                {/* Top-Left */}
                <line x1={x} y1={y} x2={x + 8} y2={y} />
                <line x1={x} y1={y} x2={x} y2={y + 8} />
                {/* Top-Right */}
                <line x1={x + width} y1={y} x2={x + width - 8} y2={y} />
                <line x1={x + width} y1={y} x2={x + width} y2={y + 8} />
                {/* Bottom-Left */}
                <line x1={x} y1={y + height} x2={x + 8} y2={y + height} />
                <line x1={x} y1={y + height} x2={x} y2={y + height - 8} />
                {/* Bottom-Right */}
                <line x1={x + width} y1={y + height} x2={x + width - 8} y2={y + height} />
                <line x1={x + width} y1={y + height} x2={x + width} y2={y + height - 8} />
              </g>
            )}

            {/* Focal Point Reticle Marker (Preserved as secondary navigation) */}
            <g transform={`translate(${mx}, ${my})`}>
              {/* Outer Pulse Ring */}
              <circle
                cx="0"
                cy="0"
                r={isActive ? 14 : isHovered ? 12 : 9}
                fill={isActive ? '#A35243' : '#222725'}
                fillOpacity={isActive ? 0.35 : isHovered ? 0.25 : 0.15}
                stroke={isActive ? '#A35243' : '#303633'}
                strokeWidth={isActive ? 1.6 : 1}
                className={isActive || isHovered ? 'animate-ping opacity-35' : ''}
              />

              {/* Center Dot */}
              <circle
                cx="0"
                cy="0"
                r={isActive ? 5 : 4}
                fill={isActive ? '#B55B49' : '#1C201E'}
                stroke="#E6E5DC"
                strokeWidth="1.4"
              />

              {/* Technical Zone Indicator Badge - Hard Rectangular Archival Stamp */}
              <g
                transform={`translate(12, -8)`}
                className="transition-opacity duration-200"
                opacity={isHovered || isActive ? 1 : 0.9}
              >
                <rect
                  x="0"
                  y="0"
                  width={zone.floorLevel.length * 6.5 + 16}
                  height="16"
                  fill={isActive ? '#A35243' : '#1C201E'}
                  rx="0"
                  stroke={isActive ? '#B55B49' : isHovered ? '#687565' : '#4A544E'}
                  strokeWidth="1"
                />
                <text
                  x="8"
                  y="11.5"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="8.5"
                  fill="#E6E5DC"
                  fontWeight="700"
                  letterSpacing="0.5"
                >
                  {zone.floorLevel}
                </text>
              </g>

              {/* Hover Contextual Field Label Pill / Tooltip */}
              {isHovered && (
                <g
                  transform="translate(12, -28)"
                  className="pointer-events-none filter drop-shadow-md"
                  style={{ transition: 'opacity 180ms ease-out' }}
                >
                  <rect
                    x="0"
                    y="0"
                    width={Math.max(title.length * 6.2 + 24, 125)}
                    height="22"
                    fill="#1C201E"
                    stroke="#4A544E"
                    strokeWidth="1"
                    rx="0"
                  />
                  <circle cx="9" cy="11" r="2.5" fill={isActive ? '#B55B49' : '#889885'} />
                  <text
                    x="16"
                    y="14.5"
                    fontFamily="Inter, sans-serif"
                    fontSize="9"
                    fontWeight="600"
                    fill="#E6E5DC"
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
