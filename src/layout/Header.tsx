import React, { useState } from 'react';
import { Layers, Info, ChevronDown, User, Feather, Trees, Wrench, Eye } from 'lucide-react';
import type { InteractiveZone, Language, PerspectiveFilter } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAbout: () => void;
  zones: InteractiveZone[];
  onSelectZone: (zone: InteractiveZone) => void;
  activeZoneId: string | null;
  selectedPerspective: PerspectiveFilter;
  onSelectPerspective: (perspective: PerspectiveFilter) => void;
}

const PERSPECTIVES: {
  id: PerspectiveFilter;
  labelEn: string;
  labelKa: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: 'ALL', labelEn: 'ALL', labelKa: 'ყველა', icon: Eye },
  { id: 'HUMAN', labelEn: 'HUMAN', labelKa: 'ადამიანი', icon: User },
  { id: 'ANIMAL', labelEn: 'ANIMAL', labelKa: 'ცხოველი', icon: Feather },
  { id: 'PLANT', labelEn: 'PLANT', labelKa: 'მცენარე', icon: Trees },
  { id: 'INFRASTRUCTURE', labelEn: 'INFRASTRUCTURE', labelKa: 'ინფრასტრუქტურა', icon: Wrench },
];

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenAbout,
  zones,
  onSelectZone,
  activeZoneId,
  selectedPerspective,
  onSelectPerspective,
}) => {
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-start justify-between gap-3">
      {/* Top-Left: Exhibition Identity */}
      <div className="pointer-events-auto bg-[#222725] border border-[#303633] shadow-brutalist-sm p-3 md:p-4 w-full max-w-[380px] sm:max-w-[480px] md:max-w-[540px]">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-block w-2 h-2 bg-[#A35243] animate-pulse-slow" />
          <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-[#B09A69] uppercase font-semibold">
            GEOLAB ARCHIVE · ARCHITECTURAL SECTOR 04
          </span>
        </div>
        
        <h1 className="font-editorial text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#D8D7CD] leading-none uppercase">
          {language === 'KA' ? 'ცოცხალი შენობა' : 'THE LIVING BUILDING'}
        </h1>
        
        <p className="font-sans text-xs md:text-[13px] text-[#939B92] mt-1.5 leading-snug font-medium">
          {language === 'KA'
            ? 'თბილისის საცხოვრებელი არქიტექტურის მულტისახეობრივი კვლევა'
            : "A Multispecies Exploration of Tbilisi's Residential Architecture"}
        </p>

        {/* Perspective Selector - No-clipping Wrap Layout */}
        <div className="mt-3 pt-2.5 border-t border-[#303633]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[9px] tracking-wider text-[#A35243] uppercase font-semibold">
              {language === 'KA' ? 'კვლევის პერსპექტივა' : 'RESEARCH PERSPECTIVE'}
            </span>
            <span className="font-mono text-[8px] text-[#687565]">
              {selectedPerspective === 'ALL' ? 'COMPLETE ECOSYSTEM' : selectedPerspective}
            </span>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 pt-0.5"
            role="tablist"
            aria-label="Perspective Filters"
          >
            {PERSPECTIVES.map((p) => {
              const Icon = p.icon;
              const isSelected = selectedPerspective === p.id;
              const label = language === 'KA' ? p.labelKa : p.labelEn;

              return (
                <button
                  key={p.id}
                  onClick={() => onSelectPerspective(p.id)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase transition-all duration-150 border ${
                    isSelected
                      ? 'bg-[#A35243] text-[#FFFFFF] border-[#A35243] font-bold shadow-sm'
                      : 'bg-[#181C1A] text-[#939B92] border-[#303633] hover:bg-[#2A302D] hover:text-[#D8D7CD]'
                  }`}
                  title={`${language === 'KA' ? 'პერსპექტივა:' : 'Perspective:'} ${label}`}
                >
                  <Icon className={`w-3 h-3 ${isSelected ? 'text-[#FFFFFF]' : 'text-[#687565]'}`} />
                  <span className="whitespace-nowrap">{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top-Right: Navigation & Controls */}
      <div className="pointer-events-auto flex items-center gap-2 md:gap-3 self-end md:self-start">
        {/* Explore Zone Dropdown */}
        <div className="relative">
          <button
            onClick={() => setExploreOpen(!exploreOpen)}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#222725] border border-[#303633] shadow-brutalist-sm hover:bg-[#2A302D] text-xs font-mono font-medium text-[#D8D7CD] transition-colors"
            aria-expanded={exploreOpen}
            aria-haspopup="true"
          >
            <Layers className="w-3.5 h-3.5 text-[#A35243]" />
            <span className="uppercase tracking-wider">
              {language === 'KA' ? 'გამოკვლევა' : 'EXPLORE'}
            </span>
            <ChevronDown className={`w-3 h-3 text-[#939B92] transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
          </button>

          {exploreOpen && (
            <div className="absolute right-0 mt-1.5 w-64 bg-[#222725] border border-[#303633] shadow-brutalist p-2 space-y-1 z-50">
              <div className="px-2 py-1 font-mono text-[10px] tracking-wider text-[#B09A69] uppercase border-b border-[#303633]">
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
                    className={`w-full text-left px-2.5 py-1.5 text-xs font-sans flex items-center justify-between transition-colors border border-transparent ${
                      isSelected
                        ? 'bg-[#A35243] text-[#FFFFFF] font-semibold'
                        : 'text-[#D8D7CD] hover:bg-[#2A302D]'
                    }`}
                  >
                    <span className="truncate">
                      {language === 'KA' ? zone.titleKa : zone.titleEn}
                    </span>
                    <span className="font-mono text-[9px] px-1 py-0.2 bg-[#181C1A] text-[#939B92] border border-[#303633] ml-2">
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
          className="flex items-center gap-1.5 px-3 py-2 bg-[#222725] border border-[#303633] shadow-brutalist-sm hover:bg-[#2A302D] text-xs font-mono font-medium text-[#D8D7CD] transition-colors"
        >
          <Info className="w-3.5 h-3.5 text-[#687565]" />
          <span className="uppercase tracking-wider">
            {language === 'KA' ? 'პროექტის შესახებ' : 'ABOUT'}
          </span>
        </button>

        {/* Bilingual Language Switcher: KA / EN */}
        <div className="flex items-center bg-[#222725] border border-[#303633] shadow-brutalist-sm text-xs font-mono font-medium">
          <button
            onClick={() => onLanguageChange('KA')}
            className={`px-2.5 py-2 transition-colors ${
              language === 'KA'
                ? 'bg-[#A35243] text-[#FFFFFF] font-bold'
                : 'text-[#939B92] hover:bg-[#2A302D] hover:text-[#D8D7CD]'
            }`}
          >
            KA
          </button>
          <span className="text-[#303633]">|</span>
          <button
            onClick={() => onLanguageChange('EN')}
            className={`px-2.5 py-2 transition-colors ${
              language === 'EN'
                ? 'bg-[#A35243] text-[#FFFFFF] font-bold'
                : 'text-[#939B92] hover:bg-[#2A302D] hover:text-[#D8D7CD]'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};
