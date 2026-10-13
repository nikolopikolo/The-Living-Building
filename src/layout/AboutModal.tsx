import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, Eye, Compass, BookOpen } from 'lucide-react';
import type { Language } from '../types';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#151817]/85 backdrop-blur-[2px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#222725] border border-[#303633] shadow-brutalist p-6 md:p-8 text-[#D8D7CD]"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#303633] pb-4 mb-6">
            <div>
              <div className="font-mono text-[10px] tracking-widest text-[#B09A69] uppercase font-semibold mb-1">
                GEOLAB ARCHIVE · ARCHITECTURAL ETHNOGRAPHY DOSSIER
              </div>
              <h2 className="font-editorial text-3xl md:text-4xl font-bold uppercase text-[#D8D7CD] leading-tight">
                {language === 'KA' ? 'პროექტის შესახებ' : 'ABOUT THE LIVING BUILDING'}
              </h2>
              <div className="font-editorial text-base italic text-[#687565] mt-0.5">
                {language === 'KA'
                  ? 'ცოცხალი შენობა: მულტისახეობრივი თანაცხოვრება თბილისში'
                  : 'A Multispecies Exploration of Tbilisi\'s Residential Architecture'}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#939B92] hover:text-[#A35243] hover:bg-[#181C1A] transition-colors border border-transparent hover:border-[#303633]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Exhibition Content */}
          <div className="space-y-5 text-xs md:text-sm font-sans leading-relaxed text-[#D8D7CD]">
            <p>
              {language === 'KA'
                ? '„ცოცხალი შენობა“ არის GeoLab-ის ციფრული ეთნოგრაფიული პროექტი, რომელიც იკვლევს მულტისახეობრივ თანაცხოვრებას თბილისის საბჭოთა პერიოდის საცხოვრებელ კორპუსებსა და ეზოებში.'
                : 'The Living Building is a digital ethnographic exhibition exploring multispecies coexistence inside Soviet-era residential apartment blocks and traditional courtyards in Tbilisi, Georgia.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              <div className="bg-[#181C1A] border border-[#303633] p-3.5">
                <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] font-bold text-[#D8D7CD] uppercase">
                  <Building2 className="w-4 h-4 text-[#A35243]" />
                  <span>{language === 'KA' ? 'არქიტექტურა როგორც ეკოსისტემა' : 'Architecture as Ecosystem'}</span>
                </div>
                <p className="text-xs text-[#939B92] leading-snug">
                  {language === 'KA'
                    ? 'შენობა არ არის იზოლირებული ბეტონის ობიექტი. ის არის ცოცხალი გარემო, სადაც ერთმანეთს ერწყმის ბეტონი, მცენარეები, ცხოველები და ადამიანები.'
                    : 'The building is not an isolated concrete monument, but a porous metabolism woven together by precast panels, soil, roots, heating steam, and animal pathways.'}
                </p>
              </div>

              <div className="bg-[#181C1A] border border-[#303633] p-3.5">
                <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] font-bold text-[#D8D7CD] uppercase">
                  <Eye className="w-4 h-4 text-[#687565]" />
                  <span>{language === 'KA' ? 'მულტისახეობრივი ლინზა' : 'Multispecies Lens'}</span>
                </div>
                <p className="text-xs text-[#939B92] leading-snug">
                  {language === 'KA'
                    ? 'ჩვენ ვაკვირდებით კატებს სადარბაზოებში, ნამგალებს სახურავებზე, ვაზს აივნებზე და მიწისქვეშა მილებს, როგორც ერთიან ეკოლოგიას.'
                    : 'Attending to common swifts nesting beneath zinc hoods, community cats warming themselves on terrazzo stair landings, and grapevines shading summer concrete.'}
                </p>
              </div>
            </div>

            <p className="text-[#939B92]">
              {language === 'KA'
                ? 'ეს ინტერაქციული ჭრილი წარმოადგენს საველე არქივის სრულ ეთნოგრაფიულ დოკუმენტაციას, მათ შორის საველე აუდიო ჩანაწერებს, ფოტოარქივებს და ზეპირ ისტორიებს.'
                : 'This interactive architectural cutaway presents comprehensive ethnographic fieldwork documentation, including field audio phonography, archival contact sheets, and oral histories.'}
            </p>

            {/* Curatorial Attribution */}
            <div className="border-t border-[#303633] pt-4 mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-[#939B92]">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#A35243]" />
                <span>GEOLAB RESEARCH INITIATIVE · TBILISI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#687565]" />
                <span>BRUTALIST ARCHITECTURE × DOCUMENTARY ETHNOGRAPHY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
