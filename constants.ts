import type { ArtStyle, ArtEffect, FrameStyle, ProductSize } from './types';

export const ART_STYLES: ArtStyle[] = [
  {
    id: 'bath-time',
    name: 'Bath time',
    prompt: 'The pet in focus from the chest up inside a bathtub, head covered in foamy “bubble crown,” droplets clinging to the whiskers; blurred chrome fixtures and pastel tiles behind, rubber ducks floating just out of focus. Cinematic detail in bubbles and wet fur, playful and humorous.',
    originalImage: 'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_400/photo-to-art/feed-previews/spa_pet/original.png',
    generatedImages: [
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/spa_pet/0.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/spa_pet/1.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/spa_pet/2.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/spa_pet/3.png',
    ],
  },
  {
    id: 'kitchen-tails',
    name: 'Kitchen tails',
    prompt: "The pet as a chef, wearing a chef's hat and bandana, proudly presenting a pizza on a wooden board. The background is a warm, slightly blurred kitchen with cooking utensils.",
    originalImage: 'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_400/photo-to-art/feed-previews/chef_pet/original.png',
    generatedImages: [
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/chef_pet/0.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/chef_pet/1.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/chef_pet/2.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/chef_pet/3.png',
    ],
  },
  {
    id: 'halloween',
    name: 'Halloween',
    prompt: 'The pet captured chest-up, face illuminated warmly by the glow of a carved jack-o-lantern placed just beside; golden-orange light casting dramatic shadows across the fur, while a blurred full moon and bats hover in the deep night sky behind. Bright, high-contrast cinematic lighting, ultra-detailed textures in fur and pumpkin surface.',
    originalImage: 'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_400/photo-to-art/feed-previews/halloween_pet/original.png',
    generatedImages: [
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/halloween_pet/0.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/halloween_pet/1.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/halloween_pet/2.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/halloween_pet/3.png',
    ],
  },
  {
    id: 'nine-to-five',
    name: 'Nine to five',
    prompt: "The pet holding a pen, appearing to sign a document at a wooden office desk. Sunlight streams through a window in the background.",
    originalImage: 'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_400/photo-to-art/feed-previews/pet_office/original.png',
    generatedImages: [
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/pet_office/0.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/pet_office/1.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/pet_office/2.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/pet_office/3.png',
    ],
  },
  {
    id: 'cinematic',
    name: 'Cinematic',
    prompt: "The pet portrayed as a superhero, wearing a flowing red cape, looking heroically into the distance. The background is a dramatic, dark cityscape at night.",
    originalImage: 'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_400/photo-to-art/feed-previews/cinematic/original.png',
    generatedImages: [
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/cinematic/0.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/cinematic/1.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/cinematic/2.png',
        'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_1200/photo-to-art/feed-previews/cinematic/3.png',
    ],
  },
];

export const SIZES: ProductSize[] = [
    { id: '21x28', label: '21x28 cm', price: 'US$33 each', orientation: 'portrait' },
    { id: '28x21', label: '28x21 cm', price: 'US$33 each', orientation: 'landscape' },
    { id: '32x32', label: '32x32 cm', price: 'US$55 each', orientation: 'square' },
    { id: '32x42', label: '32x42 cm', price: 'US$55 each', orientation: 'portrait' },
    { id: '42x32', label: '42x32 cm', price: 'US$55 each', orientation: 'landscape' },
    { id: '50x50', label: '50x50 cm', price: 'US$125 each', orientation: 'square' },
    { id: '50x69', label: '50x69 cm', price: 'US$125 each', orientation: 'portrait' },
    { id: '69x50', label: '69x50 cm', price: 'US$125 each', orientation: 'landscape' },
];

export const BORDER_WIDTHS = [
    { id: 'none', label: 'None', padding: '0' },
    { id: 'shallow', label: 'Shallow', padding: '1.5%' },
    { id: 'medium', label: 'Medium', padding: '3%' },
    { id: 'deep', label: 'Deep', padding: '5%' },
] as const;
  

export const BORDER_COLORS: string[] = [
    '#FFFFFF', '#F9F4EC', '#F5E6E8', '#DDEBF1', '#E2ECE9', '#BFBDB2', '#D39C9D', '#8FA9C2', '#86A296'
];

export const EFFECTS: ArtEffect[] = [
    { id: 'original', name: 'Original', style: {} },
    { id: 'silver', name: 'Silver', style: { filter: 'grayscale(100%) brightness(105%) contrast(105%)' } },
    { id: 'noir', name: 'Noir', style: { filter: 'grayscale(100%) contrast(130%) brightness(90%)' } },
    { id: 'vivid', name: 'Vivid', style: { filter: 'saturate(150%) contrast(110%)' } },
    { id: 'dramatic', name: 'Dramatic', style: { filter: 'contrast(140%) sepia(20%) brightness(95%)' } },
];

export const FRAMES: FrameStyle[] = [
    {
      id: 'frameless',
      name: 'Frameless',
      image: 'https://storage.googleapis.com/aistudio-hosting/my-portraits-ai/frame-previews/frameless.png',
      style: {
        padding: '0',
        backgroundColor: 'transparent',
      },
    },
    {
      id: 'black',
      name: 'Black',
      image: 'https://storage.googleapis.com/aistudio-hosting/my-portraits-ai/frame-previews/black.png',
      style: {
        padding: '12px',
        backgroundColor: '#1D1D1D',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)',
      },
    },
    {
      id: 'white',
      name: 'White',
      image: 'https://storage.googleapis.com/aistudio-hosting/my-portraits-ai/frame-previews/white.png',
      style: {
        padding: '12px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      },
    },
    {
      id: 'oak',
      name: 'Oak',
      price: '+US$3 per tile',
      image: 'https://storage.googleapis.com/aistudio-hosting/my-portraits-ai/frame-previews/oak.png',
      style: {
        padding: '12px',
        backgroundColor: '#D0B49F',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
      },
    },
    {
      id: 'wide-black',
      name: 'Wide Black',
      price: '+US$6 per tile',
      image: 'https://storage.googleapis.com/aistudio-hosting/my-portraits-ai/frame-previews/wide-black.png',
      style: {
        padding: '24px',
        backgroundColor: '#1D1D1D',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)',
      },
    },
    {
      id: 'wide-white',
      name: 'Wide White',
      price: '+US$6 per tile',
      image: 'https://storage.googleapis.com/aistudio-hosting/my-portraits-ai/frame-previews/wide-white.png',
      style: {
        padding: '24px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      },
    },
    {
      id: 'wide-walnut',
      name: 'Wide Walnut',
      price: '+US$6 per tile',
      image: 'https://storage.googleapis.com/aistudio-hosting/my-portraits-ai/frame-previews/wide-walnut.png',
      style: {
        padding: '24px',
        backgroundColor: '#5C4033',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      },
    },
    {
      id: 'canvas',
      name: 'Canvas',
      price: '+US$20 per tile',
      image: 'https://storage.googleapis.com/aistudio-hosting/my-portraits-ai/frame-previews/canvas.png',
      style: {
        padding: '16px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      },
    },
];