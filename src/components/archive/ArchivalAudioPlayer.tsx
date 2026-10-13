import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, FileText, ChevronDown, ChevronUp, AlertCircle, Radio } from 'lucide-react';
import type { MediaRecord, Language } from '../../types';

interface ArchivalAudioPlayerProps {
  record: MediaRecord;
  language: Language;
  className?: string;
}

const formatSeconds = (sec: number): string => {
  if (isNaN(sec) || !isFinite(sec)) return '00:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

export const ArchivalAudioPlayer: React.FC<ArchivalAudioPlayerProps> = ({
  record,
  language,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [transcriptOpen, setTranscriptOpen] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const hasAudioSource = Boolean(record.src && !record.isPlaceholder && !audioError);

  // Parse duration string like "01:42" if duration state is 0
  const fallbackDurationSec = (() => {
    if (record.duration) {
      const parts = record.duration.split(':').map(Number);
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        return parts[0] * 60 + parts[1];
      }
    }
    return 102; // default ~1m42s
  })();

  const effectiveDuration = duration > 0 ? duration : fallbackDurationSec;

  const togglePlay = () => {
    if (!hasAudioSource) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio playback failed:', err);
        setAudioError(true);
        setIsPlaying(false);
      });
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(audio.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!hasAudioSource) return;
    const target = parseFloat(e.target.value);
    setCurrentTime(target);
    if (audioRef.current) {
      audioRef.current.currentTime = target;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

  const handleReset = () => {
    if (!hasAudioSource) return;
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    }
  };

  const title = language === 'KA' && record.titleKa ? record.titleKa : record.title;
  const caption = language === 'KA' && record.captionKa ? record.captionKa : record.caption;
  const locationTag = language === 'KA' && record.recordingLocationKa ? record.recordingLocationKa : record.recordingLocation;
  const transcript = language === 'KA' && record.transcriptKa ? record.transcriptKa : record.transcript;
  const format = record.mediaFormat || '1/4" Nagra Reel Field Audio';

  return (
    <div
      className={`bg-[#E8E0D1] border border-[#343B37] p-3.5 sm:p-4 text-[#262B29] relative flex flex-col space-y-3 ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(#C4B7A2 0.75px, transparent 0.75px),
          linear-gradient(to right, rgba(52, 59, 55, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '16px 16px, 32px 32px',
      }}
    >
      {/* Hidden native HTML5 Audio element */}
      {record.src && !record.isPlaceholder && (
        <audio
          ref={audioRef}
          src={record.src}
          preload="none"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onError={() => setAudioError(true)}
        />
      )}

      {/* Field Instrument Top Plate Bar */}
      <div className="flex items-center justify-between border-b border-[#343B37]/30 pb-2 text-[8.5px] font-mono">
        <div className="flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 text-[#965D45]" />
          <span className="font-bold text-[#7D4732] uppercase tracking-wider">
            ACOUSTIC SPECIMEN · {record.id.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {locationTag && (
            <span className="text-[#586450] uppercase hidden sm:inline truncate max-w-[170px]">
              {locationTag}
            </span>
          )}
          <span className="px-1.5 py-0.2 bg-[#DDD4C3] border border-[#343B37]/30 text-[#343B37] uppercase font-semibold">
            {format}
          </span>
        </div>
      </div>

      {/* Recording Title and Abstract */}
      <div>
        <h4 className="font-editorial text-sm sm:text-base font-bold text-[#262B29] leading-snug">
          {title}
        </h4>
        <p className="font-sans text-[11px] text-[#586450] mt-0.5 leading-relaxed">
          {caption}
        </p>
      </div>

      {/* Main Field Recording Instrument Control Panel */}
      <div className="bg-[#F7F3EB] border border-[#343B37]/40 p-2.5 sm:p-3 space-y-2.5">
        {/* Analog VU / Decibel Meter Simulation */}
        <div className="flex items-center justify-between font-mono text-[8px] text-[#586450] px-1">
          <span>VU METER · -20dB</span>
          <div className="flex items-center gap-0.5">
            {[...Array(14)].map((_, i) => (
              <span
                key={i}
                className={`w-1 h-2 rounded-[0.5px] transition-colors ${
                  isPlaying
                    ? i < 9
                      ? 'bg-[#74826A]'
                      : i < 12
                      ? 'bg-[#C4B7A2]'
                      : 'bg-[#965D45]'
                    : 'bg-[#DDD4C3]'
                }`}
              />
            ))}
          </div>
          <span>PEAK +3dB</span>
        </div>

        {/* Timeline Scrubber */}
        <div className="space-y-1">
          <div className="relative flex items-center">
            <input
              type="range"
              min="0"
              max={effectiveDuration}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              disabled={!hasAudioSource}
              className={`w-full h-1.5 bg-[#DDD4C3] rounded-none appearance-none cursor-pointer accent-[#965D45] ${
                !hasAudioSource ? 'cursor-not-allowed opacity-50' : ''
              }`}
              aria-label="Timeline scrubber"
            />
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-[#343B37]">
            <span className="font-bold">{formatSeconds(currentTime)}</span>
            <span className="text-[#586450]">
              {formatSeconds(effectiveDuration)}
            </span>
          </div>
        </div>

        {/* Hardware Buttons & Volume Control */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#C4B7A2]/50">
          <div className="flex items-center gap-1.5">
            {/* Play / Pause button */}
            <button
              type="button"
              onClick={togglePlay}
              disabled={!hasAudioSource}
              className={`flex items-center gap-1.5 px-3 py-1 font-mono text-[10px] font-semibold border transition-all ${
                !hasAudioSource
                  ? 'bg-[#DDD4C3] text-[#7D4732] border-[#C4B7A2] opacity-60 cursor-not-allowed'
                  : isPlaying
                  ? 'bg-[#965D45] text-[#E8E0D1] border-[#965D45]'
                  : 'bg-[#262B29] text-[#E8E0D1] border-[#262B29] hover:bg-[#343B37]'
              }`}
              aria-label={isPlaying ? 'Pause audio' : 'Play field recording'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3" />
                  <span>PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span>PLAY RECORDING</span>
                </>
              )}
            </button>

            {/* Rewind Button */}
            <button
              type="button"
              onClick={handleReset}
              disabled={!hasAudioSource}
              className="p-1 text-[#343B37] hover:text-[#262B29] bg-[#DDD4C3] border border-[#343B37]/30 hover:bg-[#C4B7A2] disabled:opacity-50 disabled:cursor-not-allowed"
              title="Return to start (00:00)"
              aria-label="Return to start"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-1.5 font-mono text-[9px]">
            <button
              type="button"
              onClick={toggleMute}
              className="p-0.5 text-[#343B37] hover:text-[#965D45]"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-3.5 h-3.5 text-[#965D45]" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-[#586450]" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-14 h-1 bg-[#DDD4C3] appearance-none cursor-pointer accent-[#74826A]"
              aria-label="Volume level"
            />
            <span className="text-[8px] text-[#586450] w-6 text-right">
              {isMuted ? 'MUT' : `${Math.round(volume * 100)}%`}
            </span>
          </div>
        </div>

        {/* Placeholder Status Explanation Banner */}
        {!hasAudioSource && (
          <div className="p-2 bg-[#DDD4C3]/70 border-l-2 border-[#965D45] flex items-start gap-2 text-[10px] font-mono text-[#7D4732]">
            <AlertCircle className="w-3.5 h-3.5 text-[#965D45] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold uppercase tracking-wider text-[9px]">
                {language === 'KA'
                  ? 'სადემონსტრაციო ჩანაწერი — აუდიო დამუშავების ეტაპზეა'
                  : 'DEMONSTRATION RECORD — AUDIO PENDING FIELD TRANSFER'}
              </div>
              <div className="text-[9.5px] text-[#343B37] mt-0.5 font-sans leading-tight">
                {language === 'KA'
                  ? 'ეთნოგრაფიული აუდიოჩანაწერი დაემატება საველე მასალების არქივირების შემდეგ. დაკვრა დროებით შეზღუდულია.'
                  : 'This acoustic field recording will be integrated upon archival tape digitization. Playback controls are disabled until audio transfer is verified.'}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Field Transcript & Notes Drawer */}
      {transcript && (
        <div className="border border-[#C4B7A2]">
          <button
            type="button"
            onClick={() => setTranscriptOpen(!transcriptOpen)}
            className="w-full px-2.5 py-1.5 bg-[#DDD4C3]/60 hover:bg-[#DDD4C3] flex items-center justify-between text-[9px] font-mono text-[#262B29] transition-colors"
          >
            <span className="flex items-center gap-1 font-semibold uppercase tracking-wider text-[#7D4732]">
              <FileText className="w-3 h-3 text-[#965D45]" />
              <span>{language === 'KA' ? 'საველე ტრანსკრიპტი და ჩანიშვნები' : 'FIELD TRANSCRIPT & SOUND LOG'}</span>
            </span>
            {transcriptOpen ? (
              <ChevronUp className="w-3 h-3 text-[#586450]" />
            ) : (
              <ChevronDown className="w-3 h-3 text-[#586450]" />
            )}
          </button>

          {transcriptOpen && (
            <div className="p-3 bg-[#F7F3EB] text-xs font-sans text-[#343B37] leading-relaxed border-t border-[#C4B7A2] space-y-1.5">
              <div className="font-mono text-[8.5px] text-[#586450] uppercase tracking-wider font-semibold">
                [ VERBATIM FIELD RECORDING TRANSCRIPT ]
              </div>
              <p className="italic text-[#262B29]">{transcript}</p>
              {record.credit && (
                <div className="text-[9px] font-mono text-[#7D4732] pt-1 border-t border-[#C4B7A2]/40">
                  {language === 'KA' ? 'ჩაწერილია:' : 'Recorded by:'} {record.credit}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
