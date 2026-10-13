import React from 'react';
import type { PerspectiveFilter } from '../types';

interface BasementInfrastructureProps {
  selectedPerspective?: PerspectiveFilter;
}

export const BasementInfrastructure: React.FC<BasementInfrastructureProps> = ({ selectedPerspective = 'ALL' }) => {
  const isPlantSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'PLANT';
  const isHumanSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'HUMAN';
  const isInfraSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'INFRASTRUCTURE';

  return (
    <g id="basement-sardapi">
      {/* Subterranean Damp Masonry Foundation Vault (Darkest Level) */}
      <rect x="180" y="660" width="650" height="110" fill="#202523" fillOpacity="0.95" />
      <rect x="180" y="660" width="650" height="110" fill="url(#weathered-brick)" opacity="0.55" />

      {/* Moisture & Damp Condensation Patina across Foundation Wall */}
      <rect x="180" y="720" width="650" height="50" fill="url(#moss-patina)" opacity="0.75" />

      {/* Heavy Structural Arch Foundation Columns */}
      <g id="basement-piers" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        <rect x="340" y="660" width="22" height="110" fill="#303632" stroke="#1A201D" strokeWidth="1.4" />
        <rect x="520" y="660" width="22" height="110" fill="#303632" stroke="#1A201D" strokeWidth="1.4" />
        <rect x="680" y="660" width="22" height="110" fill="#303632" stroke="#1A201D" strokeWidth="1.4" />
        {/* Foundation Arch Springings */}
        <path d="M 340,680 Q 430,668 520,680" fill="none" stroke="#1A201D" strokeWidth="1.6" />
        <path d="M 520,680 Q 600,668 680,680" fill="none" stroke="#1A201D" strokeWidth="1.6" />
      </g>

      {/* District Heating Arteries (Main Central Supply & Return Pipes) */}
      <g id="district-heating-pipes" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Heavy Upper Supply Pipe (Insulated with fiber/canvas lagging) */}
        <rect x="180" y="678" width="650" height="12" fill="#4A4338" stroke="#1C1814" strokeWidth="1.2" />
        {/* Lagging Wire Ties along pipe */}
        {[200, 240, 280, 320, 370, 420, 470, 510, 560, 610, 660, 710, 760, 800].map((px) => (
          <line key={px} x1={px} y1="677" x2={px} y2="691" stroke="#1C1814" strokeWidth="1" />
        ))}
        {/* Rust & thermal wear on pipe */}
        <rect x="250" y="679" width="35" height="10" fill="url(#rust-metal)" opacity="0.85" />
        <rect x="580" y="679" width="45" height="10" fill="url(#rust-metal)" opacity="0.85" />

        {/* Lower Return Water Pipe */}
        <rect x="180" y="696" width="650" height="9" fill="#8E473A" stroke="#261411" strokeWidth="1" />
        {[220, 260, 300, 390, 450, 540, 630, 730, 790].map((px) => (
          <line key={px} x1={px} y1="695" x2={px} y2="706" stroke="#261411" strokeWidth="0.8" />
        ))}

        {/* Massive Cast-Iron Gate Valves with Handwheels */}
        {/* Valve 1 with water droplet drip animation */}
        <g transform="translate(300, 672)">
          <rect x="0" y="0" width="14" height="24" fill="#633229" stroke="#151817" strokeWidth="1" />
          {/* Wheel shaft */}
          <line x1="7" y1="0" x2="7" y2="-8" stroke="#151817" strokeWidth="2" />
          {/* Cast iron red wheel */}
          <ellipse cx="7" cy="-8" rx="10" ry="3.5" fill="#B55B49" stroke="#151817" strokeWidth="1.2" />
          <circle cx="7" cy="-8" r="1.5" fill="#151817" />

          {/* Catchment tin pan on ground catching slow condensation */}
          <g transform="translate(7, 72)">
            <ellipse cx="0" cy="0" rx="9" ry="3" fill="#252C28" stroke="#151817" strokeWidth="0.8" />
            <ellipse cx="0" cy="0" rx="7" ry="2.2" fill="#46544C" opacity="0.5" />
            <circle cx="0" cy="0" r="2.5" fill="none" stroke="#E6E5DC" strokeWidth="0.6" opacity="0.5" />
          </g>
        </g>

        {/* Valve 2 */}
        <g transform="translate(630, 690)">
          <rect x="0" y="0" width="12" height="20" fill="#633229" stroke="#151817" strokeWidth="1" />
          <line x1="6" y1="0" x2="6" y2="-6" stroke="#151817" strokeWidth="2" />
          <ellipse cx="6" cy="-6" rx="8" ry="3" fill="#B55B49" stroke="#151817" strokeWidth="1" />
        </g>

        {/* Branching Risers penetrating upward to floors */}
        <line x1="435" y1="678" x2="435" y2="660" stroke="#8E473A" strokeWidth="3" />
        <line x1="680" y1="678" x2="680" y2="660" stroke="#8E473A" strokeWidth="3" />
      </g>

      {/* Domestic Water Manifold & Dial Meters + Electrical Indicator Box */}
      <g id="water-meters" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
        <line x1="205" y1="720" x2="245" y2="720" stroke="#7C4339" strokeWidth="3" />
        <circle cx="215" cy="720" r="4.5" fill="#6B736C" stroke="#151817" strokeWidth="1" />
        <circle cx="235" cy="720" r="4.5" fill="#6B736C" stroke="#151817" strokeWidth="1" />
        {/* Dial hands */}
        <line x1="215" y1="720" x2="217" y2="718" stroke="#B55B49" strokeWidth="0.8" />
        <line x1="235" y1="720" x2="233" y2="718" stroke="#B55B49" strokeWidth="0.8" />

        {/* Cast-Iron Utility Fusebox with Pulsing Indicator Light */}
        <g transform="translate(205, 688)">
          <rect x="0" y="0" width="16" height="18" fill="#303834" stroke="#151817" strokeWidth="1" rx="1.5" />
          <line x1="8" y1="0" x2="8" y2="-10" stroke="#151817" strokeWidth="1.2" />
          {/* Pulsing indicator light (faded Soviet green / amber) */}
          <circle cx="8" cy="9" r="2.2" fill="#889885" className="animate-indicator-glow" />
          <circle cx="8" cy="9" r="4" fill="#889885" opacity="0.4" className="animate-indicator-glow" />
        </g>
      </g>

      {/* Wooden Slatted Storage Stall (Sardapi Pantry: x=375 to 505) */}
      <g id="storage-stall" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Timber partition framing */}
        <rect x="375" y="708" width="130" height="62" fill="#1E2320" fillOpacity="0.4" />
        {/* Slatted wood planks with gaps */}
        {[375, 395, 415, 435, 455, 475, 495].map((sx) => (
          <line key={sx} x1={sx} y1="708" x2={sx} y2="770" stroke="#5A4535" strokeWidth="1.6" />
        ))}
        {/* Horizontal shelves inside stall */}
        <line x1="375" y1="728" x2="505" y2="728" stroke="#483F30" strokeWidth="2.2" />
        <line x1="375" y1="748" x2="505" y2="748" stroke="#483F30" strokeWidth="2.2" />

        {/* Preserved Glass Jars (Jonjoli, Pickles, Ajika, Tomato paste) */}
        {/* Shelf 1 Jars */}
        <rect x="385" y="718" width="7" height="10" rx="1.5" fill="#586C4A" stroke="#151817" strokeWidth="0.6" />
        <rect x="395" y="716" width="8" height="12" rx="1.5" fill="#B54536" stroke="#151817" strokeWidth="0.6" />
        <rect x="406" y="718" width="7" height="10" rx="1.5" fill="#BD5E36" stroke="#151817" strokeWidth="0.6" />
        <rect x="416" y="717" width="8" height="11" rx="1.5" fill="#586C4A" stroke="#151817" strokeWidth="0.6" />
        <rect x="427" y="718" width="7" height="10" rx="1.5" fill="#687D5A" stroke="#151817" strokeWidth="0.6" />

        {/* Shelf 2 Jars & Demi-John of Homemade Wine */}
        <rect x="382" y="738" width="7" height="10" rx="1.5" fill="#BD5E36" stroke="#151817" strokeWidth="0.6" />
        <rect x="392" y="737" width="8" height="11" rx="1.5" fill="#586C4A" stroke="#151817" strokeWidth="0.6" />
        <rect x="403" y="738" width="7" height="10" rx="1.5" fill="#B54536" stroke="#151817" strokeWidth="0.6" />
        {/* Large glass demijohn (Damajana) wrapped in wicker */}
        <g transform="translate(425, 735)">
          <ellipse cx="6" cy="9" rx="7" ry="7" fill="#5E3630" stroke="#151817" strokeWidth="0.8" />
          <rect x="4" y="0" width="4" height="6" fill="#48524A" stroke="#151817" strokeWidth="0.6" />
          <line x1="6" y1="0" x2="6" y2="-2" stroke="#8E473A" strokeWidth="1" />
        </g>

        {/* Iron Padlock on Stall Latch */}
        <circle cx="500" cy="738" r="2.5" fill="#7D8780" stroke="#151817" strokeWidth="0.6" />
      </g>

      {/* Vintage Soviet Bicycle Leaning in Corridor (x=550 to 595) */}
      <g id="basement-bicycle" opacity="0.9" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Wheels */}
        <circle cx="560" cy="752" r="12" fill="none" stroke="#5E6660" strokeWidth="1.2" />
        <circle cx="590" cy="752" r="12" fill="none" stroke="#5E6660" strokeWidth="1.2" />
        {/* Spokes */}
        <line x1="560" y1="740" x2="560" y2="764" stroke="#4E5650" strokeWidth="0.6" />
        <line x1="548" y1="752" x2="572" y2="752" stroke="#4E5650" strokeWidth="0.6" />
        <line x1="590" y1="740" x2="590" y2="764" stroke="#4E5650" strokeWidth="0.6" />
        <line x1="578" y1="752" x2="602" y2="752" stroke="#4E5650" strokeWidth="0.6" />
        {/* Diamond Frame */}
        <line x1="560" y1="752" x2="573" y2="738" stroke="#6E493E" strokeWidth="1.5" />
        <line x1="573" y1="738" x2="590" y2="752" stroke="#6E493E" strokeWidth="1.5" />
        <line x1="560" y1="752" x2="576" y2="752" stroke="#6E493E" strokeWidth="1.5" />
        <line x1="576" y1="752" x2="573" y2="738" stroke="#6E493E" strokeWidth="1.5" />
        {/* Handlebars & Seat */}
        <line x1="585" y1="735" x2="588" y2="730" stroke="#151817" strokeWidth="1.5" />
        <ellipse cx="570" cy="736" rx="3.5" ry="1.5" fill="#151817" />
      </g>

      {/* Multispecies Flora: Subterranean Cave Moss & Damp Lichen */}
      <g className={`basement-flora perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
        {/* Moss colonies hugging bottom floor and pipe joints */}
        <path
          d="M 185,768 Q 200,760 215,768 Q 235,762 250,770 Z"
          fill="#3F503C"
          stroke="#1F261D"
          strokeWidth="0.6"
        />
        <path
          d="M 330,769 Q 345,762 360,769 Z"
          fill="#3F503C"
          stroke="#1F261D"
          strokeWidth="0.6"
        />
        <path
          d="M 515,769 Q 530,762 545,769 Z"
          fill="#3F503C"
          stroke="#1F261D"
          strokeWidth="0.6"
        />
        <path
          d="M 700,768 Q 720,760 740,769 Q 755,763 770,770 Z"
          fill="#4A5C46"
          stroke="#1F261D"
          strokeWidth="0.6"
        />
        {/* Delicate damp maidenhair fern sprouting from foundation mortar */}
        <path d="M 688,745 Q 682,740 684,735" fill="none" stroke="#5C6B58" strokeWidth="1" />
        <circle cx="683" cy="736" r="1.5" fill="#687864" />
        <circle cx="685" cy="733" r="1.5" fill="#687864" />
      </g>
    </g>
  );
};
