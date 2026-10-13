import React from 'react';
import type { PerspectiveFilter } from '../types';

interface CourtyardSectionProps {
  selectedPerspective?: PerspectiveFilter;
}

export const CourtyardSection: React.FC<CourtyardSectionProps> = ({ selectedPerspective = 'ALL' }) => {
  const isAnimalSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'ANIMAL';
  const isPlantSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'PLANT';
  const isHumanSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'HUMAN';

  return (
    <g id="courtyard-tbilisi-yard">
      {/* Ground Surface: Weathered Dark Asphalt & Permeable Flagstones (y=660 to 770) */}
      <rect x="10" y="660" width="170" height="110" fill="#222725" fillOpacity="0.75" />
      <line x1="10" y1="660" x2="180" y2="660" stroke="#151817" strokeWidth="2" />
      
      {/* Flagstone paving cracks and cold bitumen seams */}
      <g opacity="0.6">
        <line x1="30" y1="660" x2="45" y2="675" stroke="#151817" strokeWidth="0.8" />
        <line x1="45" y1="675" x2="70" y2="672" stroke="#151817" strokeWidth="0.8" />
        <line x1="90" y1="660" x2="110" y2="678" stroke="#151817" strokeWidth="0.8" />
        <line x1="130" y1="662" x2="145" y2="685" stroke="#151817" strokeWidth="0.8" />
      </g>

      {/* Spontaneous weeds in paving cracks */}
      <g className={`perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`} opacity="0.75">
        <path d="M 45,675 Q 48,670 47,667 Q 44,670 45,675" fill="#4D584A" stroke="#303633" strokeWidth="0.4" />
        <path d="M 90,660 Q 93,656 91,653 Q 88,656 90,660" fill="#5A6854" stroke="#303633" strokeWidth="0.4" />
      </g>

      {/* Traditional Metal Grape Arbor Trellis Structure (Talavari) */}
      <g id="talavari-trellis">
        {/* Steel Pipe Uprights */}
        <line x1="30" y1="660" x2="30" y2="560" stroke="#2B322E" strokeWidth="2" />
        <line x1="110" y1="660" x2="110" y2="560" stroke="#2B322E" strokeWidth="2" />
        {/* Overhead Horizontal Canopy Beams & Wire Mesh */}
        <line x1="20" y1="560" x2="180" y2="560" stroke="#222724" strokeWidth="2.2" />
        <line x1="20" y1="575" x2="180" y2="575" stroke="#303633" strokeWidth="1" strokeDasharray="4,3" />
        <line x1="20" y1="590" x2="180" y2="590" stroke="#303633" strokeWidth="1" strokeDasharray="4,3" />
        {/* Diagonal Trellis Bracing */}
        <line x1="30" y1="580" x2="50" y2="560" stroke="#2B322E" strokeWidth="1.2" />
        <line x1="110" y1="580" x2="90" y2="560" stroke="#2B322E" strokeWidth="1.2" />

        {/* Lush Grapevine Tendrils & Clusters Hanging from Arbor */}
        <g className={`talavari-canopy perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
          {/* Main Vine Trunk climbing the upright */}
          <path d="M 30,660 Q 32,620 28,590 Q 31,570 35,560" fill="none" stroke="#4A3B31" strokeWidth="3" />
          <path d="M 35,560 Q 70,555 110,558 Q 145,555 180,562" fill="none" stroke="#4A3B31" strokeWidth="2.5" />

          {/* Cascading Desaturated Grape Foliage */}
          <g>
            {[
              { cx: 25, cy: 565, r: 7 },
              { cx: 38, cy: 558, r: 9 },
              { cx: 52, cy: 564, r: 8 },
              { cx: 65, cy: 556, r: 10 },
              { cx: 80, cy: 562, r: 9 },
              { cx: 95, cy: 557, r: 10 },
              { cx: 112, cy: 564, r: 8 },
              { cx: 128, cy: 558, r: 9 },
              { cx: 145, cy: 565, r: 8 },
              { cx: 160, cy: 559, r: 10 },
              { cx: 175, cy: 566, r: 8 },
            ].map((leaf, idx) => (
              <circle
                key={idx}
                cx={leaf.cx}
                cy={leaf.cy}
                r={leaf.r}
                fill={idx % 2 === 0 ? "#4D584A" : "#5A6854"}
                stroke="#303633"
                strokeWidth="0.8"
              />
            ))}
          </g>

          {/* Hanging Dark Grape Clusters */}
          {[
            { x: 55, y: 574 },
            { x: 90, y: 572 },
            { x: 135, y: 575 },
          ].map((cluster, i) => (
            <g key={i} transform={`translate(${cluster.x}, ${cluster.y})`}>
              <circle cx="0" cy="0" r="2.2" fill="#1C201E" />
              <circle cx="4" cy="0" r="2.2" fill="#242129" />
              <circle cx="2" cy="4" r="2.2" fill="#3A2D35" />
              <circle cx="2" cy="7.5" r="1.8" fill="#1C201E" />
            </g>
          ))}
        </g>
      </g>

      {/* Mature Tbilisi Fig Tree (Ficus carica) on Far Left (x=10 to 60) */}
      <g id="fig-tree" className={`perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Sculptural twisting trunk */}
        <path
          d="M 12,660 Q 18,630 15,605 Q 12,580 20,555"
          fill="none"
          stroke="#3D372F"
          strokeWidth="6"
        />
        <path
          d="M 15,605 Q 28,590 35,570"
          fill="none"
          stroke="#322D26"
          strokeWidth="4"
        />
        {/* Characteristic broad lobed fig leaves (Static Architectural Botany) */}
        <g>
          <path d="M 18,552 Q 10,540 16,532 Q 26,538 22,550" fill="#4D584A" stroke="#262B28" strokeWidth="0.8" />
          <path d="M 24,555 Q 35,545 42,550 Q 38,562 26,558" fill="#556251" stroke="#262B28" strokeWidth="0.8" />
          <path d="M 33,568 Q 45,560 50,568 Q 42,578 34,572" fill="#4D584A" stroke="#262B28" strokeWidth="0.8" />
        </g>
      </g>

      {/* Weathered Wooden Courtyard Bench (Dominoes & Neighbor Gathering) */}
      <g id="courtyard-bench" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`} transform="translate(60, 638)">
        {/* Cast-iron bench sides */}
        <path d="M 0,22 L 4,0 L 44,0 L 48,22" fill="none" stroke="#1E2220" strokeWidth="1.8" />
        <line x1="0" y1="22" x2="8" y2="12" stroke="#1E2220" strokeWidth="1.5" />
        <line x1="48" y1="22" x2="40" y2="12" stroke="#1E2220" strokeWidth="1.5" />
        {/* Slatted Pine Wood Seat & Backrest */}
        <rect x="2" y="-6" width="44" height="4" fill="#443B33" stroke="#2D2620" strokeWidth="0.8" />
        <rect x="2" y="-1" width="44" height="4" fill="#443B33" stroke="#2D2620" strokeWidth="0.8" />
        <rect x="2" y="8" width="44" height="4" fill="#443B33" stroke="#2D2620" strokeWidth="0.8" />
        <rect x="2" y="13" width="44" height="4" fill="#443B33" stroke="#2D2620" strokeWidth="0.8" />

        {/* Small Pomegranate Sapling in Terracotta Pot beside bench */}
        <g transform="translate(-10, 10)">
          <polygon points="0,12 8,12 7,4 1,4" fill="#5A382E" stroke="#151817" strokeWidth="0.6" />
          <line x1="4" y1="4" x2="4" y2="-4" stroke="#4A3B31" strokeWidth="1" />
          <circle cx="2" cy="-5" r="2.5" fill="#4D584A" />
          <circle cx="6" cy="-6" r="2.5" fill="#556251" />
        </g>
      </g>

      {/* MULTISPECIES HIGHLIGHT: Community Street Dog ("Buba") resting on mat */}
      <g id="community-dog-buba" className={`perspective-transition ${isAnimalSubdued ? 'perspective-dimmed' : ''}`} transform="translate(125, 652)">
        {/* Burlap Sack Mat */}
        <ellipse cx="0" cy="8" rx="18" ry="4" fill="#2E2822" stroke="#3D352D" strokeWidth="0.8" />
        
        {/* Sleeping Dog Body (Muted earthy coat) */}
        <ellipse cx="0" cy="3" rx="13" ry="6.5" fill="#6E5A47" stroke="#4D3E31" strokeWidth="1" />
        {/* Folded Paws */}
        <ellipse cx="-8" cy="8" rx="3.5" ry="1.8" fill="#574635" />
        <ellipse cx="5" cy="8" rx="3.5" ry="1.8" fill="#574635" />
        {/* Head Resting on Paws */}
        <ellipse cx="11" cy="4" rx="5" ry="4" fill="#6E5A47" stroke="#4D3E31" strokeWidth="0.8" />
        {/* Snout & Black Nose */}
        <ellipse cx="15" cy="5" rx="2.5" ry="2" fill="#574635" />
        <circle cx="16.5" cy="4.5" r="1" fill="#151817" />
        {/* Floppy Ear */}
        <polygon points="9,2 7,7 11,6" fill="#4D3E31" />
        {/* Tbilisi Muted Yellow Vaccination Ear Tag */}
        <circle cx="8" cy="4" r="1.5" fill="#B09A69" stroke="#151817" strokeWidth="0.4" />
        {/* Tail curled peacefully */}
        <path d="M -12,2 Q -16,4 -15,7" fill="none" stroke="#6E5A47" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Courtyard Drinking Fountain / Tap (Fonte / ეზოს ონკანი) */}
      <g id="courtyard-water-fountain" transform="translate(162, 630)">
        {/* Vertical Stone Plinth */}
        <rect x="0" y="0" width="12" height="30" fill="#2F3532" stroke="#151817" strokeWidth="1" />
        {/* Weathered Metal Curved Tap */}
        <path d="M 0,10 L -5,10 L -5,13" fill="none" stroke="#A35243" strokeWidth="1.8" />
        <circle cx="-5" cy="7" r="1.2" fill="#7C3E33" />
        {/* Water drip drop (Clean, Static) */}
        <circle cx="-5" cy="18" r="0.8" fill="#D8D7CD" opacity="0.6" />
        {/* Stone basin catching water */}
        <rect x="-9" y="26" width="10" height="4" fill="#1C201E" stroke="#151817" strokeWidth="0.8" />
        {/* Moist green moss around fountain base */}
        <path d="M -12,30 Q -6,27 0,30" fill="none" stroke="#3E4D3B" strokeWidth="1.5" />
      </g>
    </g>
  );
};
