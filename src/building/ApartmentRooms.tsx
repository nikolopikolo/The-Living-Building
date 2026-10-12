import React from 'react';
import type { PerspectiveFilter } from '../types';

interface ApartmentRoomsProps {
  selectedPerspective?: PerspectiveFilter;
}

export const ApartmentRooms: React.FC<ApartmentRoomsProps> = ({ selectedPerspective = 'ALL' }) => {
  const isHumanSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'HUMAN';
  const isPlantSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'PLANT';
  const isAnimalSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'ANIMAL';
  const isInfraSubdued = selectedPerspective !== 'ALL' && selectedPerspective !== 'INFRASTRUCTURE';

  return (
    <g id="apartment-rooms">
      {/* ========================================================
          FLOOR 5 (y: 160 to 260) - Top Floor Atelier & Living
          ======================================================== */}
      <g id="floor-5-rooms">
        {/* Room 5A (Left Bay: x=195 to 435): Botanist & Architect Atelier */}
        <g id="room-5a" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          {/* Back wall plaster */}
          <rect x="195" y="160" width="240" height="100" fill="#E8E0D1" fillOpacity="0.8" />
          {/* Subtle herringbone parquet */}
          <rect x="195" y="248" width="240" height="12" fill="url(#herringbone-parquet)" />

          {/* Large Studio Window (x=205 to 260, y=175 to 240) */}
          <rect x="205" y="175" width="55" height="65" fill="#DDD4C3" fillOpacity="0.4" stroke="#343B37" strokeWidth="1.2" />
          <line x1="232" y1="175" x2="232" y2="240" stroke="#343B37" strokeWidth="1" />
          <line x1="205" y1="200" x2="260" y2="200" stroke="#343B37" strokeWidth="1" />
          {/* Window Sill with Potted Plants */}
          <rect x="202" y="238" width="61" height="3" fill="#AA9C86" stroke="#262B29" strokeWidth="0.8" />
          {/* Terracotta plant pots */}
          <g className={`perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
            <polygon points="210,238 218,238 217,231 211,231" fill="#965D45" stroke="#262B29" strokeWidth="0.6" />
            <path d="M 214,231 Q 210,224 214,220 Q 218,224 214,231" fill="#74826A" />
            <polygon points="224,238 232,238 231,230 225,230" fill="#965D45" stroke="#262B29" strokeWidth="0.6" />
            <circle cx="228" cy="227" r="3.5" fill="#8A997F" />
          </g>

          {/* Hanging Spider Plant (Chlorophytum) from ceiling */}
          <g className={`perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
            <line x1="285" y1="160" x2="285" y2="185" stroke="#343B37" strokeWidth="0.75" />
            <ellipse cx="285" cy="186" rx="6" ry="3" fill="#965D45" stroke="#262B29" strokeWidth="0.6" />
            <g className="animate-leaves">
              <path d="M 282,185 Q 272,192 268,205" fill="none" stroke="#74826A" strokeWidth="0.8" />
              <path d="M 285,185 Q 280,195 282,210" fill="none" stroke="#8A997F" strokeWidth="0.8" />
              <path d="M 288,185 Q 296,192 300,206" fill="none" stroke="#74826A" strokeWidth="0.8" />
            </g>
          </g>

          {/* Architectural Drafting Table / Easel (x=310 to 365) */}
          <line x1="320" y1="248" x2="335" y2="215" stroke="#262B29" strokeWidth="1.5" />
          <line x1="360" y1="248" x2="345" y2="215" stroke="#262B29" strokeWidth="1.5" />
          <line x1="324" y1="235" x2="356" y2="235" stroke="#262B29" strokeWidth="1" />
          {/* Tilted drawing board */}
          <line x1="315" y1="222" x2="368" y2="204" stroke="#AA9C86" strokeWidth="4" />
          {/* Blueprinted paper pinned */}
          <line x1="322" y1="220" x2="360" y2="206" stroke="#F3EDE1" strokeWidth="2.5" />
          <line x1="330" y1="216" x2="350" y2="209" stroke="#74826A" strokeWidth="1" strokeDasharray="2,1" />

          {/* Ceramic tea cup with steam on drafting desk */}
          <g transform="translate(364, 214)">
            <rect x="0" y="0" width="3.5" height="4" fill="#F7F3EB" stroke="#262B29" strokeWidth="0.5" rx="0.5" />
            <circle cx="2" cy="-3" r="1" fill="#E8E0D1" className="animate-steam" />
          </g>

          {/* Drafting Stool */}
          <line x1="380" y1="248" x2="380" y2="225" stroke="#262B29" strokeWidth="1.5" />
          <ellipse cx="380" cy="225" rx="6" ry="2" fill="#7D4732" stroke="#262B29" strokeWidth="0.8" />

          {/* Bookshelf & Herbarium folders on right wall (x=410 to 435) */}
          <rect x="412" y="180" width="22" height="68" fill="#AA9C86" stroke="#262B29" strokeWidth="1" />
          {[195, 210, 225, 240].map((sy) => (
            <line key={sy} x1="412" y1={sy} x2="434" y2={sy} stroke="#262B29" strokeWidth="0.8" />
          ))}
          {/* Books on shelves */}
          <rect x="414" y="182" width="4" height="12" fill="#965D45" />
          <rect x="419" y="184" width="3" height="10" fill="#74826A" />
          <rect x="423" y="181" width="5" height="13" fill="#343B37" />
          <rect x="414" y="197" width="5" height="12" fill="#586450" />
          <rect x="420" y="196" width="6" height="13" fill="#7D4732" />
        </g>

        {/* Room 5B (Center Bay: x=445 to 680): Upper Flat Living & Bedroom */}
        <g id="room-5b" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          <rect x="445" y="160" width="235" height="100" fill="#F3EDE1" fillOpacity="0.75" />
          <rect x="445" y="248" width="235" height="12" fill="url(#herringbone-parquet)" />

          {/* Wall Clock */}
          <circle cx="510" cy="180" r="7" fill="#F7F3EB" stroke="#262B29" strokeWidth="1" />
          <line x1="510" y1="180" x2="510" y2="176" stroke="#262B29" strokeWidth="0.8" />
          <line x1="510" y1="180" x2="514" y2="180" stroke="#262B29" strokeWidth="0.8" />

          {/* Bed with Quilt and Pillows (x=460 to 535) */}
          <rect x="460" y="228" width="70" height="20" fill="#DDD4C3" stroke="#262B29" strokeWidth="1" />
          <rect x="456" y="212" width="5" height="36" fill="#7D4732" stroke="#262B29" strokeWidth="1" />
          <ellipse cx="468" cy="226" rx="6" ry="3.5" fill="#F7F3EB" stroke="#C4B7A2" strokeWidth="0.8" />
          <rect x="475" y="228" width="55" height="20" fill="#74826A" fillOpacity="0.6" stroke="#586450" strokeWidth="0.8" />
          <line x1="485" y1="228" x2="485" y2="248" stroke="#F7F3EB" strokeWidth="0.6" strokeDasharray="2,2" />
          <line x1="505" y1="228" x2="505" y2="248" stroke="#F7F3EB" strokeWidth="0.6" strokeDasharray="2,2" />

          {/* Center Window with Curtains (x=565 to 625) */}
          <rect x="565" y="175" width="60" height="65" fill="#E8E0D1" stroke="#343B37" strokeWidth="1.2" />
          <line x1="595" y1="175" x2="595" y2="240" stroke="#343B37" strokeWidth="1" />
          <line x1="565" y1="205" x2="625" y2="205" stroke="#343B37" strokeWidth="0.8" />

          {/* Curtains with Gentle Breeze Animation */}
          <g className="animate-curtain">
            <path d="M 565,175 Q 575,205 570,240 L 565,240 Z" fill="#965D45" fillOpacity="0.8" />
            <path d="M 625,175 Q 615,205 620,240 L 625,240 Z" fill="#965D45" fillOpacity="0.8" />
          </g>

          {/* Radiator under window */}
          <g transform="translate(575, 241)" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
            {[0, 6, 12, 18, 24, 30, 36].map((rx) => (
              <line key={rx} x1={rx} y1="0" x2={rx} y2="7" stroke="#7D4732" strokeWidth="2.5" />
            ))}
          </g>
        </g>
      </g>

      {/* ========================================================
          FLOOR 4 (y: 260 to 360) - Balcony Garden & Kitchen
          ======================================================== */}
      <g id="floor-4-rooms">
        {/* Balcony Cat & Plants */}
        <g id="balcony-cat" className={`perspective-transition ${isAnimalSubdued ? 'perspective-dimmed' : ''}`} transform="translate(182, 335)">
          <ellipse cx="0" cy="0" rx="4.5" ry="3" fill="#AF7359" />
          <circle cx="3.5" cy="-2.5" r="2" fill="#AF7359" />
          <polygon points="2.5,-4 3.5,-5.5 4.5,-4" fill="#7D4732" />
          {/* Animated cat tail over edge */}
          <g className="animate-cat-tail">
            <path d="M -4,1 Q -7,5 -6,8" fill="none" stroke="#AF7359" strokeWidth="1.2" />
          </g>
        </g>

        {/* Room 4A (Left Bay: x=195 to 435): Kitchen & Dining */}
        <g id="room-4a" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          <rect x="195" y="260" width="240" height="100" fill="#E8E0D1" fillOpacity="0.85" />
          <rect x="195" y="348" width="240" height="12" fill="url(#herringbone-parquet)" />

          {/* Balcony Access Double Glazed Door */}
          <rect x="195" y="275" width="35" height="73" fill="#DDD4C3" fillOpacity="0.3" stroke="#262B29" strokeWidth="1.2" />
          <line x1="212" y1="275" x2="212" y2="348" stroke="#262B29" strokeWidth="1" />
          <circle cx="210" cy="315" r="1.5" fill="#AA9C86" />

          {/* Dining Table with Embroidered Runner */}
          <rect x="245" y="318" width="65" height="4" fill="#7D4732" stroke="#262B29" strokeWidth="1" />
          <line x1="250" y1="322" x2="250" y2="348" stroke="#7D4732" strokeWidth="1.5" />
          <line x1="305" y1="322" x2="305" y2="348" stroke="#7D4732" strokeWidth="1.5" />
          <rect x="260" y="316" width="35" height="4" fill="#F7F3EB" stroke="#C4B7A2" strokeWidth="0.6" />
          {/* Porcelain teapot and cup */}
          <ellipse cx="275" cy="313" rx="4" ry="3" fill="#F7F3EB" stroke="#343B37" strokeWidth="0.8" />
          <rect x="283" y="313" width="3" height="3" fill="#F7F3EB" stroke="#343B37" strokeWidth="0.5" rx="0.5" />

          {/* Dining Chairs */}
          <path d="M 238,348 L 238,310 L 244,310 L 244,348" fill="none" stroke="#262B29" strokeWidth="1.2" />
          <path d="M 315,348 L 315,310 L 321,310 L 321,348" fill="none" stroke="#262B29" strokeWidth="1.2" />

          {/* Kitchen Wall Shelves with Glass Jars */}
          <rect x="350" y="275" width="75" height="73" fill="#DDD4C3" fillOpacity="0.5" stroke="#AA9C86" strokeWidth="0.8" />
          <line x1="350" y1="298" x2="425" y2="298" stroke="#262B29" strokeWidth="1" />
          <line x1="350" y1="320" x2="425" y2="320" stroke="#262B29" strokeWidth="1" />
          <rect x="358" y="286" width="8" height="11" rx="1" fill="#AF7359" stroke="#262B29" strokeWidth="0.6" />
          <rect x="372" y="285" width="9" height="12" rx="1" fill="#74826A" stroke="#262B29" strokeWidth="0.6" />
          <rect x="388" y="287" width="8" height="10" rx="1" fill="#965D45" stroke="#262B29" strokeWidth="0.6" />
        </g>

        {/* Room 4B (Center Bay: x=445 to 680): Living / Study with Bookshelf */}
        <g id="room-4b" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          <rect x="445" y="260" width="235" height="100" fill="#F3EDE1" fillOpacity="0.8" />
          <rect x="445" y="348" width="235" height="12" fill="url(#herringbone-parquet)" />

          {/* Large Georgian Window */}
          <rect x="480" y="275" width="60" height="65" fill="#E8E0D1" stroke="#343B37" strokeWidth="1.2" />
          <line x1="510" y1="275" x2="510" y2="340" stroke="#343B37" strokeWidth="1" />
          <line x1="480" y1="305" x2="540" y2="305" stroke="#343B37" strokeWidth="0.8" />
          
          {/* Subtle lace curtain draft */}
          <path d="M 480,275 Q 492,305 486,340 L 480,340 Z" fill="#F7F3EB" fillOpacity="0.6" className="animate-curtain" />

          {/* Monstera plant in corner */}
          <g transform="translate(465, 335)" className={`perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
            <ellipse cx="0" cy="8" rx="6" ry="5" fill="#965D45" stroke="#262B29" strokeWidth="0.8" />
            <g className="animate-leaves">
              <path d="M 0,5 Q -8,-5 -10,-12" fill="none" stroke="#586450" strokeWidth="1.2" />
              <path d="M 0,5 Q 6,-8 10,-14" fill="none" stroke="#586450" strokeWidth="1.2" />
              <circle cx="-10" cy="-12" r="5" fill="#74826A" />
              <circle cx="10" cy="-14" r="5" fill="#8A997F" />
            </g>
          </g>

          {/* Sofa with Cushions */}
          <rect x="560" y="325" width="70" height="23" rx="3" fill="#343B37" stroke="#262B29" strokeWidth="1.2" />
          <rect x="565" y="320" width="28" height="10" rx="2" fill="#74826A" />
          <rect x="598" y="320" width="28" height="10" rx="2" fill="#965D45" />

          {/* Standing Lamp with Warm Glow */}
          <line x1="645" y1="348" x2="645" y2="285" stroke="#262B29" strokeWidth="1.5" />
          <polygon points="638,285 652,285 648,272 642,272" fill="#F7F3EB" stroke="#262B29" strokeWidth="1" />
          <circle cx="645" cy="285" r="14" fill="url(#lamp-glow)" className="animate-window-glow" />
        </g>
      </g>

      {/* ========================================================
          FLOOR 3 (y: 360 to 460) - Apartment 3-B (INTERACTIVE ZONE)
          ======================================================== */}
      <g id="floor-3-rooms">
        {/* Room 3A (Left Bay: x=195 to 435): Bedroom with wardrobe */}
        <g id="room-3a" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          <rect x="195" y="360" width="240" height="100" fill="#E8E0D1" fillOpacity="0.8" />
          <rect x="195" y="448" width="240" height="12" fill="url(#herringbone-parquet)" />

          {/* Large Soviet Polished Wardrobe (Stenka / Garderob) */}
          <rect x="205" y="375" width="55" height="73" fill="#7D4732" stroke="#262B29" strokeWidth="1.2" />
          <line x1="232" y1="375" x2="232" y2="448" stroke="#262B29" strokeWidth="1" />
          <rect x="210" y="380" width="18" height="30" fill="#AF7359" stroke="#7D4732" strokeWidth="0.8" />
          <rect x="236" y="380" width="18" height="30" fill="#AF7359" stroke="#7D4732" strokeWidth="0.8" />
          <circle cx="230" cy="410" r="1" fill="#AA9C86" />
          <circle cx="235" cy="410" r="1" fill="#AA9C86" />

          {/* Double Bed with Floral Coverlet */}
          <rect x="280" y="426" width="75" height="22" fill="#DDD4C3" stroke="#262B29" strokeWidth="1" />
          <rect x="276" y="408" width="6" height="40" fill="#7D4732" stroke="#262B29" strokeWidth="1" />
          <rect x="285" y="426" width="68" height="22" fill="#74826A" fillOpacity="0.5" stroke="#586450" strokeWidth="0.8" />

          {/* Window with Lace Sheers gently swaying */}
          <rect x="375" y="375" width="45" height="65" fill="#E8E0D1" stroke="#343B37" strokeWidth="1.2" />
          <g className="animate-curtain">
            <path d="M 378,377 L 417,377 L 412,438 L 382,438 Z" fill="#F7F3EB" fillOpacity="0.75" stroke="#DDD4C3" strokeWidth="0.5" />
          </g>
        </g>

        {/* Room 3B (Center Bay: x=445 to 680): LIVED INTERIOR APARTMENT 3-B (INTERACTIVE ZONE) */}
        <g id="room-3b" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          {/* Base Room Box */}
          <rect x="445" y="360" width="235" height="100" fill="#F3EDE1" fillOpacity="0.9" />
          {/* 40-year Polished Oak Herringbone Parquet */}
          <rect x="445" y="448" width="235" height="12" fill="url(#herringbone-parquet)" />

          {/* Warm Ambient Window Glow */}
          <rect x="445" y="360" width="235" height="100" fill="#965D45" fillOpacity="0.05" className="animate-window-glow pointer-events-none" />

          {/* Hand-Woven Caucasian Kilim Rug Hanging on Wall */}
          <g id="wall-kilim-carpet" transform="translate(465, 375)">
            <rect x="0" y="0" width="68" height="46" fill="url(#caucasian-carpet)" stroke="#262B29" strokeWidth="1.2" />
            {[2, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62, 66].map((fx) => (
              <line key={fx} x1={fx} y1="46" x2={fx} y2="49" stroke="#E8E0D1" strokeWidth="0.8" />
            ))}
          </g>

          {/* Floor-to-Ceiling Built-in Bookshelf */}
          <rect x="545" y="365" width="42" height="83" fill="#AA9C86" stroke="#262B29" strokeWidth="1.2" />
          {[382, 398, 414, 430, 446].map((sy) => (
            <line key={sy} x1="545" y1={sy} x2="587" y2={sy} stroke="#262B29" strokeWidth="0.8" />
          ))}
          {/* Books spines */}
          <rect x="547" y="367" width="5" height="14" fill="#965D45" />
          <rect x="553" y="368" width="4" height="13" fill="#343B37" />
          <rect x="558" y="366" width="6" height="15" fill="#7D4732" />
          <rect x="566" y="367" width="5" height="14" fill="#74826A" />
          <rect x="572" y="369" width="4" height="12" fill="#586450" />
          <rect x="578" y="367" width="6" height="14" fill="#965D45" />
          <rect x="547" y="384" width="7" height="13" fill="#7D4732" />
          <rect x="556" y="383" width="8" height="14" fill="#AF7359" />
          <rect x="566" y="385" width="5" height="12" fill="#343B37" />
          <rect x="573" y="384" width="7" height="13" fill="#74826A" />

          {/* Mid-Century Armchair with Subtle Resident Silhouette Reading */}
          <g id="vintage-armchair" transform="translate(480, 420)">
            {/* Wooden angled legs */}
            <line x1="4" y1="28" x2="0" y2="15" stroke="#262B29" strokeWidth="1.5" />
            <line x1="28" y1="28" x2="32" y2="15" stroke="#262B29" strokeWidth="1.5" />
            {/* Seat & Back */}
            <path d="M 0,15 Q 0,0 16,0 Q 32,0 32,15 L 30,22 L 2,22 Z" fill="#AF7359" stroke="#262B29" strokeWidth="1.2" />
            <rect x="3" y="14" width="26" height="8" rx="2" fill="#965D45" stroke="#7D4732" strokeWidth="0.8" />
            {/* Wooden Armrests */}
            <line x1="-2" y1="12" x2="10" y2="12" stroke="#7D4732" strokeWidth="2" />
            <line x1="22" y1="12" x2="34" y2="12" stroke="#7D4732" strokeWidth="2" />

            {/* Resident Silhouette (Soft architectural human presence profile) */}
            <g id="resident-reading-silhouette" opacity="0.6">
              {/* Head */}
              <circle cx="16" cy="-4" r="4.2" fill="#343B37" />
              {/* Torso leaning forward slightly */}
              <path d="M 12,0 Q 16,-2 20,0 L 22,14 L 10,14 Z" fill="#343B37" />
              {/* Arms holding book */}
              <path d="M 10,8 L 15,10 L 17,7" fill="none" stroke="#343B37" strokeWidth="1.4" />
              {/* Small open book in hands */}
              <polygon points="14,10 18,10 19,7 15,7" fill="#F7F3EB" stroke="#262B29" strokeWidth="0.5" />
            </g>
          </g>

          {/* Retro Soviet Radiogram / Turntable Console */}
          <rect x="595" y="420" width="35" height="28" fill="#7D4732" stroke="#262B29" strokeWidth="1" />
          <rect x="600" y="424" width="16" height="18" fill="#AA9C86" stroke="#262B29" strokeWidth="0.6" />
          <rect x="618" y="424" width="9" height="6" fill="#343B37" />
          <circle cx="622" cy="436" r="2" fill="#C4B7A2" />

          {/* Heavy Cast-Iron Soviet Radiator ("Harmonica") */}
          <g transform="translate(640, 436)" className={`perspective-transition ${isInfraSubdued ? 'perspective-dimmed' : ''}`}>
            {[0, 4, 8, 12, 16, 20, 24, 28].map((rx) => (
              <line key={rx} x1={rx} y1="0" x2={rx} y2="12" stroke="#7D4732" strokeWidth="2.5" />
            ))}
            <line x1="-2" y1="2" x2="30" y2="2" stroke="#262B29" strokeWidth="1" />
            <line x1="-2" y1="10" x2="30" y2="10" stroke="#262B29" strokeWidth="1" />
          </g>

          {/* Large Thriving Monstera in Ceramic Tub */}
          <g transform="translate(650, 405)" className={`perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
            <polygon points="-5,15 5,15 4,24 -4,24" fill="#965D45" stroke="#262B29" strokeWidth="0.8" />
            <g className="animate-leaves">
              <path d="M 0,15 Q -10,0 -16,-10" fill="none" stroke="#586450" strokeWidth="1.5" />
              <path d="M 0,15 Q 10,2 14,-8" fill="none" stroke="#586450" strokeWidth="1.5" />
              <ellipse cx="-16" cy="-10" rx="9" ry="7" fill="#74826A" stroke="#586450" strokeWidth="0.8" transform="rotate(-25 -16 -10)" />
              <ellipse cx="14" cy="-8" rx="8" ry="6" fill="#8A997F" stroke="#586450" strokeWidth="0.8" transform="rotate(20 14 -8)" />
            </g>
          </g>

          {/* Vintage Brass Floor Lamp */}
          <line x1="535" y1="448" x2="535" y2="390" stroke="#AA9C86" strokeWidth="1.5" />
          <polygon points="527,390 543,390 539,378 531,378" fill="#F7F3EB" stroke="#262B29" strokeWidth="1" />
          <circle cx="535" cy="390" r="18" fill="url(#lamp-glow)" className="animate-window-glow" />
        </g>
      </g>

      {/* ========================================================
          FLOOR 2 (y: 460 to 560) - Modernized / Renovated Apartment
          ======================================================== */}
      <g id="floor-2-rooms">
        {/* Room 2A (Left Bay: x=195 to 435): Renovated Living Studio */}
        <g id="room-2a" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          <rect x="195" y="460" width="240" height="100" fill="#E8E0D1" fillOpacity="0.85" />
          <rect x="195" y="548" width="240" height="12" fill="url(#herringbone-parquet)" />

          {/* Exposed Brick Feature Wall */}
          <rect x="195" y="465" width="55" height="83" fill="url(#weathered-brick)" stroke="#AA9C86" strokeWidth="0.8" />

          {/* Work Desk with Laptop, Ceramic Mug & Contemporary Lamp */}
          <rect x="260" y="520" width="55" height="4" fill="#343B37" stroke="#262B29" strokeWidth="1" />
          <line x1="265" y1="524" x2="265" y2="548" stroke="#343B37" strokeWidth="1.5" />
          <line x1="310" y1="524" x2="310" y2="548" stroke="#343B37" strokeWidth="1.5" />
          {/* Laptop open */}
          <line x1="275" y1="520" x2="290" y2="520" stroke="#AA9C86" strokeWidth="1.5" />
          <line x1="278" y1="520" x2="284" y2="512" stroke="#AA9C86" strokeWidth="1.5" />
          {/* Coffee mug */}
          <rect x="268" y="516" width="3.5" height="4" fill="#F7F3EB" stroke="#343B37" strokeWidth="0.5" rx="0.5" />
          {/* Desk Lamp */}
          <path d="M 302,520 L 302,508 L 296,505" fill="none" stroke="#965D45" strokeWidth="1.2" />

          {/* Modern Sofa */}
          <rect x="335" y="525" width="68" height="23" rx="3" fill="#74826A" stroke="#262B29" strokeWidth="1.2" />
          <rect x="340" y="520" width="28" height="10" rx="2" fill="#586450" />
          <rect x="370" y="520" width="28" height="10" rx="2" fill="#586450" />
        </g>

        {/* Room 2B (Center Bay: x=445 to 680): Open Plan Kitchen & Dining */}
        <g id="room-2b" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          <rect x="445" y="460" width="235" height="100" fill="#F3EDE1" fillOpacity="0.8" />
          <rect x="445" y="548" width="235" height="12" fill="url(#herringbone-parquet)" />

          {/* Kitchen Counter / Island */}
          <rect x="460" y="515" width="60" height="33" fill="#343B37" stroke="#262B29" strokeWidth="1" />
          <rect x="458" y="512" width="64" height="4" fill="#C4B7A2" stroke="#262B29" strokeWidth="0.8" />
          <polygon points="475,475 495,475 500,490 470,490" fill="#AA9C86" stroke="#262B29" strokeWidth="0.8" />

          {/* Dining Table with Modern Chairs */}
          <rect x="545" y="522" width="60" height="4" fill="#AA9C86" stroke="#262B29" strokeWidth="1" />
          <line x1="552" y1="526" x2="552" y2="548" stroke="#262B29" strokeWidth="1.2" />
          <line x1="598" y1="526" x2="598" y2="548" stroke="#262B29" strokeWidth="1.2" />
          <ellipse cx="575" cy="519" rx="6" ry="3" fill="#F7F3EB" stroke="#343B37" strokeWidth="0.8" />

          {/* Potted Ficus in Corner */}
          <g className={`perspective-transition ${isPlantSubdued ? 'perspective-dimmed' : ''}`}>
            <polygon points="640,548 650,548 648,536 642,536" fill="#965D45" stroke="#262B29" strokeWidth="0.8" />
            <circle cx="645" cy="528" r="7" fill="#74826A" />
            <circle cx="643" cy="520" r="5" fill="#8A997F" />
          </g>
        </g>
      </g>

      {/* ========================================================
          FLOOR 1 (y: 560 to 660) - Ground Level Apartment
          ======================================================== */}
      <g id="floor-1-rooms">
        {/* Room 1A (Left Bay: x=195 to 435): Ground Floor with Window Grille */}
        <g id="room-1a" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          <rect x="195" y="560" width="240" height="100" fill="#E8E0D1" fillOpacity="0.9" />
          <rect x="195" y="648" width="240" height="12" fill="url(#herringbone-parquet)" />

          {/* Traditional Wrought-Iron Security Grille ("Solisi") on Window */}
          <rect x="205" y="575" width="55" height="65" fill="#DDD4C3" fillOpacity="0.4" stroke="#262B29" strokeWidth="1.2" />
          <path
            d="M 210,575 L 232,607 L 210,640 M 232,575 L 255,607 L 232,640 M 255,575 L 232,607 L 255,640"
            fill="none"
            stroke="#262B29"
            strokeWidth="1.2"
          />

          {/* Heavy Antique Credenza with Georgian Samovar */}
          <rect x="280" y="595" width="70" height="53" fill="#7D4732" stroke="#262B29" strokeWidth="1.2" />
          <line x1="315" y1="595" x2="315" y2="648" stroke="#262B29" strokeWidth="1" />
          <g transform="translate(315, 584)">
            <ellipse cx="0" cy="5" rx="5" ry="4" fill="#AA9C86" stroke="#262B29" strokeWidth="0.8" />
            <rect x="-3" y="-2" width="6" height="4" fill="#C4B7A2" stroke="#262B29" strokeWidth="0.6" />
            <line x1="0" y1="-2" x2="0" y2="-4" stroke="#262B29" strokeWidth="1" />
            <circle cx="0" cy="-5" r="1" fill="#965D45" />
          </g>

          {/* Family Dining Table with Fruit Bowl & Georgian tea cups */}
          <rect x="365" y="620" width="58" height="4" fill="#7D4732" stroke="#262B29" strokeWidth="1" />
          <line x1="370" y1="624" x2="370" y2="648" stroke="#7D4732" strokeWidth="1.5" />
          <line x1="418" y1="624" x2="418" y2="648" stroke="#7D4732" strokeWidth="1.5" />
          <ellipse cx="394" cy="616" rx="6" ry="3" fill="#AF7359" stroke="#262B29" strokeWidth="0.8" />
          <circle cx="383" cy="618" r="1.5" fill="#F7F3EB" stroke="#343B37" strokeWidth="0.4" />
        </g>

        {/* Room 1B (Center Bay: x=445 to 680): Entrance Vestibule & Hallway */}
        <g id="room-1b" className={`perspective-transition ${isHumanSubdued ? 'perspective-dimmed' : ''}`}>
          <rect x="445" y="560" width="235" height="100" fill="#F3EDE1" fillOpacity="0.85" />
          <rect x="445" y="648" width="235" height="12" fill="url(#herringbone-parquet)" />

          {/* Entrance Door with Brass Lock & Coat Rack */}
          <rect x="455" y="575" width="40" height="73" fill="#7D4732" stroke="#262B29" strokeWidth="1.2" />
          <circle cx="462" cy="615" r="1.5" fill="#AA9C86" />
          {/* Wall Coat Rack with Hanging Jackets & Woolen Hat */}
          <line x1="510" y1="585" x2="550" y2="585" stroke="#262B29" strokeWidth="1.5" />
          <path d="M 518,585 L 515,605 L 525,605 L 522,585" fill="#343B37" stroke="#262B29" strokeWidth="0.8" />
          <path d="M 535,585 L 532,608 L 542,608 L 539,585" fill="#965D45" stroke="#262B29" strokeWidth="0.8" />

          {/* Shoe bench with slippers */}
          <rect x="508" y="635" width="45" height="13" fill="#AA9C86" stroke="#262B29" strokeWidth="0.8" />
          <ellipse cx="518" cy="632" rx="4" ry="2" fill="#74826A" />
          <ellipse cx="530" cy="632" rx="4" ry="2" fill="#AF7359" />

          {/* Side Credenza & Hallway Runner Rug */}
          <rect x="580" y="610" width="50" height="38" fill="#AA9C86" stroke="#262B29" strokeWidth="1" />
          <rect x="465" y="646" width="180" height="4" fill="#965D45" stroke="#7D4732" strokeWidth="0.6" />
        </g>
      </g>
    </g>
  );
};
