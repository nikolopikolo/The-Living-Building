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
    <div className={`pt-2 border-t border-[#C4B7A2]/70 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-mono text-[10px] tracking-widest text-[#7D4732] uppercase font-semibold flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#965D45]" />
          <span>{language === 'KA' ? 'დაკავშირებული სივრცეები' : 'CONNECTED SPACES'}</span>
        </h3>
        <span className="font-mono text-[9px] text-[#586450]">
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
              className="group text-left p-2.5 bg-[#E8E0D1] hover:bg-[#DDD4C3] border border-[#C4B7A2] hover:border-[#965D45] transition-all flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-[#965D45]"
              aria-label={`${language === 'KA' ? 'გადასვლა' : 'Explore'}: ${relFloor} - ${relTitle}`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-[#262B29] text-[#E8E0D1] uppercase tracking-wider">
                  {relFloor}
                </span>
                <ArrowRight className="w-3 h-3 text-[#965D45] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-medium text-xs text-[#262B29] group-hover:text-[#965D45] leading-snug line-clamp-2 transition-colors">
                {relTitle}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
