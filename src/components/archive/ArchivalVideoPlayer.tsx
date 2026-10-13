import React, { useState } from 'react';
import { Film, AlertCircle } from 'lucide-react';
import type { MediaRecord, Language } from '../../types';

interface ArchivalVideoPlayerProps {
  record: MediaRecord;
  language: Language;
  className?: string;
}

export const ArchivalVideoPlayer: React.FC<ArchivalVideoPlayerProps> = ({
  record,
  language,
  className = '',
}) => {
  const [videoError, setVideoError] = useState<boolean>(false);

  const title = language === 'KA' && record.titleKa ? record.titleKa : record.title;
  const caption = language === 'KA' && record.captionKa ? record.captionKa : record.caption;
  const credit = language === 'KA' && record.creditKa ? record.creditKa : record.credit;
  const format = record.mediaFormat || '16mm Silent Color Cine Film';

  const hasVideoSource = Boolean(record.src && !record.isPlaceholder && !videoError);

  return (
    <div className={`bg-[#181C1A] border border-[#303633] p-3 sm:p-4 space-y-2.5 text-[#D8D7CD] ${className}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[#303633] pb-1.5 text-[8.5px] font-mono">
        <div className="flex items-center gap-1.5">
          <Film className="w-3.5 h-3.5 text-[#A35243]" />
          <span className="font-bold text-[#B09A69] uppercase tracking-wider">
            CINEMATIC FIELD RECORD · {record.id.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {record.date && <span className="text-[#939B92]">[{record.date}]</span>}
          <span className="px-1.5 py-0.2 bg-[#222725] border border-[#303633] text-[#939B92] uppercase font-semibold">
            {format}
          </span>
        </div>
      </div>

      {/* Main Video Screen */}
      <div className="relative aspect-video bg-[#151817] border border-[#303633] overflow-hidden flex items-center justify-center">
        {hasVideoSource ? (
          <video
            src={record.src}
            controls
            preload="metadata"
            className="w-full h-full object-contain"
            onError={() => setVideoError(true)}
            aria-label={title}
          >
            <p>Your browser does not support HTML5 video.</p>
          </video>
        ) : (
          /* Archival Cine Film Leader Placeholder */
          <div
            className="w-full h-full bg-[#181C1A] flex flex-col justify-between p-4 relative select-none"
            style={{
              backgroundImage: `
                radial-gradient(#303633 1px, transparent 1px),
                linear-gradient(to right, rgba(48, 54, 51, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(48, 54, 51, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '16px 16px, 32px 32px, 32px 32px',
            }}
          >
            {/* Film Sprocket Notches Simulation */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#151817] flex justify-between px-2 items-center">
              {[...Array(12)].map((_, i) => (
                <span key={i} className="w-1.5 h-1 bg-[#222725]" />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#151817] flex justify-between px-2 items-center">
              {[...Array(12)].map((_, i) => (
                <span key={i} className="w-1.5 h-1 bg-[#222725]" />
              ))}
            </div>

            {/* Top Reel Info */}
            <div className="pt-2 flex items-center justify-between font-mono text-[8px] text-[#B09A69] uppercase">
              <span className="font-bold">REEL LEADER · 16MM KODACHROME</span>
              <span>24 FRAMES / SEC</span>
            </div>

            {/* Center Clapperboard Motif */}
            <div className="flex-1 flex flex-col items-center justify-center my-1 text-center px-4">
              <div className="p-2.5 bg-[#222725] border border-[#303633] mb-1.5 shadow-xs">
                <Film className="w-5 h-5 text-[#A35243]" />
              </div>
              <h4 className="font-editorial text-sm font-bold text-[#D8D7CD] leading-tight">
                {title}
              </h4>
              <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 bg-[#222725] border border-[#A35243] text-[#A35243] font-mono text-[8px] uppercase tracking-wider font-semibold">
                <AlertCircle className="w-2.5 h-2.5 text-[#A35243]" />
                <span>
                  {language === 'KA'
                    ? 'სადემონსტრაციო კინოფირი — ციფრული სკანირება მიმდინარეობს'
                    : 'DEMONSTRATION REEL — TELECINE DIGITIZATION PENDING'}
                </span>
              </div>
            </div>

            {/* Bottom Reel Notice */}
            <div className="pb-2 flex items-center justify-between font-mono text-[7.5px] text-[#939B92] uppercase border-t border-[#303633] pt-1">
              <span>{credit || 'TBILISI ARCHITECTURAL SURVEY'}</span>
              <span className="text-[#A35243] font-semibold">[ NO AUTOPLAY ]</span>
            </div>
          </div>
        )}
      </div>

      {/* Video Caption & Metadata */}
      <div className="space-y-1">
        <h4 className="font-editorial text-xs sm:text-sm font-bold text-[#D8D7CD]">
          {title}
        </h4>
        <p className="font-sans text-[11px] text-[#939B92] leading-relaxed">
          {caption}
        </p>
        <div className="pt-1 border-t border-[#303633] flex items-center justify-between text-[8px] font-mono text-[#939B92]">
          {credit && <span>SOURCE: {credit}</span>}
          {record.date && <span className="text-[#A35243]">DATED: {record.date}</span>}
        </div>
      </div>
    </div>
  );
};
