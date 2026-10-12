import React from 'react';
import type { PerspectiveFilter } from '../types';

interface BuildingFrameProps {
  selectedPerspective?: PerspectiveFilter;
}

export const BuildingFrame: React.FC<BuildingFrameProps> = ({ selectedPerspective = 'ALL' }) => {
  // Floor levels for 5 residential stories + roof + basement
  // Slabs at y: 160, 260, 360, 460, 560, 660, 770
  const floorSlabs = [
    { y: 160, label: '+14.20m', name: 'ROOF SLAB' },
    { y: 260, label: '+11.40m', name: 'LEVEL 05' },
    { y: 360, label: '+8.60m',  name: 'LEVEL 04' },
    { y: 460, label: '+5.80m',  name: 'LEVEL 03' },
    { y: 560, label: '+3.00m',  name: 'LEVEL 02' },
    { y: 660, label: '±0.00m',  name: 'LEVEL 01' },
    { y: 770, label: '-2.80m',  name: 'FOUNDATION' },
  ];

  const isPlantSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'PLANT';
  const isInfraSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'INFRASTRUCTURE';

  return (
    <g className="building-frame" id="structural-framework">
      {/* Subterranean Surrounding Soil Cutaway */}
      <rect
        x="0"
        y="660"
        width="1000"
        height="190"
        fill="url(#subterranean-earth)"
      />
      {/* Heavy Subterranean Retaining Boundary Line */}
      <path
        d="M 0,660 L 180,660 L 180,780 L 840,780 L 840,660 L 1000,660"
        fill="none"
        stroke="#262B29"
        strokeWidth="2.5"
      />

      {/* Building Shadow on Courtyard & Ground */}
      <polygon
        points="180,660 140,660 140,780 180,780"
        fill="#262B29"
        fillOpacity="0.08"
      />

      {/* Architectural Elevation Level Markers (Left Margin) */}
      <g className="elevation-markers" opacity="0.65">
        {floorSlabs.map((slab) => (
          <g key={slab.label} transform={`translate(110, ${slab.y})`}>
            {/* Datum line */}
            <line x1="0" y1="0" x2="60" y2="0" stroke="#343B37" strokeWidth="0.75" strokeDasharray="3,3" />
            {/* Level mark triangle */}
            <polygon points="55,-4 65,0 55,4" fill="#343B37" />
            {/* Elevation text */}
            <text
              x="-6"
              y="3"
              textAnchor="end"
              fontFamily="JetBrains Mono, monospace"
              fontSize="7.5"
              fill="#343B37"
              fontWeight="500"
              letterSpacing="0.5"
            >
              {slab.label}
            </text>
          </g>
        ))}
      </g>

      {/* Heavy Structural Concrete Columns (Section Cut) */}
      {/* Left Exterior Column: x=180 to 195, y=160 to 770 */}
      <g id="column-left" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        <rect x="180" y="160" width="15" height="610" fill="#C4B7A2" />
        <rect x="180" y="160" width="15" height="610" fill="url(#arch-concrete-hatch)" />
        <line x1="180" y1="160" x2="180" y2="770" stroke="#262B29" strokeWidth="2" />
        <line x1="195" y1="160" x2="195" y2="770" stroke="#262B29" strokeWidth="1.2" />
        {/* Precast Joint Seams with bitumastic sealant lines */}
        {[210, 310, 410, 510, 610, 710].map((jy) => (
          <line key={jy} x1="180" y1={jy} x2="195" y2={jy} stroke="#262B29" strokeWidth="1.5" strokeDasharray="1,1" />
        ))}
      </g>

      {/* Climbing Vines on Left Exterior Concrete Facade & Joint Cracks (Static Architectural Flora) */}
      <g id="facade-climbing-vines" className={`perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Main climbing vine stem up left column (x=178) */}
        <path
          d="M 180,660 Q 177,610 179,560 Q 176,510 178,460 Q 175,410 178,360"
          fill="none"
          stroke="#74826A"
          strokeWidth="1.6"
        />
        {/* Delicate vine leaf clusters clinging to precast seams */}
        {[
          { x: 177, y: 620 },
          { x: 175, y: 580 },
          { x: 180, y: 530 },
          { x: 176, y: 490 },
          { x: 178, y: 430 },
          { x: 175, y: 390 },
        ].map((pt, i) => (
          <g key={i} transform={`translate(${pt.x}, ${pt.y})`}>
            <path d="M 0,0 Q -4,-5 -1,-8 Q 3,-5 0,0" fill="#74826A" stroke="#586450" strokeWidth="0.5" />
            <path d="M 0,0 Q 4,-4 2,-7 Q -1,-4 0,0" fill="#8A997F" stroke="#586450" strokeWidth="0.5" />
          </g>
        ))}

        {/* Small plants growing out of concrete panel joints */}
        <g id="crack-flora-1" transform="translate(195, 410)">
          <path d="M 0,0 Q 5,-4 3,-7 Q 0,-4 0,0" fill="#8A997F" stroke="#343B37" strokeWidth="0.5" />
          <path d="M 0,0 Q 4,3 7,1 Q 4,-1 0,0" fill="#74826A" stroke="#343B37" strokeWidth="0.5" />
        </g>
        <g id="crack-flora-2" transform="translate(195, 610)">
          <path d="M 0,0 Q 4,-5 2,-8 Q 0,-4 0,0" fill="#74826A" stroke="#343B37" strokeWidth="0.5" />
          <circle cx="2" cy="-9" r="1.2" fill="#AA9C86" />
        </g>
      </g>

      {/* Central Structural Spine Column: x=435 to 445, y=160 to 770 */}
      <g id="column-center" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        <rect x="435" y="160" width="10" height="610" fill="#C4B7A2" />
        <rect x="435" y="160" width="10" height="610" fill="url(#arch-concrete-hatch)" />
        <line x1="435" y1="160" x2="435" y2="770" stroke="#262B29" strokeWidth="1.2" />
        <line x1="445" y1="160" x2="445" y2="770" stroke="#262B29" strokeWidth="1.2" />
      </g>

      {/* Stairwell Interior Dividing Wall: x=680 to 688, y=160 to 770 */}
      <g id="column-stairwell" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        <rect x="680" y="160" width="8" height="610" fill="#C4B7A2" />
        <rect x="680" y="160" width="8" height="610" fill="url(#arch-concrete-hatch)" />
        <line x1="680" y1="160" x2="680" y2="770" stroke="#262B29" strokeWidth="1.2" />
        <line x1="688" y1="160" x2="688" y2="770" stroke="#262B29" strokeWidth="1.2" />
      </g>

      {/* Right Exterior Column & Facade: x=825 to 840, y=160 to 770 */}
      <g id="column-right" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        <rect x="825" y="160" width="15" height="610" fill="#C4B7A2" />
        <rect x="825" y="160" width="15" height="610" fill="url(#arch-concrete-hatch)" />
        <line x1="825" y1="160" x2="825" y2="770" stroke="#262B29" strokeWidth="1.2" />
        <line x1="840" y1="160" x2="840" y2="770" stroke="#262B29" strokeWidth="2" />
      </g>

      {/* Exterior Rain Downspout on Right Facade */}
      <g id="rain-downspout" opacity="0.85" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        <line x1="835" y1="140" x2="835" y2="675" stroke="#7D4732" strokeWidth="3" />
        <line x1="836" y1="140" x2="836" y2="675" stroke="#965D45" strokeWidth="1.5" />
        {/* Downspout Brackets */}
        {[180, 280, 380, 480, 580, 650].map((by) => (
          <path key={by} d={`M 831,${by} L 839,${by}`} stroke="#262B29" strokeWidth="1.5" />
        ))}
        {/* Curved Drainage Shoe at ground */}
        <path d="M 835,675 Q 835,690 850,690" fill="none" stroke="#7D4732" strokeWidth="3" />
      </g>

      {/* Cantilever Balcony Steel Brackets on Left Facade (Floors 2, 3, 4, 5) */}
      {[260, 360, 460, 560].map((by) => (
        <g key={by} className={`balcony-support perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
          {/* Triangular steel diagonal gusset */}
          <polygon
            points={`180,${by} 150,${by} 180,${by + 28}`}
            fill="#343B37"
            stroke="#262B29"
            strokeWidth="1"
          />
          {/* Concrete cantilever slab extension */}
          <rect
            x="135"
            y={by - 8}
            width="45"
            height="10"
            fill="#C4B7A2"
            stroke="#262B29"
            strokeWidth="1.2"
          />
        </g>
      ))}

      {/* Horizontal Reinforced Concrete Floor Slabs (Section Cut) */}
      {floorSlabs.map((slab) => (
        <g key={slab.name} id={`slab-${slab.y}`} className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
          {/* Concrete base fill */}
          <rect
            x="180"
            y={slab.y - 10}
            width="650"
            height="12"
            fill="#C4B7A2"
          />
          {/* Structural section cutaway hatching */}
          <rect
            x="180"
            y={slab.y - 10}
            width="650"
            height="12"
            fill="url(#arch-concrete-hatch)"
          />
          {/* Slab top and bottom boundary lines */}
          <line
            x1="180"
            y1={slab.y - 10}
            x2="830"
            y2={slab.y - 10}
            stroke="#262B29"
            strokeWidth="1.5"
          />
          <line
            x1="180"
            y1={slab.y + 2}
            x2="830"
            y2={slab.y + 2}
            stroke="#262B29"
            strokeWidth="1.5"
          />
          {/* Ambient drop shadow under ceiling */}
          <rect
            x="195"
            y={slab.y + 2}
            width="630"
            height="14"
            fill="url(#ambient-ceiling-shadow)"
          />
        </g>
      ))}

      {/* Massive Subterranean Concrete Footing Pads */}
      <g id="foundation-footings" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        <rect x="170" y="770" width="35" height="18" fill="#AA9C86" stroke="#262B29" strokeWidth="2" />
        <rect x="425" y="770" width="30" height="18" fill="#AA9C86" stroke="#262B29" strokeWidth="2" />
        <rect x="670" y="770" width="28" height="18" fill="#AA9C86" stroke="#262B29" strokeWidth="2" />
        <rect x="815" y="770" width="35" height="18" fill="#AA9C86" stroke="#262B29" strokeWidth="2" />
      </g>
    </g>
  );
};
