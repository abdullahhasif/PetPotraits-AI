import type React from 'react';

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

export interface ArtEffect {
    id: string;
    name: string;
    style: React.CSSProperties;
}