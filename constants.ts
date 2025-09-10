import type { ArtStyle } from './types';
import { SAMPLES } from './samples';

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
    originalImage: SAMPLES.CINEMATIC,
    generatedImages: Array(4).fill(SAMPLES.CINEMATIC),
  },
];