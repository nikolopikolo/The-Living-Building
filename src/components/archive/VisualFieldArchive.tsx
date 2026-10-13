import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import type { MediaRecord, Language } from '../../types';
import { MediaPlaceholderPlate } from './MediaPlaceholderPlate';
import { ArchivalLightbox } from './ArchivalLightbox';

interface VisualFieldArchiveProps {
  records: MediaRecord[];
  language: Language;
  onSelectRecord?: (record: MediaRecord) => void;
  className?: string;
}

export const VisualFieldArchive: React.FC<VisualFieldArchiveProps> = ({
  records,
  language,
  className = '',
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photoRecords = records.filter((r) => r.type === 'image');

  if (photoRecords.length === 0) {
    return (
      <div className={`p-4 bg-[#181C1A] border border-[#303633] text-center ${className}`}>
        <Camera className="w-5 h-5 text-[#A35243] mx-auto mb-1.5 opacity-70" />
        <p className="font-mono text-xs text-[#939B92]">
          {language === 'KA'
            ? 'ვიზუალური საველე ჩანაწერები დამუშავების პროცესშია'
            : 'No visual field records currently ingested for this location.'}
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Section Title Header */}
      <div className="flex items-center justify-between border-b border-[#303633] pb-1.5">
        <h3 className="font-mono text-[10px] tracking-widest text-[#B09A69] uppercase font-semibold flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5 text-[#A35243]" />
          <span>{language === 'KA' ? 'ვიზუალური საველე ჩანაწერები' : 'VISUAL FIELD RECORDS'}</span>
        </h3>
        <span className="font-mono text-[9px] text-[#939B92]">
          {photoRecords.length} {language === 'KA' ? 'ფოტოჩანაწერი' : 'RECORDS'}
        </span>
      </div>

      {/* Grid of Photograph Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {photoRecords.map((record, index) => {
          const title = language === 'KA' && record.titleKa ? record.titleKa : record.title;
          const caption = language === 'KA' && record.captionKa ? record.captionKa : record.caption;
          const credit = language === 'KA' && record.creditKa ? record.creditKa : record.credit;
          const format = record.mediaFormat || '35mm Film Scan';

          return (
            <div
              key={record.id}
              className="bg-[#181C1A] border border-[#303633] hover:border-[#A35243] transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Clickable Media Preview */}
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="relative w-full aspect-[4/3] bg-[#151817] cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-[#A35243] block text-left"
                aria-label={`${language === 'KA' ? 'დიდ ზომაში ნახვა' : 'Inspect plate'}: ${title}`}
              >
                {record.src && !record.isPlaceholder ? (
                  <img
                    src={record.src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                ) : (
                  <MediaPlaceholderPlate
                    record={record}
                    language={language}
                    aspectRatio="card"
                    compact={true}
                  />
                )}

                {/* Inspect Overlay Pill */}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-[#151817]/90 text-[#D8D7CD] border border-[#303633] font-mono text-[8px] uppercase tracking-wider flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-2.5 h-2.5 text-[#B09A69]" />
                  <span>{language === 'KA' ? 'დათვალიერება' : 'EXPAND'}</span>
                </div>
              </button>

              {/* Archival Record Metadata Panel */}
              <div className="p-2.5 flex-1 flex flex-col justify-between space-y-1.5 bg-[#222725]">
                <div>
                  <div className="flex items-center justify-between text-[8px] font-mono text-[#939B92] mb-0.5">
                    <span className="font-bold uppercase text-[#B09A69]">
                      {record.id.toUpperCase()}
                    </span>
                    <span className="px-1 py-0.2 bg-[#181C1A] text-[#939B92] border border-[#303633] uppercase">
                      {format}
                    </span>
                  </div>

                  <h4 className="font-editorial text-xs font-bold text-[#D8D7CD] leading-snug line-clamp-1 group-hover:text-[#A35243] transition-colors">
                    {title}
                  </h4>

                  <p className="font-sans text-[10.5px] text-[#939B92] line-clamp-2 leading-tight mt-0.5">
                    {caption}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-[#303633] flex items-center justify-between text-[8px] font-mono text-[#939B92]">
                  <span className="truncate max-w-[65%]">
                    {credit ? `© ${credit}` : 'SOVIET ARCHIVE'}
                  </span>
                  {record.date && <span className="text-[#A35243] font-semibold">{record.date}</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Accessible Fullscreen Lightbox */}
      <ArchivalLightbox
        records={photoRecords}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        language={language}
      />
    </div>
  );
};
