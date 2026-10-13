import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, AlertCircle, Camera } from 'lucide-react';
import type { MediaRecord, Language } from '../../types';

interface ArchivalLightboxProps {
  records: MediaRecord[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  language: Language;
}

export const ArchivalLightbox: React.FC<ArchivalLightboxProps> = ({
  records,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  language,
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentRecord = records[currentIndex];

  const handlePrev = useCallback(() => {
    if (records.length <= 1) return;
    const prev = (currentIndex - 1 + records.length) % records.length;
    onNavigate(prev);
  }, [currentIndex, records.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (records.length <= 1) return;
    const next = (currentIndex + 1) % records.length;
    onNavigate(next);
  }, [currentIndex, records.length, onNavigate]);

  // Reset image status on index change
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [currentIndex]);

  // Focus close button on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !currentRecord) return null;

  const title = language === 'KA' && currentRecord.titleKa ? currentRecord.titleKa : currentRecord.title;
  const caption = language === 'KA' && currentRecord.captionKa ? currentRecord.captionKa : currentRecord.caption;
  const credit = language === 'KA' && currentRecord.creditKa ? currentRecord.creditKa : currentRecord.credit;
  const notes = language === 'KA' && currentRecord.notesKa ? currentRecord.notesKa : currentRecord.notes;
  const format = currentRecord.mediaFormat || '35mm Film Negative';

  const hasRealImage = Boolean(currentRecord.src && !currentRecord.isPlaceholder && !imageError);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#262B29]/90 backdrop-blur-xs select-none"
        role="dialog"
        aria-modal="true"
        aria-label={`${language === 'KA' ? 'არქივის ვიზუალური ჩანაწერი' : 'Archival Field Record'}: ${title}`}
      >
        {/* Click outside to close backdrop */}
        <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-[780px] max-h-[92vh] flex flex-col bg-[#F7F3EB] border border-[#343B37] shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Archival Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#E8E0D1] border-b border-[#C4B7A2]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-[#262B29] text-[#E8E0D1] uppercase tracking-wider">
                RECORD {String(currentIndex + 1).padStart(2, '0')} / {String(records.length).padStart(2, '0')}
              </span>
              <span className="font-mono text-[9px] text-[#7D4732] font-semibold uppercase tracking-wider hidden sm:inline">
                REF: {currentRecord.id.toUpperCase()}
              </span>
              {currentRecord.date && (
                <span className="font-mono text-[9px] text-[#586450] hidden sm:inline">
                  [{currentRecord.date}]
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 bg-[#DDD4C3] text-[#343B37] border border-[#343B37]/20">
                {format}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-1 text-[#343B37] hover:text-[#965D45] hover:bg-[#DDD4C3] border border-transparent hover:border-[#343B37]/30 transition-colors rounded"
                aria-label={language === 'KA' ? 'დახურვა (Esc)' : 'Close record (Escape)'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Visual Record Display */}
          <div className="relative flex-1 bg-[#262B29] min-h-[260px] sm:min-h-[340px] max-h-[58vh] flex items-center justify-center p-3 sm:p-5 overflow-hidden">
            {hasRealImage ? (
              <div className="relative max-w-full max-h-full flex items-center justify-center">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-[#C4B7A2] uppercase tracking-widest">
                    [ LOADING ARCHIVAL PLATE... ]
                  </div>
                )}
                <img
                  src={currentRecord.src}
                  alt={title}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`max-h-[52vh] max-w-full object-contain border border-[#C4B7A2]/40 transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ) : (
              /* Tasteful Archival Specimen Plate Placeholder */
              <div
                className="w-full max-w-[560px] aspect-[4/3] bg-[#E8E0D1] border-2 border-[#343B37] p-5 sm:p-7 flex flex-col justify-between shadow-inner relative"
                style={{
                  backgroundImage: `
                    radial-gradient(#C4B7A2 1px, transparent 1px),
                    linear-gradient(to right, rgba(52, 59, 55, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(52, 59, 55, 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '16px 16px, 32px 32px, 32px 32px',
                }}
              >
                {/* Calibration Marks */}
                <div className="absolute top-2 left-2 font-mono text-[9px] text-[#343B37]/60">┼</div>
                <div className="absolute top-2 right-2 font-mono text-[9px] text-[#343B37]/60">┼</div>
                <div className="absolute bottom-2 left-2 font-mono text-[9px] text-[#343B37]/60">┼</div>
                <div className="absolute bottom-2 right-2 font-mono text-[9px] text-[#343B37]/60">┼</div>

                {/* Specimen Header */}
                <div className="flex items-center justify-between border-b border-[#343B37]/30 pb-2">
                  <div className="font-mono text-[9px] font-bold tracking-widest text-[#7D4732] uppercase">
                    ARCHIVAL SPECIMEN · PLATE {String(currentIndex + 1).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[8px] text-[#586450] uppercase">
                    SERIES: TBILISI-SOVIET-RESIDENTIAL
                  </div>
                </div>

                {/* Center Graphic */}
                <div className="flex-1 flex flex-col items-center justify-center my-3 text-center px-4">
                  <div className="p-3 rounded-full bg-[#F7F3EB] border border-[#343B37] mb-2 shadow-xs">
                    <Camera className="w-8 h-8 text-[#965D45]" />
                  </div>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#262B29] leading-snug">
                    {title}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#DDD4C3] border border-[#965D45] text-[#7D4732] font-mono text-[9px] uppercase tracking-wider font-semibold">
                    <AlertCircle className="w-3 h-3 text-[#965D45]" />
                    <span>
                      {language === 'KA'
                        ? 'სადემონსტრაციო ეგზემპლარი — ორიგინალი ფოტოარქივი მუშავდება'
                        : 'DEMONSTRATION PLACEHOLDER — ARCHIVAL FIELD SCAN PENDING'}
                    </span>
                  </div>
                  <p className="mt-2 text-[10px] font-mono text-[#586450] max-w-[420px] leading-relaxed">
                    {language === 'KA'
                      ? 'ეთნოგრაფიული ეთიკის დაცვით, საიტზე არ განთავსდება ყალბი ან არაავთენტური ფოტომასალა.'
                      : 'To preserve ethnographic integrity, generic stock photography is excluded. Archival photographic records will be displayed once digitized.'}
                  </p>
                </div>

                {/* Specimen Footer Stamp */}
                <div className="flex items-center justify-between border-t border-[#343B37]/30 pt-2 font-mono text-[8.5px] text-[#343B37]">
                  <span>FORMAT: {format}</span>
                  <span className="text-[#7D4732] font-bold">STATE ARCHIVE ACCREDITED</span>
                </div>
              </div>
            )}

            {/* Previous Navigation Button */}
            {records.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[#F7F3EB]/90 hover:bg-[#F7F3EB] text-[#262B29] border border-[#343B37] shadow-md transition-transform hover:-translate-x-0.5"
                aria-label={language === 'KA' ? 'წინა ჩანაწერი (მარცხენა ისარი)' : 'Previous record (Left Arrow)'}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Next Navigation Button */}
            {records.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#F7F3EB]/90 hover:bg-[#F7F3EB] text-[#262B29] border border-[#343B37] shadow-md transition-transform hover:translate-x-0.5"
                aria-label={language === 'KA' ? 'შემდეგი ჩანაწერი (მარჯვენა ისარი)' : 'Next record (Right Arrow)'}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Dossier Caption & Archival Field Metadata */}
          <div className="p-4 sm:p-5 bg-[#F7F3EB] border-t border-[#C4B7A2] overflow-y-auto max-h-[30vh]">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <h4 className="font-editorial text-base sm:text-lg font-bold text-[#262B29] leading-tight">
                {title}
              </h4>
              {credit && (
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#7D4732] bg-[#E8E0D1] px-2 py-0.5 border border-[#C4B7A2] shrink-0">
                  {credit}
                </span>
              )}
            </div>

            <p className="font-sans text-xs text-[#343B37] leading-relaxed mb-2.5">
              {caption}
            </p>

            {notes && (
              <div className="bg-[#E8E0D1] border-l-2 border-[#965D45] p-2 text-[11px] font-mono text-[#586450] leading-snug">
                <span className="font-bold uppercase text-[#7D4732] mr-1">
                  {language === 'KA' ? 'საველე შენიშვნა:' : 'FIELD NOTE:'}
                </span>
                {notes}
              </div>
            )}

            {/* Keyboard navigation hint */}
            <div className="mt-3 pt-2 border-t border-[#C4B7A2]/50 flex items-center justify-between text-[8px] font-mono text-[#586450]">
              <span>NAV: ← PREVIOUS RECORD | NEXT RECORD →</span>
              <span>PRESS [ESC] TO CLOSE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
