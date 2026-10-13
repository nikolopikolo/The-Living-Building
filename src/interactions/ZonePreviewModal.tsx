import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Feather, Trees, User, Wrench, Compass, Volume2, Target, RotateCcw } from 'lucide-react';
import type { InteractiveZone, Language, SpeciesCategory } from '../types';
import { INTERACTIVE_ZONES } from '../data/zonesData';

interface ZonePreviewModalProps {
  zone: InteractiveZone | null;
  onClose: () => void;
  onResetView?: () => void;
  onFocusZone?: (zone: InteractiveZone) => void;
  language: Language;
  allZones?: InteractiveZone[];
}

const getCategoryIcon = (category: SpeciesCategory) => {
  switch (category) {
    case 'fauna':
      return <Feather className="w-3.5 h-3.5 text-[#965D45]" />;
    case 'flora':
      return <Trees className="w-3.5 h-3.5 text-[#74826A]" />;
    case 'human':
      return <User className="w-3.5 h-3.5 text-[#343B37]" />;
    case 'infrastructure':
      return <Wrench className="w-3.5 h-3.5 text-[#262B29]" />;
    default:
      return <Compass className="w-3.5 h-3.5 text-[#AA9C86]" />;
  }
};

const getPerspectiveBadge = (p: 'HUMAN' | 'ANIMAL' | 'PLANT' | 'INFRASTRUCTURE', language: Language) => {
  const map: Record<string, { en: string; ka: string; bg: string; text: string }> = {
    HUMAN: { en: 'HUMAN', ka: 'ადამიანი', bg: 'bg-[#DDD4C3]', text: 'text-[#262B29]' },
    ANIMAL: { en: 'ANIMAL', ka: 'ცხოველი', bg: 'bg-[#C4B7A2]', text: 'text-[#7D4732]' },
    PLANT: { en: 'PLANT', ka: 'მცენარე', bg: 'bg-[#D6DDD1]', text: 'text-[#586450]' },
    INFRASTRUCTURE: { en: 'INFRASTRUCTURE', ka: 'ინფრასტრუქტურა', bg: 'bg-[#E0DAD1]', text: 'text-[#343B37]' },
  };
  const config = map[p] || { en: p, ka: p, bg: 'bg-[#E8E0D1]', text: 'text-[#262B29]' };
  return (
    <span
      key={p}
      className={`px-1.5 py-0.5 text-[9px] font-mono tracking-wider font-semibold uppercase border border-[#343B37]/30 ${config.bg} ${config.text}`}
    >
      {language === 'KA' ? config.ka : config.en}
    </span>
  );
};

export const ZonePreviewModal: React.FC<ZonePreviewModalProps> = ({
  zone,
  onClose,
  onResetView,
  onFocusZone,
  language,
  allZones,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'narrative' | 'soundscapes'>('overview');
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);

  if (!zone) return null;

  const availableZones = allZones || INTERACTIVE_ZONES;
  const relatedZones = (zone.relatedZoneIds || [])
    .map((id) => availableZones.find((z) => z.id === id))
    .filter((z): z is InteractiveZone => Boolean(z));

  const title = language === 'KA' ? zone.titleKa : zone.titleEn;
  const secondaryTitle = language === 'KA' ? zone.titleEn : zone.titleKa;
  const subtitle = language === 'KA' ? zone.subtitleKa : zone.subtitleEn;
  const description = language === 'KA' ? zone.descriptionKa : zone.descriptionEn;
  const extendedNarrative = language === 'KA' ? zone.extendedNarrativeKa : zone.extendedNarrativeEn;
  const architecturalNotes = language === 'KA' ? zone.architecturalNotesKa : zone.architecturalNotesEn;
  const floorBadge = language === 'KA' ? zone.floorLevelKa : zone.floorLevel;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:right-8 z-50 w-[94vw] max-w-[490px] max-h-[85vh] flex flex-col bg-[#F7F3EB] border border-[#343B37] shadow-brutalist p-5 sm:p-6 text-[#262B29]"
        role="dialog"
        aria-labelledby="zone-preview-title"
      >
        {/* Archival Dossier Header Stamp */}
        <div className="flex items-start justify-between border-b border-[#C4B7A2] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-[#262B29] text-[#E8E0D1] uppercase tracking-wider">
                {floorBadge}
              </span>
              <span className="font-mono text-[10px] text-[#7D4732] tracking-wider uppercase font-semibold">
                ARCHIVE REF · TB-{zone.id.toUpperCase()}
              </span>
            </div>
            {zone.isDemonstration && (
              <div className="mt-1 font-mono text-[8px] text-[#586450] uppercase tracking-widest">
                [ DEMONSTRATION ETHNOGRAPHIC RECORD ]
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {onResetView && (
              <button
                onClick={onResetView}
                title={language === 'KA' ? 'სრულ ხედზე დაბრუნება' : 'Return to full building view'}
                className="p-1.5 text-[#343B37] hover:text-[#262B29] hover:bg-[#E8E0D1] border border-transparent hover:border-[#343B37]/30 transition-colors rounded"
              >
                <RotateCcw className="w-3.8 h-3.8" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-[#343B37] hover:text-[#965D45] hover:bg-[#E8E0D1] border border-transparent hover:border-[#343B37]/30 transition-colors rounded"
              aria-label="Close dossier"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Perspective Category Tags */}
        <div className="flex flex-wrap items-center gap-1 mb-3">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#7D4732] mr-1">
            {language === 'KA' ? 'კატეგორიები:' : 'LENSES:'}
          </span>
          {zone.perspectives && zone.perspectives.map((p) => getPerspectiveBadge(p, language))}
        </div>

        {/* Zone Titles */}
        <div className="mb-3">
          <h2
            id="zone-preview-title"
            className="font-editorial text-2xl sm:text-3xl font-bold leading-tight text-[#262B29]"
          >
            {title}
          </h2>
          <div className="font-editorial text-xs sm:text-sm italic text-[#7D4732] mt-0.5 opacity-90">
            {secondaryTitle}
          </div>
          <p className="font-sans text-xs font-medium text-[#586450] mt-1 leading-snug">
            {subtitle}
          </p>
        </div>

        {/* Navigation Tabs within Dossier */}
        <div className="flex items-center border-b border-[#C4B7A2] mb-3.5 text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-1.5 px-2 transition-colors border-b-2 font-medium uppercase tracking-wider text-[11px] ${
              activeTab === 'overview'
                ? 'border-[#965D45] text-[#262B29] font-bold'
                : 'border-transparent text-[#7D4732] hover:text-[#262B29]'
            }`}
          >
            {language === 'KA' ? 'მიმოხილვა' : 'OVERVIEW'}
          </button>
          <button
            onClick={() => setActiveTab('narrative')}
            className={`pb-1.5 px-2 transition-colors border-b-2 font-medium uppercase tracking-wider text-[11px] ${
              activeTab === 'narrative'
                ? 'border-[#965D45] text-[#262B29] font-bold'
                : 'border-transparent text-[#7D4732] hover:text-[#262B29]'
            }`}
          >
            {language === 'KA' ? 'საველე ჩანაწერი' : 'FIELD NARRATIVE'}
          </button>
          {zone.audioRecordings && zone.audioRecordings.length > 0 && (
            <button
              onClick={() => setActiveTab('soundscapes')}
              className={`pb-1.5 px-2 transition-colors border-b-2 font-medium uppercase tracking-wider text-[11px] flex items-center gap-1 ${
                activeTab === 'soundscapes'
                  ? 'border-[#965D45] text-[#262B29] font-bold'
                  : 'border-transparent text-[#7D4732] hover:text-[#262B29]'
              }`}
            >
              <Volume2 className="w-3 h-3 text-[#74826A]" />
              <span>{language === 'KA' ? 'აკუსტიკა' : 'SOUND'}</span>
            </button>
          )}
        </div>

        {/* Scrollable Dossier Content Area */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4 font-sans text-xs md:text-[13px] leading-relaxed text-[#343B37]">
          {activeTab === 'overview' && (
            <>
              {/* Short Ethnographic Abstract */}
              <div className="bg-[#E8E0D1]/60 border-l-2 border-[#343B37] p-2.5">
                <p>{description}</p>
              </div>

              {/* Multispecies Register */}
              <div className="pt-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mono text-[10px] tracking-widest text-[#7D4732] uppercase font-semibold">
                    {language === 'KA' ? 'მულტისახეობრივი თანაარსებობა' : 'MULTISPECIES REGISTER'}
                  </h3>
                  <span className="font-mono text-[9px] text-[#586450]">
                    {zone.multispecies.length} {language === 'KA' ? 'ერთეული' : 'ENTITIES'}
                  </span>
                </div>

                <div className="space-y-2">
                  {zone.multispecies.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#E8E0D1] border border-[#C4B7A2] p-2.5 flex items-start gap-2.5 text-xs"
                    >
                      <div className="mt-0.5 p-1 bg-[#F7F3EB] rounded border border-[#C4B7A2]">
                        {getCategoryIcon(item.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-[#262B29] leading-tight flex items-center justify-between">
                          <span>{language === 'KA' ? item.nameKa : item.nameEn}</span>
                          <span className="font-mono text-[9px] uppercase px-1 py-0.2 bg-[#DDD4C3] text-[#343B37]">
                            {item.category}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#586450] mt-0.5 leading-tight">
                          {language === 'KA' ? item.detailKa : item.detailEn}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Construction Notes */}
              <div className="bg-[#DDD4C3]/50 border-l-2 border-[#965D45] p-2.5">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#7D4732] font-semibold mb-1">
                  {language === 'KA' ? 'არქიტექტურული შენიშვნა' : 'ARCHITECTURAL NOTE'}
                </div>
                <div className="text-[11px] leading-relaxed text-[#343B37]">
                  {architecturalNotes}
                </div>
              </div>

              {/* CONNECTED SPACES Section */}
              {relatedZones.length > 0 && (
                <div className="pt-2 border-t border-[#C4B7A2]/70">
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
                            <span className="text-[#965D45] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-xs font-mono font-bold">
                              →
                            </span>
                          </div>
                          <div className="font-medium text-xs text-[#262B29] group-hover:text-[#965D45] leading-snug line-clamp-2 transition-colors">
                            {relTitle}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}

          {activeTab === 'narrative' && (
            <div className="space-y-3">
              <div className="font-editorial text-sm md:text-base leading-relaxed text-[#262B29] first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-1.5 first-letter:leading-none">
                {extendedNarrative}
              </div>

              {zone.images && zone.images.length > 0 && (
                <div className="mt-3 p-2 bg-[#E8E0D1] border border-[#C4B7A2] text-[11px] font-mono text-[#586450]">
                  <div className="font-bold text-[#7D4732] uppercase text-[10px]">
                    ARCHIVAL REFERENCE: {zone.images[0].captionEn} ({zone.images[0].year || 'UNDATED'})
                  </div>
                  <div className="text-[10px] text-[#343B37] mt-0.5">
                    {language === 'KA' ? zone.images[0].fieldNoteKa : zone.images[0].fieldNoteEn}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'soundscapes' && zone.audioRecordings && (
            <div className="space-y-3">
              <p className="text-[11px] text-[#586450] italic">
                {language === 'KA'
                  ? 'საველე აკუსტიკური დაკვირვება: გარემოს ხმები და მულტისახეობრივი ექო'
                  : 'Acoustic field recordings documenting ambient environmental resonance and species acoustics.'}
              </p>

              {zone.audioRecordings.map((audio) => {
                const isPlaying = isPlayingAudio === audio.id;
                return (
                  <div
                    key={audio.id}
                    className="p-3 bg-[#E8E0D1] border border-[#C4B7A2] space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-xs font-semibold text-[#262B29]">
                        {language === 'KA' ? audio.titleKa : audio.titleEn}
                      </div>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 bg-[#DDD4C3] text-[#7D4732]">
                        {audio.duration}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#586450]">
                      {language === 'KA' ? audio.descriptionKa : audio.descriptionEn}
                    </p>

                    <button
                      onClick={() => setIsPlayingAudio(isPlaying ? null : audio.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-medium border transition-colors ${
                        isPlaying
                          ? 'bg-[#965D45] text-[#E8E0D1] border-[#965D45]'
                          : 'bg-[#F7F3EB] text-[#262B29] border-[#343B37] hover:bg-[#DDD4C3]'
                      }`}
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>{isPlaying ? 'PAUSE DEMO STREAM' : 'PLAY FIELD RECORDING'}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 mt-3 border-t border-[#C4B7A2] flex items-center justify-between gap-2">
          {onFocusZone ? (
            <button
              onClick={() => onFocusZone(zone)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#262B29] hover:bg-[#343B37] text-[#E8E0D1] text-xs font-mono font-semibold tracking-wider uppercase transition-colors"
            >
              <Target className="w-3.5 h-3.5 text-[#C4B7A2]" />
              <span>{language === 'KA' ? 'ფოკუსირება' : 'FOCUS LOCATION'}</span>
            </button>
          ) : (
            <div />
          )}

          {onResetView && (
            <button
              onClick={onResetView}
              className="px-2.5 py-1.5 bg-[#E8E0D1] hover:bg-[#DDD4C3] border border-[#343B37] text-[#262B29] text-xs font-mono tracking-wider uppercase transition-colors"
            >
              {language === 'KA' ? 'სრული ხედი' : 'FULL VIEW'}
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
