import { heroReels } from '@/assets';
import oveloLogo from '@/assets/images/project/ovelo.svg';
import nostraticLogo from '@/assets/images/project/nostratic.svg';
import synoraLogo from '@/assets/images/project/synora.svg';
import lunavaraLogo from '@/assets/images/project/lunavara.svg';
import investimeLogo from '@/assets/images/project/investime.svg';
import routinesLogo from '@/assets/images/project/routines.svg';

// Navigation & Contact Data
export const pages = {
  home: {
    title: 'Home',
    href: '/',
    label: 'Home',
    sectionId: null,
  },
  about: {
    title: 'About',
    href: '/',
    label: 'About',
    sectionId: 'about',
  },
  services: {
    title: 'Services',
    href: '/',
    label: 'Services',
    sectionId: 'services',
  },
  works: {
    title: 'Works',
    href: '/',
    label: 'Works',
    sectionId: 'works',
  },
  contact: {
    title: 'Contact',
    href: '/',
    label: 'Contact',
    sectionId: 'contact',
  },
};

export const socials = [
  { title: 'Github', href: 'https://github.com/awtogar', icon: 'github', label: 'github' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/awaluddintogar', icon: 'linkedin', label: 'linkedin' },
  { title: 'Behance', href: 'https://www.behance.net/awaluddintogar', icon: 'behance', label: 'behance' },
  { title: 'Instagram', href: 'https://www.instagram.com/awtogarr_', icon: 'instagram', label: 'instagram' },
];

export const contact_info = {
  email: 'info@awtogar.com',
  phone: '+62 8139 9090 251',
  credits: `© ${new Date().getFullYear()} Awtogar.`,
  copyright: `All rights reserved.`,
};

// Services Data
export const services = [
  {
    id: 1,
    number: '01',
    title: 'Graphic',
    video: heroReels,
    description: 'Building strong brand visuals through creative concepts and graphics.',
    features: [
      { number: '01', name: 'Product & Merchandise' },
      { number: '02', name: 'Branding Concepts' },
      { number: '03', name: 'Visual Identity Systems' },
    ],
    tags: ['Graphics', 'Branding', 'Creative Direction'],
  },
  {
    id: 2,
    number: '02',
    title: 'UI/UX',
    video: heroReels,
    description: 'Crafting intuitive user experiences and visually appealing interfaces.',
    features: [
      { number: '01', name: 'User Experience Research' },
      { number: '02', name: 'Interface Design' },
      { number: '03', name: 'Prototyping & Wireframing' },
    ],
    tags: ['UI/UX', 'User Research', 'Prototyping'],
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    video: heroReels,
    description: 'Creating responsive websites with seamless and brand-focused experiences.',
    features: [
      { number: '01', name: 'Responsive Web Development' },
      { number: '02', name: 'Frontend Implementation' },
      { number: '03', name: 'Portfolio & Business Websites' },
    ],
    tags: ['Frontend', 'Web Design', 'Development'],
  },
];

// Projects Data
const logosBySlug = {
  ovelo: oveloLogo,
  nostratic: nostraticLogo,
  synora: synoraLogo,
  lunavara: lunavaraLogo,
  investime: investimeLogo,
  routines: routinesLogo,
};

export const projects = [
  {
    id: 1,
    slug: 'ovelo',
    client: 'ovelo',
    type: 'Branding',
    year: '2025',
    description: 'An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.',
    tags: ['Graphics', 'Branding'],
    date: { month: 'June', year: '2024' },
    selected: true,
    thumbnail: '/assets/projects/ovelo/thumbnail.jpg',
    reels: '/assets/projects/ovelo/reels.mp4',
    assets: [
      { type: 'image', src: '/assets/projects/ovelo/1.webp', alt: 'ovelo 1' },
    ],
  },
  {
    id: 2,
    slug: 'nostratic',
    client: 'Nostratic Studio',
    type: 'Websites',
    year: '2025',
    description: 'Branding and Web Development for a creative studio agency in Indonesia. that specializes in digital products.',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: { month: 'February', year: '2025' },
    selected: true,
    thumbnail: '/assets/projects/nostratic/thumbnail.webp',
    reels: '/assets/projects/nostratic/reels.mp4',
    assets: [
      { type: 'image', src: '/assets/projects/nostratic/1.webp', alt: 'Nostratic Studio 1' },
      { type: 'image', src: '/assets/projects/nostratic/2.webp', alt: 'Nostratic Studio 2' },
      { type: 'image', src: '/assets/projects/nostratic/3.webp', alt: 'Nostratic Studio 3' },
      { type: 'image', src: '/assets/projects/nostratic/4.webp', alt: 'Nostratic Studio 4' },
      { type: 'video', src: '/assets/projects/nostratic/reels.mp4', alt: 'Nostratic Studio Video' },
    ],
  },
  {
    id: 3,
    slug: 'lunavara',
    client: 'Lunavara',
    type: 'Websites',
    year: '2024',
    description: 'Lunavara is a modern nursery and plant art. focused on aesthetic and minimalism audience',
    tags: ['Web Development', 'UI/UX'],
    date: { month: 'August', year: '2024' },
    selected: false,
    thumbnail: null,
    reels: null,
    assets: [],
  },
  {
    id: 4,
    slug: 'investime',
    client: 'Investime+',
    type: 'Applications',
    year: '2024',
    description: 'A Calculator Website based app that can help you to calculate your compound interest and also can help you to plan your investment in the future.',
    tags: ['Web App', 'FinTech'],
    date: { month: 'May', year: '2024' },
    selected: false,
    thumbnail: '/assets/projects/investime/thumbnail.jpg',
    reels: null,
    assets: [{ type: 'image', src: '/assets/projects/investime/thumbnail.jpg', alt: 'Investime+' }],
  },
  {
    id: 5,
    slug: 'routines',
    client: 'Routines+',
    type: 'Applications',
    year: '2024',
    description: 'Intuitive application for productivity that can help you to manage the routines and time management in a modern and simple way.',
    tags: ['Mobile App', 'Productivity', 'Landing Page', 'SEO'],
    date: { month: 'January', year: '2024' },
    selected: false,
    thumbnail: null,
    reels: null,
    assets: [],
  },
  {
    id: 6,
    slug: 'synora',
    client: 'Synora',
    type: 'Branding',
    year: '2023',
    description: 'Comprehensive branding and visual identity project for Synora.',
    tags: ['Branding', 'Design', 'Identity'],
    date: { month: 'November', year: '2023' },
    selected: false,
    thumbnail: '/assets/projects/synora/thumbnail.jpg',
    reels: null,
    assets: [
      { type: 'image', src: '/assets/projects/synora/1.webp', alt: 'Synora 1' },
      { type: 'image', src: '/assets/projects/synora/2.webp', alt: 'Synora 2' },
      { type: 'image', src: '/assets/projects/synora/3.webp', alt: 'Synora 3' },
      { type: 'image', src: '/assets/projects/synora/4.webp', alt: 'Synora 4' },
      { type: 'image', src: '/assets/projects/synora/5.webp', alt: 'Synora 5' },
    ],
  },
].map(p => ({ ...p, logo: logosBySlug[p.slug] ?? null }));

// Testimonials Data
const placeholder = '/assets/images/Placeholder.jpg';

export const testimonials = [
  {
    author: 'Rahmat S.',
    quote:
      "Awaluddin delivered a brand identity that finally felt like us. He pushed back when our ideas weren't working, and we're glad he did — the result is better than anything we imagined.",
    role: 'Founder, Coloride Studio',
    handle: '@rahmatsyah',
    index: '01',
    avatar: placeholder,
  },
  {
    author: 'Dina A.',
    quote:
      'Working with Togar felt like having a senior designer and a developer in one. He understood the product vision immediately and turned it into a UI that our users love.',
    role: 'Product Lead, Lunavara',
    handle: '@dina_ahmad',
    index: '02',
    avatar: placeholder,
  },
  {
    author: 'Marco F.',
    quote:
      'Fast, communicative, and the attention to detail was exceptional. Our website went from zero to launch in three weeks without a single revision request going unanswered.',
    role: 'Creative Director, Ovelo',
    handle: '@marcoferraro',
    index: '03',
    avatar: placeholder,
  },
  {
    author: 'Jessica L.',
    quote: 'Every screen felt intentional. The final product was clean, intuitive, and far exceeded what we initially scoped.',
    role: 'CEO, BrightPath',
    handle: '@jessicalee',
    index: '04',
    avatar: placeholder,
  },
  {
    author: 'Kevin M.',
    quote: 'Communication was effortless from start to finish. We always knew the progress, and every milestone was delivered on time.',
    role: 'Founder, NovaStack',
    handle: '@kevinm',
    index: '05',
    avatar: placeholder,
  },
  {
    author: 'Sarah T.',
    quote: 'The redesign boosted customer confidence immediately. We started receiving compliments within days of launching.',
    role: 'Marketing Manager, Everlane Digital',
    handle: '@saraht',
    index: '06',
    avatar: placeholder,
  },
  {
    author: 'Ahmed R.',
    quote: 'Excellent eye for typography, spacing, and user experience. The interface feels premium without sacrificing usability.',
    role: 'Product Manager, Orbit Labs',
    handle: '@ahmedr',
    index: '07',
    avatar: placeholder,
  },
  {
    author: 'Emily C.',
    quote: 'We appreciated the honest feedback throughout the project. It never felt like someone was simply following instructions.',
    role: 'Co-Founder, Bloomly',
    handle: '@emilyc',
    index: '08',
    avatar: placeholder,
  },
  {
    author: 'Nathan K.',
    quote: 'Reliable, creative, and incredibly efficient. The entire process was smooth, even with multiple stakeholders involved.',
    role: 'Operations Director, Vistora',
    handle: '@nathank',
    index: '09',
    avatar: placeholder,
  },
  {
    author: 'Olivia H.',
    quote: 'Our conversion rate improved after the redesign. The user flow is much clearer, and customers spend more time exploring.',
    role: 'Growth Lead, Peak Commerce',
    handle: '@oliviah',
    index: '10',
    avatar: placeholder,
  },
  {
    author: 'Daniel P.',
    quote: 'The attention to consistency across components made development significantly easier for our engineering team.',
    role: 'Engineering Manager, Fluxify',
    handle: '@danielp',
    index: '11',
    avatar: placeholder,
  },
  {
    author: 'Maya G.',
    quote: 'Professional, responsive, and full of thoughtful ideas. We felt like a true partner rather than just another client.',
    role: 'Founder, Studio Ember',
    handle: '@mayag',
    index: '12',
    avatar: placeholder,
  },
  {
    author: 'Lucas W.',
    quote: 'Our landing page now reflects the quality of our product. It has become one of our strongest sales assets.',
    role: 'Head of Marketing, Nexora',
    handle: '@lucasw',
    index: '13',
    avatar: placeholder,
  },
  {
    author: 'Sophie B.',
    quote: 'The project was delivered exactly when promised, with thoughtful documentation that made handoff incredibly easy.',
    role: 'Project Manager, Verisync',
    handle: '@sophieb',
    index: '14',
    avatar: placeholder,
  },
  {
    author: 'Ryan D.',
    quote: 'Creative solutions, clean execution, and no unnecessary complexity. Everything felt polished from day one.',
    role: 'Founder, PixelForge',
    handle: '@ryand',
    index: '15',
    avatar: placeholder,
  },
  {
    author: 'Isabella N.',
    quote: 'Our team still references the design system months later. It brought consistency to every part of our product.',
    role: 'Design Lead, Solstice Tech',
    handle: '@isabellan',
    index: '16',
    avatar: placeholder,
  },
];
