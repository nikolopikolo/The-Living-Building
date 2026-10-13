import React from 'react';
import { BookOpen, Compass, Camera, Volume2, Film, Layers, ArrowRight } from 'lucide-react';
import type { InteractiveZone, Language } from '../../types';

interface FieldNarrativeViewProps {
  zone: InteractiveZone;
  language: Language;
  onFocusZone?: (zone: InteractiveZone) => void;
  onSelectTab?: (tab: 'overview' | 'narrative' | 'visual' | 'soundscapes') => void;
  onOpenLightbox?: (index: number) => void;
  allZones?: InteractiveZone[];
}

export const FieldNarrativeView: React.FC<FieldNarrativeViewProps> = ({
  zone,
  language,
  onFocusZone,
  onSelectTab,
  onOpenLightbox,
  allZones,
}) => {
  const sections = zone.narrativeSections;

  // Fallbacks using existing zone content if narrativeSections are not defined
  const researchContext = sections
    ? (language === 'KA' ? sections.researchContextKa : sections.researchContextEn)
    : (language === 'KA'
      ? `საველე დაკვირვება ხორციელდება თბილისის საცხოვრებელი კორპუსის შუალედურ სივრცეებში. არქივი აერთიანებს მატერიალურ და ზეპირ ისტორიებს.`
      : `Ethnographic field documentation conducted in Tbilisi mass residential typologies. The research archive synthesizes spatial ethnography, material evidence, and resident adaptations.`);

  const spatialObservations = sections
    ? (language === 'KA' ? sections.spatialObservationsKa : sections.spatialObservationsEn)
    : (language === 'KA' ? zone.extendedNarrativeKa : zone.extendedNarrativeEn);

  const multispeciesRelations = sections
    ? (language === 'KA' ? sections.multispeciesRelationshipsKa : sections.multispeciesRelationshipsEn)
    : (language === 'KA'
      ? zone.multispecies.map((m) => `${m.nameKa}: ${m.detailKa}`).join('. ')
      : zone.multispecies.map((m) => `${m.nameEn}: ${m.detailEn}`).join('. '));

  const architecturalContext = sections
    ? (language === 'KA' ? sections.architecturalContextKa : sections.architecturalContextEn)
    : (language === 'KA' ? zone.architecturalNotesKa : zone.architecturalNotesEn);

  // Associated Media Records
  const mediaRecords = zone.mediaRecords || [];
  const photoRecords = mediaRecords.filter((m) => m.type === 'image');
  const audioRecords = mediaRecords.filter((m) => m.type === 'audio');
  const videoRecords = mediaRecords.filter((m) => m.type === 'video');

  // Related Zones
  const relatedZones = (zone.relatedZoneIds || [])
    .map((id) => allZones?.find((z) => z.id === id))
    .filter((z): z is InteractiveZone => Boolean(z));

  return (
    <div className="space-y-4 font-sans text-xs md:text-[13px] leading-relaxed text-[#E6E5DC]">
      {/* Archival Field Docket Header */}
      <div className="bg-[#181C1A] border-l-2 border-[#B55B49] p-2.5 flex items-center justify-between text-[9px] font-mono">
        <span className="font-bold text-[#D4BC7D] uppercase tracking-wider">
          DOSSIER SECTION: TB-{zone.id.toUpperCase()}-DOC
        </span>
        <span className="text-[#B0B7AF]">
          {language === 'KA' ? 'საველე ჩანაწერები' : 'STRUCTURED FIELD REPORT'}
        </span>
      </div>

      {/* 1. RESEARCH CONTEXT */}
      <section className="space-y-1.5">
        <h4 className="font-mono text-[10.5px] tracking-widest text-[#D4BC7D] uppercase font-bold flex items-center gap-1.5 border-b border-[#3E4642] pb-1">
          <BookOpen className="w-3.5 h-3.5 text-[#B55B49]" />
          <span>{language === 'KA' ? '1. კვლევითი კონტექსტი' : '1. RESEARCH CONTEXT'}</span>
        </h4>
        <p className="font-editorial text-sm sm:text-base leading-relaxed text-[#E6E5DC]">
          {researchContext}
        </p>
      </section>

      {/* 2. SPATIAL OBSERVATIONS */}
      <section className="space-y-1.5">
        <h4 className="font-mono text-[10.5px] tracking-widest text-[#D4BC7D] uppercase font-bold flex items-center gap-1.5 border-b border-[#3E4642] pb-1">
          <Compass className="w-3.5 h-3.5 text-[#889885]" />
          <span>{language === 'KA' ? '2. სივრცითი დაკვირვება' : '2. SPATIAL OBSERVATIONS'}</span>
        </h4>
        <p className="font-editorial text-sm sm:text-base leading-relaxed text-[#E6E5DC] first-letter:text-2xl first-letter:font-bold first-letter:float-left first-letter:mr-1.5 first-letter:leading-none">
          {spatialObservations}
        </p>
      </section>

      {/* 3. MULTISPECIES RELATIONSHIPS */}
      <section className="space-y-1.5">
        <h4 className="font-mono text-[10.5px] tracking-widest text-[#D4BC7D] uppercase font-bold flex items-center gap-1.5 border-b border-[#3E4642] pb-1">
          <Layers className="w-3.5 h-3.5 text-[#889885]" />
          <span>{language === 'KA' ? '3. მულტისახეობრივი ურთიერთობები' : '3. MULTISPECIES RELATIONSHIPS'}</span>
        </h4>
        <div className="bg-[#181C1A] border border-[#3E4642] p-2.5 font-sans text-xs text-[#E6E5DC] leading-relaxed">
          {multispeciesRelations}
        </div>
      </section>

      {/* 4. ARCHITECTURAL CONTEXT */}
      <section className="space-y-1.5">
        <h4 className="font-mono text-[10.5px] tracking-widest text-[#D4BC7D] uppercase font-bold flex items-center gap-1.5 border-b border-[#3E4642] pb-1">
          <span className="font-mono text-xs text-[#B55B49]">▤</span>
          <span>{language === 'KA' ? '4. არქიტექტურული კონტექსტი' : '4. ARCHITECTURAL CONTEXT'}</span>
        </h4>
        <div className="bg-[#181C1A] border-l-2 border-[#889885] p-2.5 text-[11.5px] font-mono leading-relaxed text-[#B0B7AF]">
          {architecturalContext}
        </div>
      </section>

      {/* 5. RELATED FIELD RECORDS */}
      <section className="space-y-2 pt-1 border-t border-[#303633]">
        <div className="flex items-center justify-between">
          <h4 className="font-mono text-[10px] tracking-widest text-[#B09A69] uppercase font-semibold flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-[#A35243]" />
            <span>{language === 'KA' ? '5. დაკავშირებული საველე მასალები' : '5. RELATED FIELD RECORDS'}</span>
          </h4>
          <span className="font-mono text-[8.5px] text-[#939B92]">
            {mediaRecords.length} {language === 'KA' ? 'ერთეული' : 'ITEMS'}
          </span>
        </div>

        {/* Quick Media Record Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Visual Records Shortcut */}
          {photoRecords.length > 0 && (
            <button
              type="button"
              onClick={() => {
                if (onOpenLightbox) onOpenLightbox(0);
                else if (onSelectTab) onSelectTab('visual');
              }}
              className="p-2 bg-[#181C1A] hover:bg-[#222725] border border-[#303633] hover:border-[#A35243] text-left transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Camera className="w-3.5 h-3.5 text-[#A35243] shrink-0" />
                <div className="truncate">
                  <div className="font-mono text-[9px] font-bold text-[#D8D7CD] group-hover:text-[#A35243]">
                    {language === 'KA' ? 'ვიზუალური ფოტოარქივი' : 'VISUAL FIELD RECORDS'}
                  </div>
                  <div className="font-mono text-[8px] text-[#939B92]">
                    {photoRecords.length} {language === 'KA' ? 'ფოტოჩანაწერი' : 'PHOTOGRAPHIC PLATES'}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3 h-3 text-[#A35243] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </button>
          )}

          {/* Sound Recording Shortcut */}
          {audioRecords.length > 0 && (
            <button
              type="button"
              onClick={() => onSelectTab?.('soundscapes')}
              className="p-2 bg-[#181C1A] hover:bg-[#222725] border border-[#303633] hover:border-[#687565] text-left transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Volume2 className="w-3.5 h-3.5 text-[#687565] shrink-0" />
                <div className="truncate">
                  <div className="font-mono text-[9px] font-bold text-[#D8D7CD] group-hover:text-[#687565]">
                    {language === 'KA' ? 'აკუსტიკური ჩანაწერი' : 'ACOUSTIC RECORDING'}
                  </div>
                  <div className="font-mono text-[8px] text-[#939B92]">
                    {audioRecords[0].duration || 'FIELD REEL'} · {audioRecords.length} {language === 'KA' ? 'ჩანაწერი' : 'RECORD'}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3 h-3 text-[#687565] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </button>
          )}

          {/* Video Records Shortcut */}
          {videoRecords.length > 0 && (
            <button
              type="button"
              onClick={() => onSelectTab?.('visual')}
              className="p-2 bg-[#181C1A] hover:bg-[#222725] border border-[#303633] hover:border-[#A35243] text-left transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Film className="w-3.5 h-3.5 text-[#A35243] shrink-0" />
                <div className="truncate">
                  <div className="font-mono text-[9px] font-bold text-[#D8D7CD] group-hover:text-[#A35243]">
                    {language === 'KA' ? 'კინოფირი (16მმ)' : '16MM CINE RECORD'}
                  </div>
                  <div className="font-mono text-[8px] text-[#939B92]">
                    {videoRecords.length} {language === 'KA' ? 'ვიდეოჩანაწერი' : 'REEL ARCHIVE'}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3 h-3 text-[#A35243] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </button>
          )}
        </div>

        {/* Connected Locations Network */}
        {relatedZones.length > 0 && (
          <div className="pt-2">
            <div className="font-mono text-[8.5px] uppercase tracking-wider text-[#B09A69] font-semibold mb-1.5 flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#A35243]" />
              <span>{language === 'KA' ? 'დაკავშირებული სივრცეები:' : 'CROSS-REFERENCED SPACES:'}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {relatedZones.map((rel) => (
                <button
                  key={rel.id}
                  type="button"
                  onClick={() => onFocusZone?.(rel)}
                  className="px-2 py-1 bg-[#222725] hover:bg-[#A35243] hover:text-white text-[#D8D7CD] border border-[#303633] text-[9px] font-mono transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span className="font-bold">{language === 'KA' ? rel.floorLevelKa : rel.floorLevel}:</span>
                  <span>{language === 'KA' ? rel.titleKa : rel.titleEn}</span>
                  <span className="text-xs">→</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
