export type Language = 'EN' | 'KA';

export type SpeciesCategory = 'human' | 'flora' | 'fauna' | 'infrastructure' | 'architectural';

export type PerspectiveFilter = 'ALL' | 'HUMAN' | 'ANIMAL' | 'PLANT' | 'INFRASTRUCTURE';

export interface MultispeciesPresence {
  category: SpeciesCategory;
  nameEn: string;
  nameKa: string;
  detailEn: string;
  detailKa: string;
}

export interface ArchivalImage {
  id: string;
  captionEn: string;
  captionKa: string;
  year?: string;
  fieldNoteEn?: string;
  fieldNoteKa?: string;
}

export interface ArchivalAudio {
  id: string;
  titleEn: string;
  titleKa: string;
  duration: string;
  descriptionEn: string;
  descriptionKa: string;
  isDemonstration?: boolean;
}

export interface ArchivalVideo {
  id: string;
  titleEn: string;
  titleKa: string;
  duration?: string;
  noteEn?: string;
  noteKa?: string;
}

export interface InteractiveZone {
  id: string;
  floorLevel: string; // e.g. "FL 05", "ROOF", "BSMT", "YARD"
  floorLevelKa: string;
  titleEn: string;
  titleKa: string;
  subtitleEn: string;
  subtitleKa: string;
  descriptionEn: string;
  descriptionKa: string;
  extendedNarrativeEn: string;
  extendedNarrativeKa: string;
  perspectives: ('HUMAN' | 'ANIMAL' | 'PLANT' | 'INFRASTRUCTURE')[];
  multispecies: MultispeciesPresence[];
  architecturalNotesEn: string;
  architecturalNotesKa: string;
  coordinates: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  markerPoint: {
    x: number;
    y: number;
  };
  images?: ArchivalImage[];
  audioRecordings?: ArchivalAudio[];
  videoRecordings?: ArchivalVideo[];
  relatedZoneIds?: string[];
  isDemonstration?: boolean;
}

export interface ViewportState {
  scale: number;
  translateX: number;
  translateY: number;
}
