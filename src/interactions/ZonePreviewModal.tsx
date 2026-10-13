import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Feather, Trees, User, Wrench, Compass, Volume2, Camera, Film, Target, RotateCcw, ArrowRight } from 'lucide-react';
import type { InteractiveZone, Language, SpeciesCategory } from '../types';
import { INTERACTIVE_ZONES } from '../data/zonesData';
import {
  VisualFieldArchive,
  ArchivalLightbox,
  ArchivalAudioPlayer,
  ArchivalVideoPlayer,
  FieldNarrativeView,
  ConnectedSpaces,
  MediaPlaceholderPlate,
} from '../components/archive';

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
  const [activeTab, setActiveTab] = useState<'overview' | 'narrative' | 'visual' | 'soundscapes'>('overview');
  const [standaloneLightboxIndex, setStandaloneLightboxIndex] = useState<number | null>(null);

  if (!zone) return null;

  const availableZones = allZones || INTERACTIVE_ZONES;

  const title = language === 'KA' ? zone.titleKa : zone.titleEn;
  const secondaryTitle = language === 'KA' ? zone.titleEn : zone.titleKa;
  const subtitle = language === 'KA' ? zone.subtitleKa : zone.subtitleEn;
  const description = language === 'KA' ? zone.descriptionKa : zone.descriptionEn;
  const architecturalNotes = language === 'KA' ? zone.architecturalNotesKa : zone.architecturalNotesEn;
  const floorBadge = language === 'KA' ? zone.floorLevelKa : zone.floorLevel;

  // Media Collections
  const mediaRecords = zone.mediaRecords || [];
  const photoRecords = mediaRecords.filter((m) => m.type === 'image');
  const audioRecords = mediaRecords.filter((m) => m.type === 'audio');
  const videoRecords = mediaRecords.filter((m) => m.type === 'video');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:right-8 z-40 w-[94vw] max-w-[500px] max-h-[86vh] flex flex-col bg-[#F7F3EB] border border-[#343B37] shadow-brutalist p-4 sm:p-6 text-[#262B29]"
        role="dialog"
        aria-labelledby="zone-preview-title"
      >
        {/* Archival Dossier Header Stamp */}
        <div className="flex items-start justify-between border-b border-[#C4B7A2] pb-2.5 mb-2.5">
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
                type="button"
                onClick={onResetView}
                title={language === 'KA' ? 'სრულ ხედზე დაბრუნება' : 'Return to full building view'}
                className="p-1.5 text-[#343B37] hover:text-[#262B29] hover:bg-[#E8E0D1] border border-transparent hover:border-[#343B37]/30 transition-colors rounded"
                aria-label="Reset viewport"
              >
                <RotateCcw className="w-3.8 h-3.8" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#343B37] hover:text-[#965D45] hover:bg-[#E8E0D1] border border-transparent hover:border-[#343B37]/30 transition-colors rounded"
              aria-label="Close dossier"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Perspective Category Tags */}
        <div className="flex flex-wrap items-center gap-1 mb-2.5">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#7D4732] mr-1">
            {language === 'KA' ? 'კატეგორიები:' : 'LENSES:'}
          </span>
          {zone.perspectives && zone.perspectives.map((p) => getPerspectiveBadge(p, language))}
        </div>

        {/* Zone Titles */}
        <div className="mb-2.5">
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

        {/* Archival Research Dossier Navigation Tabs */}
        <div className="flex items-center border-b border-[#C4B7A2] mb-3 text-xs font-mono overflow-x-auto select-none">
          {/* 1. OVERVIEW Tab */}
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`pb-1.5 px-2 transition-colors border-b-2 font-medium uppercase tracking-wider text-[10.5px] sm:text-[11px] shrink-0 ${
              activeTab === 'overview'
                ? 'border-[#965D45] text-[#262B29] font-bold'
                : 'border-transparent text-[#7D4732] hover:text-[#262B29]'
            }`}
          >
            {language === 'KA' ? 'მიმოხილვა' : 'OVERVIEW'}
          </button>

          {/* 2. FIELD NARRATIVE Tab */}
          <button
            type="button"
            onClick={() => setActiveTab('narrative')}
            className={`pb-1.5 px-2 transition-colors border-b-2 font-medium uppercase tracking-wider text-[10.5px] sm:text-[11px] shrink-0 ${
              activeTab === 'narrative'
                ? 'border-[#965D45] text-[#262B29] font-bold'
                : 'border-transparent text-[#7D4732] hover:text-[#262B29]'
            }`}
          >
            {language === 'KA' ? 'საველე ჩანაწერი' : 'FIELD NARRATIVE'}
          </button>

          {/* 3. VISUAL RECORDS Tab */}
          <button
            type="button"
            onClick={() => setActiveTab('visual')}
            className={`pb-1.5 px-2 transition-colors border-b-2 font-medium uppercase tracking-wider text-[10.5px] sm:text-[11px] shrink-0 flex items-center gap-1 ${
              activeTab === 'visual'
                ? 'border-[#965D45] text-[#262B29] font-bold'
                : 'border-transparent text-[#7D4732] hover:text-[#262B29]'
            }`}
          >
            <Camera className="w-3 h-3 text-[#965D45]" />
            <span>{language === 'KA' ? 'ფოტოარქივი' : 'VISUAL'}</span>
            {photoRecords.length > 0 && (
              <span className="text-[8.5px] px-1 py-0.2 bg-[#DDD4C3] text-[#343B37] rounded-xs font-semibold">
                {photoRecords.length}
              </span>
            )}
          </button>

          {/* 4. SOUND Tab */}
          <button
            type="button"
            onClick={() => setActiveTab('soundscapes')}
            className={`pb-1.5 px-2 transition-colors border-b-2 font-medium uppercase tracking-wider text-[10.5px] sm:text-[11px] shrink-0 flex items-center gap-1 ${
              activeTab === 'soundscapes'
                ? 'border-[#965D45] text-[#262B29] font-bold'
                : 'border-transparent text-[#7D4732] hover:text-[#262B29]'
            }`}
          >
            <Volume2 className="w-3 h-3 text-[#74826A]" />
            <span>{language === 'KA' ? 'აკუსტიკა' : 'SOUND'}</span>
          </button>
        </div>

        {/* Scrollable Dossier Content Area */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4 font-sans text-xs md:text-[13px] leading-relaxed text-[#343B37]">
          {/* TAB 1: OVERVIEW */}
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

              {/* Visual Field Records Preview Strip */}
              {photoRecords.length > 0 && (
                <div className="pt-2 border-t border-[#C4B7A2]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-mono text-[10px] tracking-widest text-[#7D4732] uppercase font-semibold flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-[#965D45]" />
                      <span>{language === 'KA' ? 'ვიზუალური საველე ჩანაწერები' : 'VISUAL FIELD RECORDS'}</span>
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveTab('visual')}
                      className="font-mono text-[9px] text-[#965D45] hover:text-[#262B29] flex items-center gap-0.5"
                    >
                      <span>{language === 'KA' ? 'სრულად' : 'VIEW ALL'}</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {photoRecords.slice(0, 2).map((record, index) => (
                      <button
                        key={record.id}
                        type="button"
                        onClick={() => setStandaloneLightboxIndex(index)}
                        className="group text-left border border-[#C4B7A2] hover:border-[#965D45] overflow-hidden bg-[#E8E0D1] transition-all cursor-pointer"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden">
                          <MediaPlaceholderPlate
                            record={record}
                            language={language}
                            aspectRatio="card"
                            compact={true}
                          />
                        </div>
                        <div className="p-1.5 bg-[#F7F3EB] border-t border-[#C4B7A2]/50">
                          <div className="font-mono text-[8px] text-[#7D4732] font-bold truncate">
                            {record.id.toUpperCase()}
                          </div>
                          <div className="font-editorial text-[11px] font-bold text-[#262B29] truncate group-hover:text-[#965D45]">
                            {language === 'KA' && record.titleKa ? record.titleKa : record.title}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CONNECTED SPACES Section */}
              <ConnectedSpaces
                currentZone={zone}
                allZones={availableZones}
                language={language}
                onFocusZone={onFocusZone}
              />
            </>
          )}

          {/* TAB 2: FIELD NARRATIVE */}
          {activeTab === 'narrative' && (
            <FieldNarrativeView
              zone={zone}
              language={language}
              onFocusZone={onFocusZone}
              onSelectTab={setActiveTab}
              onOpenLightbox={(idx) => setStandaloneLightboxIndex(idx)}
              allZones={availableZones}
            />
          )}

          {/* TAB 3: VISUAL RECORDS */}
          {activeTab === 'visual' && (
            <div className="space-y-4">
              {/* Visual Field Records Section */}
              <VisualFieldArchive
                records={mediaRecords}
                language={language}
              />

              {/* Video Records Section */}
              {videoRecords.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#C4B7A2]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-[10px] tracking-widest text-[#7D4732] uppercase font-semibold flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-[#7D4732]" />
                      <span>{language === 'KA' ? 'კინოჩანაწერები (16მმ)' : 'CINEMATIC FIELD RECORDS'}</span>
                    </h3>
                    <span className="font-mono text-[9px] text-[#586450]">
                      {videoRecords.length} {language === 'KA' ? 'ფირი' : 'REELS'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {videoRecords.map((vid) => (
                      <ArchivalVideoPlayer
                        key={vid.id}
                        record={vid}
                        language={language}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: SOUND */}
          {activeTab === 'soundscapes' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#C4B7A2] pb-1.5">
                <h3 className="font-mono text-[10px] tracking-widest text-[#7D4732] uppercase font-semibold flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-[#74826A]" />
                  <span>{language === 'KA' ? 'აკუსტიკური საველე არქივი' : 'ACOUSTIC FIELD RECORDINGS'}</span>
                </h3>
                <span className="font-mono text-[9px] text-[#586450]">
                  {audioRecords.length} {language === 'KA' ? 'ჩანაწერი' : 'RECORDINGS'}
                </span>
              </div>

              <p className="text-[11px] text-[#586450] italic">
                {language === 'KA'
                  ? 'საველე აკუსტიკური ინსტრუმენტი: გარემოს რეზონანსი, ინფრასტრუქტურის ვიბრაცია და მულტისახეობრივი ექო.'
                  : 'Archival field recording player documenting ambient environmental resonance and multispecies acoustics.'}
              </p>

              {audioRecords.length > 0 ? (
                audioRecords.map((audio) => (
                  <ArchivalAudioPlayer
                    key={audio.id}
                    record={audio}
                    language={language}
                  />
                ))
              ) : (
                <div className="p-4 bg-[#E8E0D1]/60 border border-[#C4B7A2] text-center font-mono text-xs text-[#586450]">
                  {language === 'KA'
                    ? 'აკუსტიკური ჩანაწერები დამუშავების პროცესშია'
                    : 'No acoustic field recordings currently ingested.'}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-2.5 mt-2.5 border-t border-[#C4B7A2] flex items-center justify-between gap-2">
          {onFocusZone ? (
            <button
              type="button"
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
              type="button"
              onClick={onResetView}
              className="px-2.5 py-1.5 bg-[#E8E0D1] hover:bg-[#DDD4C3] border border-[#343B37] text-[#262B29] text-xs font-mono tracking-wider uppercase transition-colors"
            >
              {language === 'KA' ? 'სრული ხედი' : 'FULL VIEW'}
            </button>
          )}
        </div>

        {/* Standalone Lightbox for clicks from Overview or Narrative */}
        {photoRecords.length > 0 && standaloneLightboxIndex !== null && (
          <ArchivalLightbox
            records={photoRecords}
            currentIndex={standaloneLightboxIndex}
            isOpen={true}
            onClose={() => setStandaloneLightboxIndex(null)}
            onNavigate={(newIdx) => setStandaloneLightboxIndex(newIdx)}
            language={language}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
