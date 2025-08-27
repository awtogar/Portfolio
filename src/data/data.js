import { Features } from "tailwindcss";

export const services = [
  {
    id: 1,
    number: '01',
    title: 'Graphic Design',
    description:
      'Focused on graphics that work in streetwear and product-focused brands.',
    features: [
      { number: '01', name: 'T-Shirt Design' },
      { number: '02', name: 'Merch & Apparel Design' },
      { number: '03', name: 'Product Mockups' },
      { number: '04', name: 'Brand Visual Assets' }
    ],
    tags: ['Graphics', 'Branding']
  },
  {
    id: 2,
    number: '02',
    title: 'Web Development',
    description:
      'Crafting responsive and user-friendly websites that align with your brand identity. I focus on clean code, smooth interaction, and visually striking interfaces to help your business stand out online.',
    features: [
      { number: '01', name: 'Responsive Website Development' },
      { number: '02', name: 'UI/UX Implementation' },
      { number: '03', name: 'Portfolio & Business Sites' },
      { number: '04', name: 'Basic CMS Integration' }
    ],
    tags: ['UI/UX', 'Web Development']
  },
  {
    id: 3,
    number: '03',
    title: 'Motion & Animation',
    description:
      'Adding life to visuals with motion. I create simple yet engaging animations that enhance your designs or websites, making your content more dynamic and memorable.',
    features: [
      { number: '01', name: 'Logo Animation' },
      { number: '02', name: 'UI Micro-Interactions' },
      { number: '03', name: 'Animated Visuals for Social Media' }
    ],
    tags: ['Graphics', 'Motion']
  }
];

export const allTags = [
  { id: 1, name: 'Graphics' },
  { id: 2, name: 'Branding' },
  { id: 3, name: 'Motion' },
  { id: 4, name: 'UI/UX' },
  { id: 5, name: 'Web Development' }
];
