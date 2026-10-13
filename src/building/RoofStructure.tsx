import React from 'react';
import type { PerspectiveFilter } from '../types';

interface RoofStructureProps {
  selectedPerspective?: PerspectiveFilter;
}

export const RoofStructure: React.FC<RoofStructureProps> = ({ selectedPerspective = 'ALL' }) => {
  const isAnimalSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'ANIMAL';
  const isPlantSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'PLANT';
  const isInfraSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'INFRASTRUCTURE';

  return (
    <g id="roof-structure">
      {/* Bitumen Flat Roof Slab Surface */}
      <rect x="180" y="148" width="650" height="12" fill="#1C201E" stroke="#101312" strokeWidth="1.2" />
      
      {/* Bitumen Felt Layer & Puddle Stains */}
      <ellipse cx="380" cy="151" rx="45" ry="3.5" fill="#121514" fillOpacity="0.6" />
      <ellipse cx="610" cy="152" rx="30" ry="2.5" fill="#121514" fillOpacity="0.5" />

      {/* Left Concrete Parapet Cap */}
      <rect x="175" y="125" width="22" height="25" fill="#484E49" stroke="#151817" strokeWidth="1.5" />
      <polygon points="173,125 199,125 197,122 175,122" fill="#383E3A" stroke="#151817" strokeWidth="1" />
      
      {/* Right Concrete Parapet Cap */}
      <rect x="820" y="125" width="22" height="25" fill="#484E49" stroke="#151817" strokeWidth="1.5" />
      <polygon points="818,125 844,125 842,122 820,122" fill="#383E3A" stroke="#151817" strokeWidth="1" />

      {/* Rooftop Moss, Parietaria Wild Flora & Chimney Sprouts */}
      <g id="roof-vegetation" className={`rooftop-flora perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Left gutter moss */}
        <path
          d="M 197,148 Q 205,142 215,147 Q 222,143 230,148 Z"
          fill="#4D584A"
          stroke="#343C32"
          strokeWidth="0.8"
        />
        {/* Parietaria leaves sprouting from mortar gap */}
        <path d="M 203,143 Q 198,136 200,131 Q 206,134 204,142" fill="#556251" stroke="#222725" strokeWidth="0.6" />
        <path d="M 206,144 Q 212,138 217,141 Q 213,146 207,145" fill="#4D584A" stroke="#222725" strokeWidth="0.6" />
        
        {/* Right parapet weed clump */}
        <path
          d="M 805,148 Q 812,143 820,148 Z"
          fill="#4D584A"
          stroke="#343C32"
          strokeWidth="0.8"
        />
        <path d="M 810,147 Q 806,138 812,133 Q 815,140 812,147" fill="#556251" stroke="#222725" strokeWidth="0.6" />

        {/* Small resilient plant growing near chimney stack 2 */}
        <g id="chimney-sprout" transform="translate(638, 114)">
          <path d="M 0,0 Q -4,-8 0,-12 Q 2,-7 0,0" fill="#4D584A" stroke="#222725" strokeWidth="0.5" />
          <path d="M 1,0 Q 6,-6 4,-10 Q 0,-6 1,0" fill="#556251" stroke="#222725" strokeWidth="0.5" />
          {/* Delicate wild flower head */}
          <circle cx="0" cy="-13" r="1.5" fill="#939B92" stroke="#A35243" strokeWidth="0.4" />
        </g>
      </g>

      {/* Ventilation Chimney Stacks (Galvanized Zinc / Brick) */}
      <g id="chimney-systems" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Stack 1 (Left) */}
        <g id="chimney-stack-1">
          <rect x="320" y="105" width="38" height="45" fill="#444A45" stroke="#151817" strokeWidth="1.2" />
          <rect x="322" y="107" width="34" height="20" fill="url(#weathered-brick)" />
          {/* Metal cowl / rain cap */}
          <polygon points="316,105 362,105 356,98 322,98" fill="#353B37" stroke="#151817" strokeWidth="1.2" />
          {/* Flue vent opening */}
          <rect x="327" y="112" width="24" height="4" fill="#151817" rx="1" />
          
          {/* Rising subtle steam / kitchen chimney air */}
          <g className="animate-steam">
            <circle cx="339" cy="93" r="3.5" fill="#555B56" opacity="0.25" />
            <circle cx="343" cy="85" r="5" fill="#6B726C" opacity="0.18" />
            <circle cx="338" cy="76" r="6" fill="#6B726C" opacity="0.12" />
          </g>
        </g>

        {/* Stack 2 (Center-Right Updraft Vent) */}
        <g id="chimney-stack-2">
          <rect x="640" y="112" width="28" height="38" fill="#444A45" stroke="#151817" strokeWidth="1.2" />
          <polygon points="636,112 672,112 668,107 640,107" fill="#632D24" stroke="#151817" strokeWidth="1" />
          <line x1="645" y1="120" x2="663" y2="120" stroke="#151817" strokeWidth="1" />
          <line x1="645" y1="125" x2="663" y2="125" stroke="#151817" strokeWidth="1" />
          <line x1="645" y1="130" x2="663" y2="130" stroke="#151817" strokeWidth="1" />
        </g>

        {/* Soviet-Era Rusted Emergency Water Header Tank on Stilt Legs */}
        <g id="water-tank" opacity="0.95">
          {/* Steel Angle Legs */}
          <line x1="435" y1="148" x2="445" y2="115" stroke="#1E2320" strokeWidth="1.8" />
          <line x1="485" y1="148" x2="475" y2="115" stroke="#1E2320" strokeWidth="1.8" />
          <line x1="440" y1="132" x2="480" y2="132" stroke="#1E2320" strokeWidth="1" />
          {/* Cylindrical tank with rust gradient */}
          <rect x="430" y="85" width="60" height="32" rx="4" fill="url(#rust-metal)" stroke="#151817" strokeWidth="1.5" />
          {/* Metal bands around tank */}
          <line x1="430" y1="92" x2="490" y2="92" stroke="#151817" strokeWidth="1.2" />
          <line x1="430" y1="108" x2="490" y2="108" stroke="#151817" strokeWidth="1.2" />
          {/* Inspection hatch & pipe connection */}
          <circle cx="460" cy="85" r="4" fill="#632D24" stroke="#151817" strokeWidth="1" />
          <line x1="440" y1="117" x2="440" y2="148" stroke="#A35243" strokeWidth="1.5" />
        </g>
      </g>

      {/* Soviet Television Antenna Masts & Guy Wires */}
      <g id="antenna-forest" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Main Tall Central Antenna Mast */}
        <g id="antenna-main-mast">
          <line x1="560" y1="148" x2="560" y2="52" stroke="#222724" strokeWidth="2" />
          {/* Horizontal Dipoles */}
          <line x1="535" y1="62" x2="585" y2="62" stroke="#222724" strokeWidth="1.2" />
          <line x1="542" y1="72" x2="578" y2="72" stroke="#222724" strokeWidth="1.2" />
          <line x1="548" y1="84" x2="572" y2="84" stroke="#222724" strokeWidth="1" />
        </g>

        {/* Diagonal Guy Wires securing the mast */}
        <line x1="560" y1="70" x2="505" y2="148" stroke="#3D4540" strokeWidth="0.75" strokeDasharray="3,2" />
        <line x1="560" y1="70" x2="620" y2="148" stroke="#3D4540" strokeWidth="0.75" strokeDasharray="3,2" />

        {/* Secondary Shorter Yagi Antenna */}
        <line x1="260" y1="148" x2="260" y2="88" stroke="#222724" strokeWidth="1.5" />
        <line x1="245" y1="96" x2="275" y2="96" stroke="#222724" strokeWidth="1" />
        <line x1="248" y1="104" x2="272" y2="104" stroke="#222724" strokeWidth="1" />
        <line x1="252" y1="112" x2="268" y2="112" stroke="#222724" strokeWidth="1" />
        {/* Coaxial wire drooping from mast */}
        <path d="M 260,118 Q 280,140 310,148" fill="none" stroke="#2A302D" strokeWidth="0.8" />

        {/* Small Parabolic Satellite Dish */}
        <path
          d="M 740,148 L 748,125"
          stroke="#222724"
          strokeWidth="1.5"
        />
        <ellipse
          cx="752"
          cy="120"
          rx="12"
          ry="15"
          fill="#3D433F"
          stroke="#151817"
          strokeWidth="1.2"
          transform="rotate(25 752 120)"
        />
        <line x1="752" y1="120" x2="762" y2="116" stroke="#A35243" strokeWidth="1" />
      </g>

      {/* Fauna: Common Swifts, Feral Pigeons & Rooftop Nest */}
      <g id="rooftop-birds-fauna" className={`rooftop-birds perspective-transition ${isAnimalSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Small Bird Nest nestled between Stack 2 and vent equipment (Twigs & Grass) */}
        <g id="rooftop-bird-nest" transform="translate(668, 126)">
          {/* Intertwined twigs */}
          <path d="M 0,0 Q 8,8 16,0" fill="none" stroke="#52362E" strokeWidth="1.2" />
          <path d="M 2,2 Q 9,9 15,2" fill="none" stroke="#6B3B32" strokeWidth="1" />
          <path d="M -1,-1 Q 7,7 18,-2" fill="none" stroke="#222725" strokeWidth="0.8" />
          <path d="M 3,4 Q 8,7 13,3" fill="none" stroke="#8E7B50" strokeWidth="0.8" />
          {/* Subtle down feathers */}
          <ellipse cx="8" cy="2" rx="4" ry="2" fill="#D8D7CD" opacity="0.5" />
        </g>

        {/* Perched Pigeon on Chimney Stack 1 */}
        <g id="pigeon-chimney" transform="translate(345, 94)">
          <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#38403B" />
          <polygon points="-3,0 -7,1 -4,1.5" fill="#222725" />
          <path d="M -1,-1 Q 2,-2 1,1" fill="none" stroke="#222725" strokeWidth="0.6" />
          <circle cx="3.5" cy="-2" r="1.8" fill="#465044" />
          <polygon points="5,-2 7,-1.5 5,-1" fill="#A35243" />
          <circle cx="4" cy="-2.5" r="0.4" fill="#151817" />
        </g>

        {/* Second Perched Pigeon on Parapet */}
        <g id="pigeon-parapet" transform="translate(186, 120)">
          <ellipse cx="0" cy="0" rx="3.5" ry="2.2" fill="#465044" />
          <ellipse cx="-0.5" cy="-0.5" rx="3" ry="1.6" fill="#38403B" stroke="#222725" strokeWidth="0.4" />
          <circle cx="-3" cy="-1.8" r="1.6" fill="#222725" />
          <polygon points="-4,-1.8 -6,-1.4 -4.5,-1" fill="#A35243" />
        </g>

        {/* Swooping Swifts in the Aerial Sky (Apus apus) */}
        <g id="aerial-swift-1" transform="translate(585, 45)">
          <path
            d="M -14,-4 Q -5,2 0,0 Q 5,2 14,-4 Q 4,-1 0,-3 Q -4,-1 -14,-4 Z"
            fill="#1A1D1B"
          />
          <polygon points="-1,-3 0,-7 1,-3" fill="#1A1D1B" />
        </g>

        {/* Second Swift Gliding Higher */}
        <g id="aerial-swift-2" transform="translate(420, 35)">
          <path
            d="M -10,-3 Q -3,1.5 0,0 Q 3,1.5 10,-3 Q 3,-0.8 0,-2.5 Q -3,-0.8 -10,-3 Z"
            fill="#1A1D1B"
            opacity="0.85"
          />
        </g>
      </g>
    </g>
  );
};
