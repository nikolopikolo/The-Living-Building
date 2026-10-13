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
        return <Film className={compact ? 'w-4 h-4 text-[#A35243]' : 'w-6 h-6 text-[#A35243]'} />;
      case 'audio':
        return <Mic className={compact ? 'w-4 h-4 text-[#687565]' : 'w-6 h-6 text-[#687565]'} />;
      case 'image':
      default:
        return <Camera className={compact ? 'w-4 h-4 text-[#B09A69]' : 'w-6 h-6 text-[#B09A69]'} />;
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
      className={`relative w-full ${aspectClass} bg-[#181C1A] border border-[#303633] flex flex-col justify-between p-3 select-none overflow-hidden group`}
      style={{
        backgroundImage: `
          radial-gradient(#303633 0.75px, transparent 0.75px),
          linear-gradient(to right, rgba(48, 54, 51, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(48, 54, 51, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '12px 12px, 24px 24px, 24px 24px',
      }}
      aria-label={`${title} (${language === 'KA' ? 'სადემონსტრაციო ეგზემპლარი' : 'Demonstration Record'})`}
    >
      {/* Corner Technical Registration Marks */}
      <div className="absolute top-1 left-1 font-mono text-[7px] text-[#555B56] select-none">┌</div>
      <div className="absolute top-1 right-1 font-mono text-[7px] text-[#555B56] select-none">┐</div>
      <div className="absolute bottom-1 left-1 font-mono text-[7px] text-[#555B56] select-none">└</div>
      <div className="absolute bottom-1 right-1 font-mono text-[7px] text-[#555B56] select-none">┘</div>

      {/* Header Bar */}
      <div className="flex items-center justify-between text-[8px] font-mono tracking-wider text-[#939B92] border-b border-[#303633] pb-1 z-10">
        <span className="font-bold uppercase text-[#B09A69] flex items-center gap-1">
          <span>{record.id.toUpperCase()}</span>
          {record.date && <span className="text-[#939B92]">· {record.date}</span>}
        </span>
        <span className="px-1 py-0.2 bg-[#222725] border border-[#303633] text-[7.5px] uppercase text-[#939B92]">
          {format}
        </span>
      </div>

      {/* Center Specimen Symbol & Demonstration Notice */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-1 z-10 px-2">
        <div className="p-2 bg-[#222725] border border-[#303633] shadow-xs mb-1.5 transition-transform group-hover:scale-105">
          {getIcon()}
        </div>

        <div className="font-editorial text-xs sm:text-sm font-bold text-[#D8D7CD] line-clamp-2 leading-tight">
          {title}
        </div>

        <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#222725] border border-[#A35243]/50 text-[#A35243] font-mono text-[7.5px] uppercase tracking-wider">
          <AlertCircle className="w-2.5 h-2.5 text-[#A35243]" />
          <span>
            {language === 'KA'
              ? 'სადემონსტრაციო ეგზემპლარი'
              : 'DEMONSTRATION PLACEHOLDER'}
          </span>
        </div>
      </div>

      {/* Footer Classification Stamp */}
      <div className="flex items-center justify-between text-[7.5px] font-mono text-[#939B92] border-t border-[#303633] pt-1 z-10">
        <span className="truncate max-w-[65%] uppercase">
          {record.credit || (language === 'KA' ? 'საველე არქივი' : 'FIELD ARCHIVE')}
        </span>
        <span className="text-[#A35243] font-bold tracking-widest uppercase">
          [ PENDING INGESTION ]
        </span>
      </div>
    </div>
  );
};
