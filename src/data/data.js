import { heroReels } from '@/assets';
import oveloLogo from '@/assets/images/project/ovelo.svg';
import nostraticLogo from '@/assets/images/project/nostratic.svg';
import synoraLogo from '@/assets/images/project/synora.svg';
import lunavaraLogo from '@/assets/images/project/lunavara.svg';
import investimeLogo from '@/assets/images/project/investime.svg';
import routinesLogo from '@/assets/images/project/routines.svg';
import serojaLogo from '@/assets/images/project/seroja.svg';

// Navigation & Contact Data
export const sectionLink = {
  home: {
    title: 'Home',
    href: '/',
    label: 'Home',
  },
  about: {
    title: 'About',
    href: '/',
    label: 'About',
  },
  services: {
    title: 'Services',
    href: '/',
    label: 'Services',
  },
  works: {
    title: 'Works',
    href: '/',
    label: 'Works',
  },
  contact: {
    title: 'Contact',
    href: '/',
    label: 'Contact',
    
  },
};

export const socials = [
  { title: 'Github', href: 'https://github.com/awtogar', icon: 'github', label: 'github' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/awaluddintogar', icon: 'linkedin', label: 'linkedin' },
  { title: 'Behance', href: 'https://www.behance.net/awaluddintogar', icon: 'behance', label: 'behance' },
  { title: 'Instagram', href: 'https://www.instagram.com/awtogarr_', icon: 'instagram', label: 'instagram' },
];

export const contact_info = {
  email: 'awaluddintogar@gmail.com',
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
  seroja: serojaLogo,
};

export const projects = [
  {
    id: 1,
    slug: 'ovelo',
    client: 'ovelo',
    type: 'Branding',
    description: 'An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.',
    tags: ['Graphics', 'Branding'],
    date: { month: 'June', year: '2024' },
    url: 'www.ovelo.awtogar.com',
    selected: true,
    thumbnail: '/assets/projects/ovelo/thumbnail.webp',
    reels: null,
    assets: [
      { type: 'image', src: '/assets/projects/ovelo/1.webp', alt: 'Ovelo 1' },
      { type: 'image', src: '/assets/projects/ovelo/2.webp', alt: 'Ovelo 2' },
      { type: 'image', src: '/assets/projects/ovelo/3.webp', alt: 'Ovelo 3' },
      { type: 'image', src: '/assets/projects/ovelo/4.webp', alt: 'Ovelo 4' },
      { type: 'image', src: '/assets/projects/ovelo/5.webp', alt: 'Ovelo 5' },
    ],
  },
  {
    id: 2,
    slug: 'nostratic',
    client: 'Nostratic Studio',
    type: 'Websites',
    description: 'Branding and Web Development for a creative studio agency in Indonesia. that specializes in digital products.',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: { month: 'February', year: '2025' },
    url: 'www.nostratic.awtogar.com',
    selected: true,
    thumbnail: '/assets/projects/nostratic/thumbnail.webp',
    reels: '/assets/projects/nostratic/thumbnail-reels.mp4',
    assets: [
      { type: 'image', src: '/assets/projects/nostratic/1.webp', alt: 'Images first' },
      { type: 'image', src: '/assets/projects/nostratic/2.webp', alt: 'Images second' },
      { type: 'image', src: '/assets/projects/nostratic/3.webp', alt: 'Images third' },
      { type: 'image', src: '/assets/projects/nostratic/4.webp', alt: 'Images fourth' },
      { type: 'video', src: '/assets/projects/nostratic/project-reels.mp4', alt: 'project reels' },
    ],
  },
  // {
  //   id: 3,
  //   slug: 'lunavara',
  //   client: 'Lunavara',
  //   type: 'Websites',
  //   description: 'Lunavara is a modern nursery and plant art. focused on aesthetic and minimalism audience',
  //   tags: ['Web Development', 'UI/UX'],
  //   date: { month: 'August', year: '2024' },
  //   url: 'www.ovelo.awtogar.com',
  //   selected: false,
  //   thumbnail: null,
  //   reels: null,
  //   assets: [],
  // },
  // {
  //   id: 4,
  //   slug: 'investime',
  //   client: 'Investime+',
  //   type: 'Applications',
  //   description: 'A Calculator Website based app that can help you to calculate your compound interest and also can help you to plan your investment in the future.',
  //   tags: ['Web App', 'FinTech'],
  //   date: { month: 'May', year: '2024' },
  //   url: 'www.investime.awtogar.com',
  //   selected: false,
  //   thumbnail: '/assets/projects/investime/thumbnail.jpg',
  //   reels: '/assets/projects/investime/reels.webm',
  //   assets: [{ type: 'image', src: '/assets/projects/investime/thumbnail.jpg', alt: 'Investime+' }],
  // },
  // {
  //   id: 5,
  //   slug: 'routines',
  //   client: 'Routines+',
  //   type: 'Applications',
  //   description: 'Intuitive application for productivity that can help you to manage the routines and time management in a modern and simple way.',
  //   tags: ['Mobile App', 'Productivity', 'Landing Page', 'SEO'],
  //   date: { month: 'January', year: '2024' },
  //   url: 'www.routines.awtogar.com',
  //   selected: false,
  //   thumbnail: null,
  //   reels: null,
  //   assets: [],
  // },
  // {
  //   id: 6,
  //   slug: 'synora',
  //   client: 'Synora',
  //   type: 'Branding',
  //   description: 'Comprehensive branding and visual identity project for Synora.',
  //   tags: ['Branding', 'Design', 'Identity'],
  //   date: { month: 'November', year: '2023' },
  //   url: 'www.synora.awtogar.com',
  //   selected: false,
  //   thumbnail: '/assets/projects/synora/thumbnail.webp',
  //   reels: '/assets/projects/synora/reels.mp4',
  //   assets: [
  //     { type: 'image', src: '/assets/projects/synora/2.webp', alt: 'Synora 2' },
  //     { type: 'image', src: '/assets/projects/synora/3.webp', alt: 'Synora 3' },
  //     { type: 'image', src: '/assets/projects/synora/4.webp', alt: 'Synora 4' },
  //     { type: 'video', src: '/assets/projects/synora/5.mp4', alt: 'Synora 5 Video' },
  //     { type: 'image', src: '/assets/projects/synora/5.webp', alt: 'Synora 5' },
  //   ],
  // },
  // {
  //   id: 7,
  //   slug: 'seroja',
  //   client: 'Seroja',
  //   type: 'Branding',
  //   description: 'Branding and visual identity project for Seroja.',
  //   tags: ['Branding', 'Visual Identity', 'Design'],
  //   date: { month: 'October', year: '2024' },
  //   url: null,
  //   selected: false,
  //   thumbnail: '/assets/projects/seroja/1.webp',
  //   reels: null,
  //   assets: [
  //     { type: 'image', src: '/assets/projects/seroja/1.webp', alt: 'Seroja 1' },
  //     { type: 'image', src: '/assets/projects/seroja/2.webp', alt: 'Seroja 2' },
  //     { type: 'image', src: '/assets/projects/seroja/3.webp', alt: 'Seroja 3' },
  //     { type: 'image', src: '/assets/projects/seroja/4.webp', alt: 'Seroja 4' },
  //     { type: 'image', src: '/assets/projects/seroja/5.webp', alt: 'Seroja 5' },
  //     { type: 'image', src: '/assets/projects/seroja/6.webp', alt: 'Seroja 6' },
  //   ],
  // },
  {
    id: 8,
    slug: 'nyambi',
    client: 'Nyambi',
    type: 'Applications',
    description: 'Application and UI/UX design project for Nyambi.',
    tags: ['UI/UX', 'Mobile App', 'Design'],
    date: { month: 'September', year: '2024' },
    url: null,
    selected: false,
    thumbnail: null,
    reels: '/assets/projects/nyambi/Splash screen.mp4',
    assets: [{ type: 'video', src: '/assets/projects/nyambi/Splash screen.mp4', alt: 'Nyambi Splash Screen' }],
  },
].map(p => ({ ...p, logo: logosBySlug[p.slug] ?? null }));


