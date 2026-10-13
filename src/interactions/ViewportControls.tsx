import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react';
import type { Language } from '../types';

interface ViewportControlsProps {
  scale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  language: Language;
}

export const ViewportControls: React.FC<ViewportControlsProps> = ({
  scale,
  onZoomIn,
  onZoomOut,
  onReset,
  language,
}) => {
  const zoomPercent = Math.round(scale * 100);

  return (
    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 select-none">
      {/* Interaction Hint */}
      <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#222725]/95 border border-[#303633] text-[11px] font-mono text-[#939B92] shadow-brutalist-sm">
        <Move className="w-3.5 h-3.5 text-[#A35243]" />
        <span>
          {language === 'KA'
            ? 'გადაადგილება: გადათრევა · მასშტაბირება: გორგოლაჭი · ინსპექცია: დაკლიკება'
            : 'DRAG TO PAN · WHEEL TO ZOOM · CLICK ZONE TO INSPECT'}
        </span>
      </div>

      {/* Button Cluster - Industrial Instrument Styling */}
      <div className="flex items-center bg-[#222725] border border-[#303633] shadow-brutalist-sm">
        {/* Zoom In */}
        <button
          onClick={onZoomIn}
          className="p-2 md:p-2.5 text-[#D8D7CD] hover:bg-[#2A302D] hover:text-[#A35243] transition-colors border-r border-[#303633]"
          title={language === 'KA' ? 'გადიდება' : 'Zoom In'}
          aria-label="Zoom in"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {/* Zoom Level Indicator */}
        <span className="px-2.5 font-mono text-xs font-semibold text-[#B09A69] min-w-[50px] text-center bg-[#181C1A]">
          {zoomPercent}%
        </span>

        {/* Zoom Out */}
        <button
          onClick={onZoomOut}
          className="p-2 md:p-2.5 text-[#D8D7CD] hover:bg-[#2A302D] hover:text-[#A35243] transition-colors border-l border-r border-[#303633]"
          title={language === 'KA' ? 'დაპატარავება' : 'Zoom Out'}
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        {/* Reset View */}
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-2 md:py-2.5 text-xs font-mono font-medium text-[#D8D7CD] hover:bg-[#2A302D] hover:text-[#A35243] transition-colors"
          title={language === 'KA' ? 'ხედის დაბრუნება' : 'Reset View'}
          aria-label="Reset view"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
            {language === 'KA' ? 'საწყისი' : 'RESET'}
          </span>
        </button>
      </div>
    </div>
  );
};
