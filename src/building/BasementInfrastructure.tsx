import React from 'react';

export const BasementInfrastructure: React.FC = () => {
  return (
    <g id="basement-sardapi">
      {/* Subterranean Damp Masonry Foundation Vault */}
      <rect x="180" y="660" width="650" height="110" fill="#262B29" fillOpacity="0.88" />
      <rect x="180" y="660" width="650" height="110" fill="url(#weathered-brick)" opacity="0.3" />

      {/* Moisture & Damp Condensation Patina across Foundation Wall */}
      <rect x="180" y="720" width="650" height="50" fill="url(#moss-patina)" opacity="0.6" />

      {/* Heavy Structural Arch Foundation Columns */}
      <g id="basement-piers">
        <rect x="340" y="660" width="22" height="110" fill="#343B37" stroke="#262B29" strokeWidth="1.2" />
        <rect x="520" y="660" width="22" height="110" fill="#343B37" stroke="#262B29" strokeWidth="1.2" />
        <rect x="680" y="660" width="22" height="110" fill="#343B37" stroke="#262B29" strokeWidth="1.2" />
        {/* Foundation Arch Springings */}
        <path d="M 340,680 Q 430,668 520,680" fill="none" stroke="#262B29" strokeWidth="1.5" />
        <path d="M 520,680 Q 600,668 680,680" fill="none" stroke="#262B29" strokeWidth="1.5" />
      </g>

      {/* District Heating Arteries (Main Central Supply & Return Pipes) */}
      <g id="district-heating-pipes">
        {/* Heavy Upper Supply Pipe (Insulated with fiber/canvas lagging) */}
        <rect x="180" y="678" width="650" height="12" fill="#AA9C86" stroke="#262B29" strokeWidth="1.2" />
        {/* Lagging Wire Ties along pipe */}
        {[200, 240, 280, 320, 370, 420, 470, 510, 560, 610, 660, 710, 760, 800].map((px) => (
          <line key={px} x1={px} y1="677" x2={px} y2="691" stroke="#262B29" strokeWidth="1" />
        ))}
        {/* Rust & thermal wear on pipe */}
        <rect x="250" y="679" width="35" height="10" fill="url(#rust-metal)" opacity="0.8" />
        <rect x="580" y="679" width="45" height="10" fill="url(#rust-metal)" opacity="0.8" />

        {/* Lower Return Water Pipe */}
        <rect x="180" y="696" width="650" height="9" fill="#965D45" stroke="#262B29" strokeWidth="1" />
        {[220, 260, 300, 390, 450, 540, 630, 730, 790].map((px) => (
          <line key={px} x1={px} y1="695" x2={px} y2="706" stroke="#262B29" strokeWidth="0.8" />
        ))}

        {/* Massive Cast-Iron Gate Valves with Handwheels */}
        {/* Valve 1 */}
        <g transform="translate(300, 672)">
          <rect x="0" y="0" width="14" height="24" fill="#7D4732" stroke="#262B29" strokeWidth="1" />
          {/* Wheel shaft */}
          <line x1="7" y1="0" x2="7" y2="-8" stroke="#262B29" strokeWidth="2" />
          {/* Cast iron red wheel */}
          <ellipse cx="7" cy="-8" rx="10" ry="3.5" fill="#965D45" stroke="#262B29" strokeWidth="1.2" />
          <circle cx="7" cy="-8" r="1.5" fill="#262B29" />
        </g>
        {/* Valve 2 */}
        <g transform="translate(630, 690)">
          <rect x="0" y="0" width="12" height="20" fill="#7D4732" stroke="#262B29" strokeWidth="1" />
          <line x1="6" y1="0" x2="6" y2="-6" stroke="#262B29" strokeWidth="2" />
          <ellipse cx="6" cy="-6" rx="8" ry="3" fill="#965D45" stroke="#262B29" strokeWidth="1" />
        </g>

        {/* Branching Risers penetrating upward to floors */}
        <line x1="435" y1="678" x2="435" y2="660" stroke="#7D4732" strokeWidth="3" />
        <line x1="680" y1="678" x2="680" y2="660" stroke="#7D4732" strokeWidth="3" />
      </g>

      {/* Domestic Water Manifold & Dial Meters (x=205 to 250, y=715 to 740) */}
      <g id="water-meters">
        <line x1="205" y1="720" x2="245" y2="720" stroke="#AF7359" strokeWidth="3" />
        <circle cx="215" cy="720" r="4.5" fill="#C4B7A2" stroke="#262B29" strokeWidth="1" />
        <circle cx="235" cy="720" r="4.5" fill="#C4B7A2" stroke="#262B29" strokeWidth="1" />
        {/* Dial hands */}
        <line x1="215" y1="720" x2="217" y2="718" stroke="#965D45" strokeWidth="0.8" />
        <line x1="235" y1="720" x2="233" y2="718" stroke="#965D45" strokeWidth="0.8" />
      </g>

      {/* Wooden Slatted Storage Stall (Sardapi Pantry: x=375 to 505) */}
      <g id="storage-stall">
        {/* Timber partition framing */}
        <rect x="375" y="708" width="130" height="62" fill="#343B37" fillOpacity="0.4" />
        {/* Slatted wood planks with gaps */}
        {[375, 395, 415, 435, 455, 475, 495].map((sx) => (
          <line key={sx} x1={sx} y1="708" x2={sx} y2="770" stroke="#7D4732" strokeWidth="1.5" />
        ))}
        {/* Horizontal shelves inside stall */}
        <line x1="375" y1="728" x2="505" y2="728" stroke="#AA9C86" strokeWidth="2" />
        <line x1="375" y1="748" x2="505" y2="748" stroke="#AA9C86" strokeWidth="2" />

        {/* Preserved Glass Jars (Jonjoli, Pickles, Ajika, Tomato paste) */}
        {/* Shelf 1 Jars */}
        <rect x="385" y="718" width="7" height="10" rx="1.5" fill="#74826A" stroke="#262B29" strokeWidth="0.6" />
        <rect x="395" y="716" width="8" height="12" rx="1.5" fill="#AF7359" stroke="#262B29" strokeWidth="0.6" />
        <rect x="406" y="718" width="7" height="10" rx="1.5" fill="#965D45" stroke="#262B29" strokeWidth="0.6" />
        <rect x="416" y="717" width="8" height="11" rx="1.5" fill="#74826A" stroke="#262B29" strokeWidth="0.6" />
        <rect x="427" y="718" width="7" height="10" rx="1.5" fill="#8A997F" stroke="#262B29" strokeWidth="0.6" />

        {/* Shelf 2 Jars & Demi-John of Homemade Wine */}
        <rect x="382" y="738" width="7" height="10" rx="1.5" fill="#965D45" stroke="#262B29" strokeWidth="0.6" />
        <rect x="392" y="737" width="8" height="11" rx="1.5" fill="#74826A" stroke="#262B29" strokeWidth="0.6" />
        <rect x="403" y="738" width="7" height="10" rx="1.5" fill="#AF7359" stroke="#262B29" strokeWidth="0.6" />
        {/* Large glass demijohn (Damajana) wrapped in wicker */}
        <g transform="translate(425, 735)">
          <ellipse cx="6" cy="9" rx="7" ry="7" fill="#7D4732" stroke="#262B29" strokeWidth="0.8" />
          <rect x="4" y="0" width="4" height="6" fill="#AA9C86" stroke="#262B29" strokeWidth="0.6" />
          <line x1="6" y1="0" x2="6" y2="-2" stroke="#AF7359" strokeWidth="1" />
        </g>

        {/* Iron Padlock on Stall Latch */}
        <circle cx="500" cy="738" r="2.5" fill="#C4B7A2" stroke="#262B29" strokeWidth="0.6" />
      </g>

      {/* Vintage Soviet Bicycle Leaning in Corridor (x=550 to 595) */}
      <g id="basement-bicycle" opacity="0.85">
        {/* Wheels */}
        <circle cx="560" cy="752" r="12" fill="none" stroke="#AA9C86" strokeWidth="1.2" />
        <circle cx="590" cy="752" r="12" fill="none" stroke="#AA9C86" strokeWidth="1.2" />
        {/* Spokes */}
        <line x1="560" y1="740" x2="560" y2="764" stroke="#AA9C86" strokeWidth="0.6" />
        <line x1="548" y1="752" x2="572" y2="752" stroke="#AA9C86" strokeWidth="0.6" />
        <line x1="590" y1="740" x2="590" y2="764" stroke="#AA9C86" strokeWidth="0.6" />
        <line x1="578" y1="752" x2="602" y2="752" stroke="#AA9C86" strokeWidth="0.6" />
        {/* Diamond Frame */}
        <line x1="560" y1="752" x2="573" y2="738" stroke="#7D4732" strokeWidth="1.5" />
        <line x1="573" y1="738" x2="590" y2="752" stroke="#7D4732" strokeWidth="1.5" />
        <line x1="560" y1="752" x2="576" y2="752" stroke="#7D4732" strokeWidth="1.5" />
        <line x1="576" y1="752" x2="573" y2="738" stroke="#7D4732" strokeWidth="1.5" />
        {/* Handlebars & Seat */}
        <line x1="585" y1="735" x2="588" y2="730" stroke="#262B29" strokeWidth="1.5" />
        <ellipse cx="570" cy="736" rx="3.5" ry="1.5" fill="#262B29" />
      </g>

      {/* Multispecies Flora: Subterranean Cave Moss & Damp Lichen */}
      <g className="basement-flora">
        {/* Moss colonies hugging bottom floor and pipe joints */}
        <path
          d="M 185,768 Q 200,760 215,768 Q 235,762 250,770 Z"
          fill="#586450"
          stroke="#343B37"
          strokeWidth="0.6"
        />
        <path
          d="M 515,769 Q 530,762 545,769 Z"
          fill="#586450"
          stroke="#343B37"
          strokeWidth="0.6"
        />
        <path
          d="M 700,768 Q 720,760 740,769 Q 755,763 770,770 Z"
          fill="#74826A"
          stroke="#586450"
          strokeWidth="0.6"
        />
        {/* Delicate damp maidenhair fern sprouting from foundation mortar */}
        <path d="M 688,745 Q 682,740 684,735" fill="none" stroke="#74826A" strokeWidth="1" />
        <circle cx="683" cy="736" r="1.5" fill="#8A997F" />
        <circle cx="685" cy="733" r="1.5" fill="#8A997F" />
      </g>
    </g>
  );
};
