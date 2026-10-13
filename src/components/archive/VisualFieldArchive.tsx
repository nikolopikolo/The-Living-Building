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
      <div className={`p-4 bg-[#E8E0D1]/60 border border-[#C4B7A2] text-center ${className}`}>
        <Camera className="w-5 h-5 text-[#965D45] mx-auto mb-1.5 opacity-70" />
        <p className="font-mono text-xs text-[#586450]">
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
      <div className="flex items-center justify-between border-b border-[#C4B7A2] pb-1.5">
        <h3 className="font-mono text-[10px] tracking-widest text-[#7D4732] uppercase font-semibold flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5 text-[#965D45]" />
          <span>{language === 'KA' ? 'ვიზუალური საველე ჩანაწერები' : 'VISUAL FIELD RECORDS'}</span>
        </h3>
        <span className="font-mono text-[9px] text-[#586450]">
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
              className="bg-[#E8E0D1] border border-[#C4B7A2] hover:border-[#965D45] transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Clickable Media Preview */}
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="relative w-full aspect-[4/3] bg-[#262B29] cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-[#965D45] block text-left"
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
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-[#262B29]/80 text-[#E8E0D1] font-mono text-[8px] uppercase tracking-wider flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-2.5 h-2.5 text-[#C4B7A2]" />
                  <span>{language === 'KA' ? 'დათვალიერება' : 'EXPAND'}</span>
                </div>
              </button>

              {/* Archival Record Metadata Panel */}
              <div className="p-2.5 flex-1 flex flex-col justify-between space-y-1.5 bg-[#F7F3EB]">
                <div>
                  <div className="flex items-center justify-between text-[8px] font-mono text-[#586450] mb-0.5">
                    <span className="font-bold uppercase text-[#7D4732]">
                      {record.id.toUpperCase()}
                    </span>
                    <span className="px-1 py-0.2 bg-[#DDD4C3] text-[#343B37] uppercase">
                      {format}
                    </span>
                  </div>

                  <h4 className="font-editorial text-xs font-bold text-[#262B29] leading-snug line-clamp-1 group-hover:text-[#965D45] transition-colors">
                    {title}
                  </h4>

                  <p className="font-sans text-[10.5px] text-[#586450] line-clamp-2 leading-tight mt-0.5">
                    {caption}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-[#C4B7A2]/50 flex items-center justify-between text-[8px] font-mono text-[#343B37]">
                  <span className="truncate max-w-[65%]">
                    {credit ? `© ${credit}` : 'SOVIET ARCHIVE'}
                  </span>
                  {record.date && <span className="text-[#7D4732] font-semibold">{record.date}</span>}
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
