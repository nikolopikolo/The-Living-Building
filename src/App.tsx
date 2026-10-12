import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, X } from 'lucide-react';
import { ArchitecturalCutaway } from './building/ArchitecturalCutaway';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { ZonePreviewModal } from './interactions/ZonePreviewModal';
import { AboutModal } from './layout/AboutModal';
import { INTERACTIVE_ZONES } from './data/zonesData';
import type { InteractiveZone, Language, PerspectiveFilter, ViewportState } from './types';

// Compute responsive initial scale: desktop has ~12% increased visual prominence
const getInitialScale = () => {
  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
    return 1.12; // 12% prominence boost on desktop while keeping full margins
  }
  return 1.0;
};

export const App: React.FC = () => {
  const [viewport, setViewport] = useState<ViewportState>(() => ({
    scale: getInitialScale(),
    translateX: 0,
    translateY: 0,
  }));
  const [activeZone, setActiveZone] = useState<InteractiveZone | null>(null);
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);
  const [selectedPerspective, setSelectedPerspective] = useState<PerspectiveFilter>('ALL');
  const [language, setLanguage] = useState<Language>('EN');
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [hintVisible, setHintVisible] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastTranslateRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Zoom handlers
  const handleZoom = useCallback((factor: number) => {
    setViewport((prev) => {
      const newScale = Math.min(Math.max(prev.scale * factor, 0.7), 2.8);
      return { ...prev, scale: newScale };
    });
  }, []);

  const handleZoomIn = useCallback(() => handleZoom(1.2), [handleZoom]);
  const handleZoomOut = useCallback(() => handleZoom(0.833), [handleZoom]);
  const handleReset = useCallback(() => {
    setViewport({
      scale: getInitialScale(),
      translateX: 0,
      translateY: 0,
    });
    setActiveZone(null);
  }, []);

  // Smooth Focus on selected zone
  const handleFocusZone = useCallback((zone: InteractiveZone) => {
    // Center point of SVG is 500, 425
    // Pan toward the marker point with focus zoom
    const targetScale = 1.35;
    const dx = (500 - zone.markerPoint.x) * 0.75;
    const dy = (425 - zone.markerPoint.y) * 0.75;

    setViewport({
      scale: targetScale,
      translateX: dx,
      translateY: dy,
    });
    setActiveZone(zone);
    setHintVisible(false);
  }, []);

  // Mouse wheel zoom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      setViewport((prev) => {
        const nextScale = Math.min(Math.max(prev.scale * zoomFactor, 0.7), 2.8);
        return {
          ...prev,
          scale: nextScale,
        };
      });
      setHintVisible(false);
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  // Drag to pan
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only drag with primary mouse button
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    lastTranslateRef.current = { x: viewport.translateX, y: viewport.translateY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setHintVisible(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setViewport((prev) => ({
      ...prev,
      translateX: lastTranslateRef.current.x + dx,
      translateY: lastTranslateRef.current.y + dy,
    }));
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignore
    }
  };

  // Keyboard navigation & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveZone(null);
        setAboutOpen(false);
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleReset();
      } else if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
        const index = parseInt(e.key, 10) - 1;
        if (INTERACTIVE_ZONES[index]) {
          handleFocusZone(INTERACTIVE_ZONES[index]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleZoomIn, handleZoomOut, handleReset, handleFocusZone]);

  // Zone selection from menu / cutaway
  const handleZoneSelect = (zone: InteractiveZone) => {
    setActiveZone(zone);
    setHintVisible(false);
  };

  const handlePerspectiveChange = (p: PerspectiveFilter) => {
    setSelectedPerspective(p);
    setHintVisible(false);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden editorial-bg flex flex-col justify-between font-sans">
      {/* Concrete & Archival Paper Grain Filter Overlay */}
      <div className="absolute inset-0 grain-overlay z-30 pointer-events-none" />

      {/* Exhibition Header with Perspective Filter Selector */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenAbout={() => setAboutOpen(true)}
        zones={INTERACTIVE_ZONES}
        onSelectZone={handleFocusZone}
        activeZoneId={activeZone ? activeZone.id : null}
        selectedPerspective={selectedPerspective}
        onSelectPerspective={handlePerspectiveChange}
      />

      {/* Main Exhibition Viewport Canvas: Centerpiece Architectural Cutaway */}
      <main
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative flex-1 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none z-10 pt-16 md:pt-14 pb-14 md:pb-12"
        aria-label="Exhibition Canvas"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{
            opacity: 1,
            scale: viewport.scale,
            x: viewport.translateX,
            y: viewport.translateY,
          }}
          transition={{
            opacity: { duration: 0.6, ease: 'easeOut' },
            scale: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
            x: { duration: 0.08, ease: 'linear' },
            y: { duration: 0.08, ease: 'linear' },
          }}
          className="w-full max-w-[1360px] px-3 sm:px-6 md:px-10 flex items-center justify-center"
        >
          <ArchitecturalCutaway
            zones={INTERACTIVE_ZONES}
            activeZoneId={activeZone ? activeZone.id : null}
            hoveredZoneId={hoveredZoneId}
            onZoneSelect={handleZoneSelect}
            onZoneHover={setHoveredZoneId}
            language={language}
            selectedPerspective={selectedPerspective}
          />
        </motion.div>
      </main>

      {/* Subtle First-Visit Interaction Hint Pill */}
      <AnimatePresence>
        {hintVisible && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-14 left-1/2 -translate-x-1/2 z-35 pointer-events-auto bg-[#F7F3EB]/95 border border-[#343B37] shadow-brutalist-sm px-3.5 py-1.5 flex items-center gap-2.5 text-xs font-mono"
          >
            <Compass className="w-3.5 h-3.5 text-[#965D45] animate-spin-slow" />
            <span className="text-[#262B29] tracking-wider text-[11px]">
              {language === 'KA'
                ? 'გამოიკვლიეთ შენობა · დააჭირეთ ზონას ან აირჩიეთ კვლევის პერსპექტივა'
                : 'EXPLORE CUTAWAY · SELECT ZONES OR SWITCH PERSPECTIVES'}
            </span>
            <button
              onClick={() => setHintVisible(false)}
              className="p-0.5 text-[#7D4732] hover:text-[#262B29] ml-1"
              aria-label="Dismiss hint"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exhibition Footer */}
      <Footer
        scale={viewport.scale}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        language={language}
      />

      {/* Interactive Zone Preview Contextual Dossier */}
      <ZonePreviewModal
        zone={activeZone}
        onClose={() => setActiveZone(null)}
        onResetView={handleReset}
        onFocusZone={handleFocusZone}
        language={language}
      />

      {/* About Exhibition Modal */}
      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
        language={language}
      />
    </div>
  );
};

export default App;
