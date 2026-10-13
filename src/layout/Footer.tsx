import React from 'react';
import { ViewportControls } from '../interactions/ViewportControls';
import type { Language } from '../types';

interface FooterProps {
  scale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({
  scale,
  onZoomIn,
  onZoomOut,
  onReset,
  language,
}) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none p-4 md:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
      {/* Bottom-Left: Archival Stamp Label */}
      <div className="pointer-events-auto bg-[#222725] border border-[#303633] shadow-brutalist-sm p-3 md:p-3.5 max-w-[320px]">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs font-bold tracking-widest text-[#D8D7CD] uppercase">
            TBILISI, GEORGIA
          </span>
          <span className="font-mono text-[10px] text-[#B09A69]">
            41°43'N 44°48'E
          </span>
        </div>
        <p className="font-mono text-[10px] md:text-[11px] text-[#939B92] tracking-wide uppercase leading-tight font-medium">
          {language === 'KA'
            ? 'ინტერაქციული ეთნოგრაფიული გამოცდილება'
            : 'AN INTERACTIVE ETHNOGRAPHIC EXPERIENCE'}
        </p>
      </div>

      {/* Bottom-Right: Viewport Controls */}
      <div className="pointer-events-auto">
        <ViewportControls
          scale={scale}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
          onReset={onReset}
          language={language}
        />
      </div>
    </footer>
  );
};
