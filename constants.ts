
import type { ArtStyle, ArtEffect, FrameStyle, ProductSize } from './types';

export const ART_STYLES: ArtStyle[] = [
  {
    id: 'bath-time',
    name: 'Bath time',
    prompt: [
        `A dog in focus from the chest up inside a bathtub, head covered in foamy “bubble crown,” droplets clinging to the whiskers; blurred chrome fixtures and pastel tiles behind, rubber ducks floating just out of focus. Cinematic detail in bubbles and wet fur, playful and humorous.`,
        `A dog chest-up with a fluffy pink towel wrapped around the head like a spa day, background pastel mint tiles; large bold text at the top: “WASH YOUR PAWS”.`,
        `A dog chest-up with a pastel mint toothbrush clamped in the mouth, whiskers slightly lifted, eyes wide as if proud; background pastel green and yellow tiles, warm bathroom lights glowing in the blur. Crisp cinematic close-up with shiny details on fur and toothbrush bristles.`,
        `A dog chest-up leaning toward the counter, blow dryer in paw blasting upward, fur flaring comically high like a rock star; pastel yellow walls and round vanity bulbs glowing behind, a pastel lavender towel draped on the counter. Bright cinematic lighting, exaggerated playful energy.`
    ],
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
    prompt: `A playful pet as a chef in a cozy kitchen setting with vibrant lighting, warm tones, and a whimsical, storybook-like atmosphere. The pet looks cheerful and expressive. Please generate one of the following scenes:
1. The pet making a pizza at the counter, wearing a white chef hat and blue apron.
2. The pet sitting happily with spaghetti on its head like hair, wearing a red heart bandana.
3. The pet flipping a pancake in a pan, wearing a polka-dot bandana, in a kitchen action scene.
4. The pet surrounded by colorful cupcakes and baking tools, dressed in a mini white chef coat.`,
    originalImage: 'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_400/v1708443977/photo-to-art/kitchen/original.png',
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
    prompt: `A pet captured chest-up, face illuminated warmly by the glow of a carved jack-o-lantern placed just beside; golden-orange light casting dramatic shadows across the fur, while a blurred full moon and bats hover in the deep night sky behind. Bright, high-contrast cinematic lighting, ultra-detailed textures in fur and pumpkin surface.
A pet seated close to the cauldron, chest and head in sharp focus, green light from bubbling potion casting bright highlights across fur and whiskers; blurred shelves of glowing bottles and crooked wooden beams fill the background. Cinematic close-up with bold contrast, magical yet playful atmosphere.
A pet framed chest-up, wearing small red devil horns, face lit dramatically by warm, high-contrast light; compressed background like an 85mm portrait lens, showing blurred spooky details — twisted trees, glowing jack-o-lanterns, and faint mist curling in the distance. Cinematic close-up, sharp expression, dramatic yet playful Halloween atmosphere.
A pet framed chest-up, body wrapped in frayed white mummy bandages but face left fully exposed with bright, expressive eyes; background shows the interior of an ancient stone tomb, hieroglyphs carved into the walls glowing faintly in the flicker of torchlight, dust motes hanging in the air. Cinematic contrast between warm orange torch glow and cool blue shadows, sharp detail on fur and cloth textures.`,
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
    prompt: `An adorable pet as an office worker in a modern corporate setting with warm, natural lighting and a polished, business-like atmosphere. The pet looks professional yet playful with natural proportions in a realistic style. Add minor office details like potted plants, soft bokeh background, and workplace décor for a lively corporate feel. Please generate one of the following scenes:
1. The pet sitting at a desk stamping “APPROVED” on a document, wearing a subtle tie or collar.
2. The pet wearing a headset while using a laptop during a virtual meeting, focused and attentive.
3. The pet taking a coffee break, holding a paw-print mug next to a notebook on a wooden desk.
4. The pet holding a red pen in its mouth, standing near a whiteboard with simple charts or paw-themed graphs, looking like it’s brainstorming.`,
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
    prompt: `A dramatic portrait of a pet as a movie star in a high-quality, cinematic scene with realistic lighting, detailed textures, and shallow depth of field. The image should look like a still from a blockbuster movie. Please generate one of the following scenes:
1. The pet standing heroically on a rain-soaked city street at night, with glowing neon lights reflecting on the pavement.
2. The pet posing like an adventurer on a windswept mountain peak at golden hour, with epic clouds in the background.
3. The pet sitting in a dimly lit vintage theater with a spotlight overhead, surrounded by red velvet curtains.
4. The pet running through an action-packed chase scene in a futuristic sci-fi cityscape, with motion blur for dynamic energy.`,
    originalImage: 'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_400/photo-to-art/feed-previews/cinematic_v2/original.png',
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