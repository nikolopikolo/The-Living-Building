import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Feather, Trees, User, Wrench, Compass } from 'lucide-react';
import type { InteractiveZone, Language, SpeciesCategory } from '../types';

interface ZonePreviewModalProps {
  zone: InteractiveZone | null;
  onClose: () => void;
  language: Language;
}

const getCategoryIcon = (category: SpeciesCategory) => {
  switch (category) {
    case 'fauna':
      return <Feather className="w-3.5 h-3.5 text-rust" />;
    case 'flora':
      return <Trees className="w-3.5 h-3.5 text-moss" />;
    case 'human':
      return <User className="w-3.5 h-3.5 text-ink" />;
    case 'infrastructure':
      return <Wrench className="w-3.5 h-3.5 text-charcoal" />;
    default:
      return <Compass className="w-3.5 h-3.5 text-concrete-dark" />;
  }
};

export const ZonePreviewModal: React.FC<ZonePreviewModalProps> = ({
  zone,
  onClose,
  language,
}) => {
  if (!zone) return null;

  const title = language === 'KA' ? zone.titleKa : zone.titleEn;
  const secondaryTitle = language === 'KA' ? zone.titleEn : zone.titleKa;
  const subtitle = language === 'KA' ? zone.subtitleKa : zone.subtitleEn;
  const description = language === 'KA' ? zone.descriptionKa : zone.descriptionEn;
  const architecturalNotes = language === 'KA' ? zone.architecturalNotesKa : zone.architecturalNotesEn;
  const floorBadge = language === 'KA' ? zone.floorLevelKa : zone.floorLevel;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 right-6 md:right-8 z-50 w-[92vw] max-w-[460px] max-h-[82vh] overflow-y-auto bg-[#F7F3EB] border border-[#343B37] shadow-brutalist p-6 md:p-7 text-[#262B29]"
        role="dialog"
        aria-labelledby="zone-preview-title"
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-[#C4B7A2] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-[#262B29] text-[#E8E0D1] uppercase tracking-wider">
              {floorBadge}
            </span>
            <span className="font-mono text-[11px] text-[#7D4732] tracking-wider uppercase">
              ZONE ID: {zone.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#343B37] hover:text-[#965D45] hover:bg-[#E8E0D1] transition-colors rounded"
            aria-label="Close zone preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Zone Titles */}
        <div className="mb-4">
          <h2
            id="zone-preview-title"
            className="font-editorial text-2xl md:text-3xl font-semibold leading-tight text-[#262B29]"
          >
            {title}
          </h2>
          <div className="font-editorial text-sm italic text-[#7D4732] mt-0.5 opacity-90">
            {secondaryTitle}
          </div>
          <p className="font-sans text-xs font-medium text-[#586450] mt-1.5 leading-snug">
            {subtitle}
          </p>
        </div>

        {/* Ethnographic Summary */}
        <div className="text-xs md:text-[13px] leading-relaxed text-[#343B37] space-y-2 mb-5 font-sans">
          <p>{description}</p>
        </div>

        {/* Multispecies Entanglement Register */}
        <div className="border-t border-[#C4B7A2] pt-3.5 mb-4">
          <div className="flex items-center justify-between mb-2.5">
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

        {/* Architectural Notes */}
        <div className="bg-[#DDD4C3]/50 border-l-2 border-[#965D45] p-2.5 mb-4">
          <div className="font-mono text-[9px] uppercase tracking-wider text-[#7D4732] font-semibold mb-1">
            {language === 'KA' ? 'არქიტექტურული შენიშვნა' : 'ARCHITECTURAL NOTE'}
          </div>
          <div className="font-sans text-[11px] leading-relaxed text-[#343B37]">
            {architecturalNotes}
          </div>
        </div>

        {/* Prototype Phase Note */}
        <div className="flex items-center justify-between pt-2 border-t border-[#C4B7A2] text-[10px] font-mono text-[#74826A]">
          <span>PHASE 1 · SPATIAL PREVIEW</span>
          <span className="italic">GEOLAB RESEARCH</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
