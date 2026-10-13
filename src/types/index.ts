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

export interface MediaRecord {
  id: string;
  locationId: string;
  type: 'image' | 'audio' | 'video';
  title: string;
  titleKa?: string;
  caption: string;
  captionKa?: string;
  src?: string;
  thumbnailSrc?: string;
  date?: string;
  credit?: string;
  creditKa?: string;
  transcript?: string;
  transcriptKa?: string;
  isPlaceholder?: boolean;
  mediaFormat?: string; // e.g. "35mm B/W Gelatin Silver Negative", "Architectural Field Survey Sketch", "Nagra 1/4\" Mono Field Reel", "16mm Reversal Color Film"
  duration?: string;
  recordingLocation?: string;
  recordingLocationKa?: string;
  notes?: string;
  notesKa?: string;
}

export interface FieldNarrativeSections {
  researchContextEn: string;
  researchContextKa: string;
  spatialObservationsEn: string;
  spatialObservationsKa: string;
  multispeciesRelationshipsEn: string;
  multispeciesRelationshipsKa: string;
  architecturalContextEn: string;
  architecturalContextKa: string;
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
  mediaRecords?: MediaRecord[];
  narrativeSections?: FieldNarrativeSections;
  relatedZoneIds?: string[];
  isDemonstration?: boolean;
}

export interface ViewportState {
  scale: number;
  translateX: number;
  translateY: number;
}
