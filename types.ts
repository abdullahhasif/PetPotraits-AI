
export interface ArtStyle {
  id: string;
  name: string;
  prompt: string;
  originalImage: string;
  generatedImages: string[];
}

export interface BorderSettings {
  width: 'none' | 'shallow' | 'medium' | 'deep';
  color: string;
}