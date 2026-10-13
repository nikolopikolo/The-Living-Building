import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';
import type { InteractiveZone, Language } from '../../types';

interface ConnectedSpacesProps {
  currentZone: InteractiveZone;
  allZones: InteractiveZone[];
  language: Language;
  onFocusZone?: (zone: InteractiveZone) => void;
  className?: string;
}

export const ConnectedSpaces: React.FC<ConnectedSpacesProps> = ({
  currentZone,
  allZones,
  language,
  onFocusZone,
  className = '',
}) => {
  const relatedZones = (currentZone.relatedZoneIds || [])
    .map((id) => allZones.find((z) => z.id === id))
    .filter((z): z is InteractiveZone => Boolean(z));

  if (relatedZones.length === 0) return null;

  return (
    <div className={`pt-2 border-t border-[#303633] ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-mono text-[10px] tracking-widest text-[#B09A69] uppercase font-semibold flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#A35243]" />
          <span>{language === 'KA' ? 'დაკავშირებული სივრცეები' : 'CONNECTED SPACES'}</span>
        </h3>
        <span className="font-mono text-[9px] text-[#939B92]">
          {relatedZones.length} {language === 'KA' ? 'სივრცე' : 'SPACES'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {relatedZones.map((relZone) => {
          const relTitle = language === 'KA' ? relZone.titleKa : relZone.titleEn;
          const relFloor = language === 'KA' ? relZone.floorLevelKa : relZone.floorLevel;
          return (
            <button
              key={relZone.id}
              type="button"
              onClick={() => onFocusZone?.(relZone)}
              className="group text-left p-2.5 bg-[#181C1A] hover:bg-[#222725] border border-[#303633] hover:border-[#A35243] transition-all flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A35243]"
              aria-label={`${language === 'KA' ? 'გადასვლა' : 'Explore'}: ${relFloor} - ${relTitle}`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-[#222725] text-[#D8D7CD] border border-[#303633] uppercase tracking-wider">
                  {relFloor}
                </span>
                <ArrowRight className="w-3 h-3 text-[#A35243] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-medium text-xs text-[#D8D7CD] group-hover:text-[#A35243] leading-snug line-clamp-2 transition-colors">
                {relTitle}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
