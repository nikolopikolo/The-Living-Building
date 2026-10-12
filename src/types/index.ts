export type Language = 'EN' | 'KA';

export type SpeciesCategory = 'human' | 'flora' | 'fauna' | 'infrastructure' | 'architectural';

export interface MultispeciesPresence {
  category: SpeciesCategory;
  nameEn: string;
  nameKa: string;
  detailEn: string;
  detailKa: string;
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
}

export interface ViewportState {
  scale: number;
  translateX: number;
  translateY: number;
}
