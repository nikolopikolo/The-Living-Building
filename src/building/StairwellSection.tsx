import React from 'react';
import type { PerspectiveFilter } from '../types';

interface StairwellSectionProps {
  selectedPerspective?: PerspectiveFilter;
}

export const StairwellSection: React.FC<StairwellSectionProps> = ({ selectedPerspective = 'ALL' }) => {
  // 5 residential floor landings: y = 248 (Fl 5), 348 (Fl 4), 448 (Fl 3), 548 (Fl 2), 648 (Fl 1)
  const landings = [
    { floor: 5, y: 248, doorNum: '17-20' },
    { floor: 4, y: 348, doorNum: '13-16' },
    { floor: 3, y: 448, doorNum: '09-12' },
    { floor: 2, y: 548, doorNum: '05-08' },
    { floor: 1, y: 648, doorNum: '01-04' },
  ];

  const isAnimalSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'ANIMAL';
  const isHumanSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'HUMAN';
  const isInfraSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'INFRASTRUCTURE';
  const isPlantSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'PLANT';

  return (
    <g id="stairwell-sadarbozo">
      {/* Background Plaster of Vertical Stair Shaft */}
      <rect x="688" y="160" width="137" height="500" fill="#2B312D" fillOpacity="0.85" />
      <rect x="688" y="160" width="137" height="500" fill="url(#concrete-weathering)" opacity="0.45" />

      {/* Vertical Utility Conduit (Exposed Soviet electrical cable riser) */}
      <g id="stair-infrastructure" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        <line x1="812" y1="160" x2="812" y2="660" stroke="#151817" strokeWidth="2" />
        {/* Junction boxes on each floor */}
        {[200, 300, 400, 500, 600].map((jy) => (
          <rect key={jy} x="807" y={jy} width="10" height="12" fill="#3D453E" stroke="#151817" strokeWidth="0.8" />
        ))}
      </g>

      {/* Stairwell Windows on Exterior Side (x=790 to 820, on half-landings) */}
      {[205, 305, 405, 505, 605].map((wy, idx) => (
        <g key={wy} className="stair-window">
          <rect x="792" y={wy} width="28" height="32" fill="#1C221F" fillOpacity="0.85" stroke="#151817" strokeWidth="1" />
          <line x1="806" y1={wy} x2="806" y2={wy + 32} stroke="#151817" strokeWidth="0.75" />
          <line x1="792" y1={wy + 16} x2="820" y2={wy + 16} stroke="#151817" strokeWidth="0.75" />
          
          {/* Half-landing potted plant on Floor 4 window (idx=1) */}
          {idx === 1 && (
            <g className={`perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`} transform={`translate(795, ${wy + 24})`}>
              <polygon points="0,6 8,6 7,0 1,0" fill="#632D24" stroke="#151817" strokeWidth="0.5" />
              <circle cx="4" cy="-2" r="3" fill="#4D584A" />
            </g>
          )}
        </g>
      ))}

      {/* Landings and Diagonal Stair Flights */}
      <g id="stair-flights" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Floor 5 to 4 Flight */}
        <path d="M 688,248 L 735,248 L 785,298 L 815,298" fill="none" stroke="#181C1A" strokeWidth="3" />
        <path d="M 785,298 L 735,348 L 688,348" fill="none" stroke="#181C1A" strokeWidth="3" />
        
        {/* Floor 4 to 3 Flight */}
        <path d="M 688,348 L 735,348 L 785,398 L 815,398" fill="none" stroke="#181C1A" strokeWidth="3" />
        <path d="M 785,398 L 735,448 L 688,448" fill="none" stroke="#181C1A" strokeWidth="3" />

        {/* Floor 3 to 2 Flight */}
        <path d="M 688,448 L 735,448 L 785,498 L 815,498" fill="none" stroke="#181C1A" strokeWidth="3" />
        <path d="M 785,498 L 735,548 L 688,548" fill="none" stroke="#181C1A" strokeWidth="3" />

        {/* Floor 2 to 1 Flight */}
        <path d="M 688,548 L 735,548 L 785,598 L 815,598" fill="none" stroke="#181C1A" strokeWidth="3" />
        <path d="M 785,598 L 735,648 L 688,648" fill="none" stroke="#181C1A" strokeWidth="3" />

        {/* Stair Balustrades & Railings */}
        {[248, 348, 448, 548].map((ly) => (
          <g key={ly} className="stair-railing">
            <line x1="735" y1={ly - 16} x2="785" y2={ly + 34} stroke="#A35243" strokeWidth="2" />
            <line x1="745" y1={ly - 6} x2="745" y2={ly + 10} stroke="#151817" strokeWidth="1" />
            <line x1="760" y1={ly + 9} x2="760" y2={ly + 25} stroke="#151817" strokeWidth="1" />
            <line x1="775" y1={ly + 24} x2="775" y2={ly + 40} stroke="#151817" strokeWidth="1" />
          </g>
        ))}
      </g>

      {/* Apartment Entrance Doors & Human Footprints on each landing */}
      <g id="stair-doors" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
        {landings.map((landing) => (
          <g key={landing.floor} transform={`translate(692, ${landing.y - 65})`}>
            {/* Wooden Entry Door */}
            <rect x="0" y="0" width="32" height="65" fill="#4A3B31" stroke="#151817" strokeWidth="1.2" />
            {/* Door panels */}
            <rect x="4" y="6" width="24" height="24" fill="#5E4839" stroke="#3D2E24" strokeWidth="0.8" />
            <rect x="4" y="34" width="24" height="26" fill="#5E4839" stroke="#3D2E24" strokeWidth="0.8" />
            {/* Brass Peephole */}
            <circle cx="16" cy="22" r="1.5" fill="#B09A69" stroke="#151817" strokeWidth="0.5" />
            {/* Stenciled apartment numbers plate */}
            <rect x="10" y="10" width="12" height="6" fill="#D8D7CD" stroke="#151817" strokeWidth="0.6" />
            <text x="16" y="14.5" textAnchor="middle" fontSize="4.5" fontFamily="JetBrains Mono, monospace" fill="#151817" fontWeight="600">
              {landing.floor}
            </text>
            {/* Doormat */}
            <rect x="-1" y="63" width="34" height="3" fill="#222725" stroke="#151817" strokeWidth="0.6" />
          </g>
        ))}

        {/* Leaning umbrella beside Floor 2 Door */}
        <g transform="translate(726, 520)">
          <line x1="0" y1="0" x2="4" y2="28" stroke="#151817" strokeWidth="1.8" />
          <path d="M 0,0 Q -3,-4 -4,0" fill="none" stroke="#A35243" strokeWidth="1.2" />
        </g>
      </g>

      {/* Ceiling Bare Light Bulbs with Subtle Voltage Flicker */}
      {[248, 448, 648].map((ly, i) => (
        <g key={ly} transform={`translate(745, ${ly - 80})`} className={i === 1 ? 'animate-stair-light' : ''}>
          <line x1="0" y1="0" x2="0" y2="12" stroke="#151817" strokeWidth="1" />
          <circle cx="0" cy="14" r="3.5" fill="#D8D7CD" stroke="#151817" strokeWidth="0.8" />
          <circle cx="0" cy="14" r="16" fill="url(#lamp-glow)" />
        </g>
      ))}

      {/* MULTISPECIES HIGHLIGHT: Stairwell Tabby Cat "Niko" on 3rd Floor Landing (y=448) */}
      <g id="stairwell-cat-niko" className={`perspective-transition ${isAnimalSubdued ? 'perspective-dimmed' : ''}`} transform="translate(738, 444)">
        {/* Cat Body curled up sleeping */}
        <ellipse cx="0" cy="0" rx="7.5" ry="4.5" fill="#755E45" stroke="#523F2E" strokeWidth="0.8" />
        {/* Tabby stripes */}
        <path d="M -3,-3 Q -1,0 -3,3" fill="none" stroke="#403123" strokeWidth="0.8" />
        <path d="M 0,-4 Q 2,-1 0,3" fill="none" stroke="#403123" strokeWidth="0.8" />
        <path d="M 3,-3 Q 5,0 3,3" fill="none" stroke="#403123" strokeWidth="0.8" />
        {/* Sleeping head tucked in */}
        <circle cx="6.5" cy="-1.5" r="3.5" fill="#755E45" stroke="#523F2E" strokeWidth="0.8" />
        <polygon points="5.5,-4.5 7,-7 8.5,-4.5" fill="#8C4436" />
        
        {/* Curled Tail */}
        <g>
          <path d="M -6.5,1 Q -11,4 -9,7" fill="none" stroke="#755E45" strokeWidth="1.8" />
          <path d="M -8,5 Q -10,7 -8.5,8" fill="none" stroke="#523F2E" strokeWidth="1.5" />
        </g>

        {/* Ceramic Milk Saucer beside cat */}
        <ellipse cx="14" cy="3" rx="4.5" ry="2" fill="#D8D7CD" stroke="#151817" strokeWidth="0.6" />
        <ellipse cx="14" cy="2.8" rx="3.5" ry="1.4" fill="#939B92" />
      </g>

      {/* Ground Floor Landing: Bank of Classic Soviet Blue Mailboxes (x=745 to 785, y=600 to 645) */}
      <g id="communal-mailboxes" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`} transform="translate(745, 600)">
        <rect x="0" y="0" width="38" height="42" fill="#22313B" stroke="#151817" strokeWidth="1.2" />
        {/* Individual Mailbox compartments with horizontal mail slots */}
        {[0, 8, 16, 24, 32].map((my) => (
          <g key={my}>
            <line x1="0" y1={my} x2="38" y2={my} stroke="#151817" strokeWidth="0.8" />
            <line x1="4" y1={my + 4} x2="16" y2={my + 4} stroke="#465866" strokeWidth="1.2" />
            <line x1="22" y1={my + 4} x2="34" y2={my + 4} stroke="#465866" strokeWidth="1.2" />
          </g>
        ))}
        {/* Stenciled Georgian/Latin labels */}
        <text x="19" y="40" textAnchor="middle" fontSize="3.5" fontFamily="JetBrains Mono, monospace" fill="#D8D7CD">
          ფოსტა №1-20
        </text>
        {/* Folded paper notice / newspaper corner */}
        <polygon points="12,12 18,12 16,7 10,7" fill="#D8D7CD" stroke="#151817" strokeWidth="0.5" />
      </g>

      {/* Main Building Ground Entrance Door (x=692 to 730, y=595 to 660) */}
      <g id="main-sadarbozo-portal" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`} transform="translate(692, 595)">
        <rect x="0" y="0" width="36" height="65" fill="#252A27" stroke="#151817" strokeWidth="1.5" />
        {/* Glass panes with wire mesh */}
        <rect x="4" y="6" width="28" height="28" fill="#1C221F" fillOpacity="0.8" stroke="#151817" strokeWidth="1" />
        <line x1="4" y1="6" x2="32" y2="34" stroke="#151817" strokeWidth="0.5" strokeOpacity="0.6" />
        <line x1="32" y1="6" x2="4" y2="34" stroke="#151817" strokeWidth="0.5" strokeOpacity="0.6" />
        <circle cx="30" cy="38" r="2" fill="#B09A69" stroke="#151817" strokeWidth="0.8" />
      </g>
    </g>
  );
};
