import React from 'react';

export const CourtyardSection: React.FC = () => {
  return (
    <g id="courtyard-tbilisi-yard">
      {/* Ground Surface: Permeable Flagstones & Cracked Bitumen (y=660 to 770) */}
      <rect x="10" y="660" width="170" height="110" fill="#AA9C86" fillOpacity="0.45" />
      <line x1="10" y1="660" x2="180" y2="660" stroke="#262B29" strokeWidth="2" />
      
      {/* Flagstone paving cracks and weeds */}
      <g opacity="0.6">
        <line x1="30" y1="660" x2="45" y2="675" stroke="#343B37" strokeWidth="0.8" />
        <line x1="45" y1="675" x2="70" y2="672" stroke="#343B37" strokeWidth="0.8" />
        <line x1="90" y1="660" x2="110" y2="678" stroke="#343B37" strokeWidth="0.8" />
        <line x1="130" y1="662" x2="145" y2="685" stroke="#343B37" strokeWidth="0.8" />
      </g>

      {/* Traditional Metal Grape Arbor Trellis Structure (Talavari) */}
      <g id="talavari-trellis">
        {/* Steel Pipe Uprights */}
        <line x1="30" y1="660" x2="30" y2="560" stroke="#262B29" strokeWidth="2" />
        <line x1="110" y1="660" x2="110" y2="560" stroke="#262B29" strokeWidth="2" />
        {/* Overhead Horizontal Canopy Beams & Wire Mesh */}
        <line x1="20" y1="560" x2="180" y2="560" stroke="#262B29" strokeWidth="2.2" />
        <line x1="20" y1="575" x2="180" y2="575" stroke="#343B37" strokeWidth="1" strokeDasharray="4,3" />
        <line x1="20" y1="590" x2="180" y2="590" stroke="#343B37" strokeWidth="1" strokeDasharray="4,3" />
        {/* Diagonal Trellis Bracing */}
        <line x1="30" y1="580" x2="50" y2="560" stroke="#262B29" strokeWidth="1.2" />
        <line x1="110" y1="580" x2="90" y2="560" stroke="#262B29" strokeWidth="1.2" />

        {/* Lush Grapevine Tendrils & Clusters Hanging from Arbor */}
        <g className="talavari-canopy">
          {/* Main Vine Trunk climbing the upright */}
          <path d="M 30,660 Q 32,620 28,590 Q 31,570 35,560" fill="none" stroke="#7D4732" strokeWidth="3" />
          <path d="M 35,560 Q 70,555 110,558 Q 145,555 180,562" fill="none" stroke="#7D4732" strokeWidth="2.5" />

          {/* Cascading Grape Foliage */}
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
              fill={idx % 2 === 0 ? "#74826A" : "#8A997F"}
              stroke="#586450"
              strokeWidth="0.8"
            />
          ))}

          {/* Hanging Purple-Black Grape Clusters */}
          {[
            { x: 55, y: 574 },
            { x: 90, y: 572 },
            { x: 135, y: 575 },
          ].map((cluster, i) => (
            <g key={i} transform={`translate(${cluster.x}, ${cluster.y})`}>
              <circle cx="0" cy="0" r="2.2" fill="#343B37" />
              <circle cx="4" cy="0" r="2.2" fill="#343B37" />
              <circle cx="2" cy="4" r="2.2" fill="#7D4732" />
              <circle cx="2" cy="7.5" r="1.8" fill="#343B37" />
            </g>
          ))}
        </g>
      </g>

      {/* Mature Tbilisi Fig Tree (Ficus carica) on Far Left (x=10 to 60) */}
      <g id="fig-tree">
        {/* Sculptural twisting trunk */}
        <path
          d="M 12,660 Q 18,630 15,605 Q 12,580 20,555"
          fill="none"
          stroke="# AA9C86"
          strokeWidth="6"
        />
        <path
          d="M 15,605 Q 28,590 35,570"
          fill="none"
          stroke="#AA9C86"
          strokeWidth="4"
        />
        {/* Characteristic broad lobed fig leaves */}
        <path d="M 18,552 Q 10,540 16,532 Q 26,538 22,550" fill="#74826A" stroke="#586450" strokeWidth="0.8" />
        <path d="M 24,555 Q 35,545 42,550 Q 38,562 26,558" fill="#8A997F" stroke="#586450" strokeWidth="0.8" />
        <path d="M 33,568 Q 45,560 50,568 Q 42,578 34,572" fill="#74826A" stroke="#586450" strokeWidth="0.8" />
      </g>

      {/* Weathered Wooden Courtyard Bench (Dominoes & Neighbor Gathering) */}
      <g id="courtyard-bench" transform="translate(60, 638)">
        {/* Cast-iron bench sides */}
        <path d="M 0,22 L 4,0 L 44,0 L 48,22" fill="none" stroke="#262B29" strokeWidth="1.8" />
        <line x1="0" y1="22" x2="8" y2="12" stroke="#262B29" strokeWidth="1.5" />
        <line x1="48" y1="22" x2="40" y2="12" stroke="#262B29" strokeWidth="1.5" />
        {/* Slatted Pine Wood Seat & Backrest */}
        <rect x="2" y="-6" width="44" height="4" fill="#AF7359" stroke="#7D4732" strokeWidth="0.8" />
        <rect x="2" y="-1" width="44" height="4" fill="#AF7359" stroke="#7D4732" strokeWidth="0.8" />
        <rect x="2" y="8" width="44" height="4" fill="#AF7359" stroke="#7D4732" strokeWidth="0.8" />
        <rect x="2" y="13" width="44" height="4" fill="#AF7359" stroke="#7D4732" strokeWidth="0.8" />
      </g>

      {/* MULTISPECIES HIGHLIGHT: Community Street Dog ("Buba") */}
      <g id="community-dog-buba" transform="translate(125, 652)">
        {/* Burlap Sack Mat */}
        <ellipse cx="0" cy="8" rx="18" ry="4" fill="#C4B7A2" stroke="#AA9C86" strokeWidth="0.8" />
        
        {/* Sleeping Dog Body (Warm sandy/fawn coat) */}
        <ellipse cx="0" cy="3" rx="13" ry="6.5" fill="#C4B7A2" stroke="#AA9C86" strokeWidth="1" />
        {/* Folded Paws */}
        <ellipse cx="-8" cy="8" rx="3.5" ry="1.8" fill="#AA9C86" />
        <ellipse cx="5" cy="8" rx="3.5" ry="1.8" fill="#AA9C86" />
        {/* Head Resting on Paws */}
        <ellipse cx="11" cy="4" rx="5" ry="4" fill="#C4B7A2" stroke="#AA9C86" strokeWidth="0.8" />
        {/* Snout & Black Nose */}
        <ellipse cx="15" cy="5" rx="2.5" ry="2" fill="#AA9C86" />
        <circle cx="16.5" cy="4.5" r="1" fill="#262B29" />
        {/* Floppy Ear */}
        <polygon points="9,2 7,7 11,6" fill="#965D45" />
        {/* Tbilisi Yellow Vaccination Ear Tag */}
        <circle cx="8" cy="4" r="1.5" fill="#965D45" stroke="#262B29" strokeWidth="0.4" />
        {/* Tail curled peacefully */}
        <path d="M -12,2 Q -16,4 -15,7" fill="none" stroke="#C4B7A2" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Courtyard Drinking Fountain / Tap (Fonte / ეზოს ონკანი) */}
      <g id="courtyard-water-fountain" transform="translate(162, 630)">
        {/* Vertical Stone Plinth */}
        <rect x="0" y="0" width="12" height="30" fill="#AA9C86" stroke="#262B29" strokeWidth="1" />
        {/* Brass Curved Tap */}
        <path d="M 0,10 L -5,10 L -5,13" fill="none" stroke="#965D45" strokeWidth="1.8" />
        <circle cx="-5" cy="7" r="1.2" fill="#7D4732" />
        {/* Water drip drop */}
        <circle cx="-5" cy="18" r="0.8" fill="#F7F3EB" opacity="0.8" />
        {/* Stone basin catching water */}
        <rect x="-9" y="26" width="10" height="4" fill="#343B37" stroke="#262B29" strokeWidth="0.8" />
        {/* Moist green moss around fountain base */}
        <path d="M -12,30 Q -6,27 0,30" fill="none" stroke="#74826A" strokeWidth="1.5" />
      </g>
    </g>
  );
};
