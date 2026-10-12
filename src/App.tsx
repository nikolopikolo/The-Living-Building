import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArchitecturalCutaway } from './building/ArchitecturalCutaway';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { ZonePreviewModal } from './interactions/ZonePreviewModal';
import { AboutModal } from './layout/AboutModal';
import { INTERACTIVE_ZONES } from './data/zonesData';
import type { InteractiveZone, Language, ViewportState } from './types';

const INITIAL_VIEWPORT: ViewportState = {
  scale: 1,
  translateX: 0,
  translateY: 0,
};

export const App: React.FC = () => {
  const [viewport, setViewport] = useState<ViewportState>(INITIAL_VIEWPORT);
  const [activeZone, setActiveZone] = useState<InteractiveZone | null>(null);
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('EN');
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);

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

  const handleZoomIn = () => handleZoom(1.2);
  const handleZoomOut = () => handleZoom(0.833);
  const handleReset = () => {
    setViewport(INITIAL_VIEWPORT);
    setActiveZone(null);
  };

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
          setActiveZone(INTERACTIVE_ZONES[index]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleZoomIn, handleZoomOut]);

  // Zone selection with gentle pan centering
  const handleZoneSelect = (zone: InteractiveZone) => {
    setActiveZone(zone);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden editorial-bg flex flex-col justify-between font-sans">
      {/* Concrete & Archival Paper Grain Filter Overlay */}
      <div className="absolute inset-0 grain-overlay z-30 pointer-events-none" />

      {/* Exhibition Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenAbout={() => setAboutOpen(true)}
        zones={INTERACTIVE_ZONES}
        onSelectZone={handleZoneSelect}
        activeZoneId={activeZone ? activeZone.id : null}
      />

      {/* Main Exhibition Viewport Canvas: Centerpiece Architectural Cutaway */}
      <main
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative flex-1 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none z-10"
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
            scale: { duration: 0.15, ease: 'easeOut' },
            x: { duration: 0.05, ease: 'linear' },
            y: { duration: 0.05, ease: 'linear' },
          }}
          className="w-full max-w-[1240px] px-4 md:px-8 py-2 md:py-6 flex items-center justify-center"
        >
          <ArchitecturalCutaway
            zones={INTERACTIVE_ZONES}
            activeZoneId={activeZone ? activeZone.id : null}
            hoveredZoneId={hoveredZoneId}
            onZoneSelect={handleZoneSelect}
            onZoneHover={setHoveredZoneId}
            language={language}
          />
        </motion.div>
      </main>

      {/* Exhibition Footer */}
      <Footer
        scale={viewport.scale}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        language={language}
      />

      {/* Interactive Zone Preview Drawer / Card */}
      <ZonePreviewModal
        zone={activeZone}
        onClose={() => setActiveZone(null)}
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
