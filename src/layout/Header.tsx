import React, { useState } from 'react';
import { Layers, Info, ChevronDown } from 'lucide-react';
import type { InteractiveZone, Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAbout: () => void;
  zones: InteractiveZone[];
  onSelectZone: (zone: InteractiveZone) => void;
  activeZoneId: string | null;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenAbout,
  zones,
  onSelectZone,
  activeZoneId,
}) => {
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none p-4 md:p-6 lg:p-8 flex items-start justify-between">
      {/* Top-Left: Exhibition Identity */}
      <div className="pointer-events-auto bg-[#F7F3EB]/95 backdrop-blur-sm border border-[#343B37] shadow-brutalist-sm p-3.5 md:p-4 max-w-[340px] md:max-w-[420px]">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-block w-2 h-2 bg-[#965D45] rounded-full" />
          <span className="font-mono text-[10px] tracking-widest text-[#7D4732] uppercase font-semibold">
            GEOLAB FIELDWORK ARCHIVE · PHASE 01
          </span>
        </div>
        
        <h1 className="font-editorial text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#262B29] leading-none uppercase">
          {language === 'KA' ? 'ცოცხალი შენობა' : 'THE LIVING BUILDING'}
        </h1>
        
        <p className="font-sans text-xs md:text-[13px] text-[#586450] mt-1.5 leading-snug font-medium">
          {language === 'KA'
            ? 'თბილისის საცხოვრებელი არქიტექტურის მულტისახეობრივი კვლევა'
            : "A Multispecies Exploration of Tbilisi's Residential Architecture"}
        </p>
      </div>

      {/* Top-Right: Navigation & Controls */}
      <div className="pointer-events-auto flex items-center gap-2 md:gap-3">
        {/* Explore Zone Dropdown */}
        <div className="relative">
          <button
            onClick={() => setExploreOpen(!exploreOpen)}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#F7F3EB] border border-[#343B37] shadow-brutalist-sm hover:bg-[#E8E0D1] text-xs font-mono font-medium text-[#262B29] transition-colors"
            aria-expanded={exploreOpen}
            aria-haspopup="true"
          >
            <Layers className="w-3.5 h-3.5 text-[#965D45]" />
            <span className="uppercase tracking-wider">
              {language === 'KA' ? 'გამოკვლევა' : 'EXPLORE'}
            </span>
            <ChevronDown className={`w-3 h-3 text-[#586450] transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
          </button>

          {exploreOpen && (
            <div className="absolute right-0 mt-1.5 w-64 bg-[#F7F3EB] border border-[#343B37] shadow-brutalist p-2 space-y-1 z-50">
              <div className="px-2 py-1 font-mono text-[10px] tracking-wider text-[#7D4732] uppercase border-b border-[#C4B7A2]">
                {language === 'KA' ? 'არქიტექტურული ზონები' : 'ARCHITECTURAL ZONES'}
              </div>
              {zones.map((zone) => {
                const isSelected = activeZoneId === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => {
                      onSelectZone(zone);
                      setExploreOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 text-xs font-sans flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-[#262B29] text-[#E8E0D1] font-semibold'
                        : 'text-[#262B29] hover:bg-[#E8E0D1]'
                    }`}
                  >
                    <span className="truncate">
                      {language === 'KA' ? zone.titleKa : zone.titleEn}
                    </span>
                    <span className="font-mono text-[9px] px-1 py-0.2 bg-[#C4B7A2]/60 text-[#262B29] ml-2">
                      {zone.floorLevel}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* About Button */}
        <button
          onClick={onOpenAbout}
          className="flex items-center gap-1.5 px-3 py-2 bg-[#F7F3EB] border border-[#343B37] shadow-brutalist-sm hover:bg-[#E8E0D1] text-xs font-mono font-medium text-[#262B29] transition-colors"
        >
          <Info className="w-3.5 h-3.5 text-[#74826A]" />
          <span className="uppercase tracking-wider">
            {language === 'KA' ? 'პროექტის შესახებ' : 'ABOUT'}
          </span>
        </button>

        {/* Bilingual Language Switcher: KA / EN */}
        <div className="flex items-center bg-[#F7F3EB] border border-[#343B37] shadow-brutalist-sm text-xs font-mono font-medium">
          <button
            onClick={() => onLanguageChange('KA')}
            className={`px-2.5 py-2 transition-colors ${
              language === 'KA'
                ? 'bg-[#262B29] text-[#E8E0D1] font-bold'
                : 'text-[#343B37] hover:bg-[#E8E0D1]'
            }`}
          >
            KA
          </button>
          <span className="text-[#C4B7A2]">|</span>
          <button
            onClick={() => onLanguageChange('EN')}
            className={`px-2.5 py-2 transition-colors ${
              language === 'EN'
                ? 'bg-[#262B29] text-[#E8E0D1] font-bold'
                : 'text-[#343B37] hover:bg-[#E8E0D1]'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};
