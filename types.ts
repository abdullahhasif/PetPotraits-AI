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

export interface FrameStyle {
  id: string;
  name: string;
  price?: string;
  image: string;
  style: React.CSSProperties;
}

export interface ProductSize {
    id: string;
    label: string;
    price: string;
    orientation: 'portrait' | 'landscape' | 'square';
}

export interface CartItem {
  id:string;
  image: string;
  styleName: string;
  size: ProductSize;
  frame: FrameStyle;
  border: BorderSettings;
  effect: ArtEffect;
  price: number;
}
