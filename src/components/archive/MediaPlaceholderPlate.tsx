import React from 'react';
import { Camera, Film, Mic, AlertCircle } from 'lucide-react';
import type { MediaRecord, Language } from '../../types';

interface MediaPlaceholderPlateProps {
  record: MediaRecord;
  language: Language;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'card';
  compact?: boolean;
}

export const MediaPlaceholderPlate: React.FC<MediaPlaceholderPlateProps> = ({
  record,
  language,
  aspectRatio = 'card',
  compact = false,
}) => {
  const getIcon = () => {
    switch (record.type) {
      case 'video':
        return <Film className={compact ? 'w-4 h-4 text-[#7D4732]' : 'w-6 h-6 text-[#7D4732]'} />;
      case 'audio':
        return <Mic className={compact ? 'w-4 h-4 text-[#586450]' : 'w-6 h-6 text-[#586450]'} />;
      case 'image':
      default:
        return <Camera className={compact ? 'w-4 h-4 text-[#965D45]' : 'w-6 h-6 text-[#965D45]'} />;
    }
  };

  const aspectClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    card: 'aspect-[4/3]',
  }[aspectRatio];

  const title = language === 'KA' && record.titleKa ? record.titleKa : record.title;
  const format = record.mediaFormat || (record.type === 'image' ? '35mm Film Scan' : record.type === 'video' ? '16mm Reel' : 'Field Audio');

  return (
    <div
      className={`relative w-full ${aspectClass} bg-[#E8E0D1] border border-[#343B37]/40 flex flex-col justify-between p-3 select-none overflow-hidden group`}
      style={{
        backgroundImage: `
          radial-gradient(#C4B7A2 0.75px, transparent 0.75px),
          linear-gradient(to right, rgba(52, 59, 55, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(52, 59, 55, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '12px 12px, 24px 24px, 24px 24px',
      }}
      aria-label={`${title} (${language === 'KA' ? 'სადემონსტრაციო ეგზემპლარი' : 'Demonstration Record'})`}
    >
      {/* Corner Technical Registration Marks */}
      <div className="absolute top-1 left-1 font-mono text-[7px] text-[#343B37]/50 select-none">┌</div>
      <div className="absolute top-1 right-1 font-mono text-[7px] text-[#343B37]/50 select-none">┐</div>
      <div className="absolute bottom-1 left-1 font-mono text-[7px] text-[#343B37]/50 select-none">└</div>
      <div className="absolute bottom-1 right-1 font-mono text-[7px] text-[#343B37]/50 select-none">┘</div>

      {/* Header Bar */}
      <div className="flex items-center justify-between text-[8px] font-mono tracking-wider text-[#343B37] border-b border-[#343B37]/20 pb-1 z-10">
        <span className="font-bold uppercase text-[#7D4732] flex items-center gap-1">
          <span>{record.id.toUpperCase()}</span>
          {record.date && <span className="text-[#343B37]/70">· {record.date}</span>}
        </span>
        <span className="px-1 py-0.2 bg-[#DDD4C3] border border-[#343B37]/30 text-[7.5px] uppercase">
          {format}
        </span>
      </div>

      {/* Center Specimen Symbol & Demonstration Notice */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-1 z-10 px-2">
        <div className="p-2 rounded-full bg-[#F7F3EB] border border-[#343B37]/30 shadow-xs mb-1.5 transition-transform group-hover:scale-105">
          {getIcon()}
        </div>

        <div className="font-editorial text-xs sm:text-sm font-bold text-[#262B29] line-clamp-2 leading-tight">
          {title}
        </div>

        <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#DDD4C3]/80 border border-[#965D45]/40 text-[#7D4732] font-mono text-[7.5px] uppercase tracking-wider">
          <AlertCircle className="w-2.5 h-2.5 text-[#965D45]" />
          <span>
            {language === 'KA'
              ? 'სადემონსტრაციო ეგზემპლარი'
              : 'DEMONSTRATION PLACEHOLDER'}
          </span>
        </div>
      </div>

      {/* Footer Classification Stamp */}
      <div className="flex items-center justify-between text-[7.5px] font-mono text-[#586450] border-t border-[#343B37]/20 pt-1 z-10">
        <span className="truncate max-w-[65%] uppercase">
          {record.credit || (language === 'KA' ? 'საველე არქივი' : 'FIELD ARCHIVE')}
        </span>
        <span className="text-[#7D4732] font-bold tracking-widest uppercase">
          [ PENDING INGESTION ]
        </span>
      </div>
    </div>
  );
};
