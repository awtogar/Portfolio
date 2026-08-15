import oveloLogo from '@/assets/images/projects/ovelo/cover.svg?react';
import nostraticLogo from '@/assets/images/projects/nostratic/cover.svg?react';
import synoraLogo from '@/assets/images/projects/synora/cover.svg?react';
import lunavaraLogo from '@/assets/images/projects/lunavara/cover.svg?react';
import investimeLogo from '@/assets/images/projects/investime/cover.svg?react';
import routinesLogo from '@/assets/images/projects/routines/cover.svg?react';

import { getGalleryPaths, getReelPath, placeholder } from '@/lib/media';

const rawProjects = [
  {
    id: 1,
    slug: 'ovelo',
    client: 'ovelo',
    type: 'Branding',
    year: '2025',
    logo: oveloLogo,
    // galleryCount: 23,
    hasReel: true,
    thumbnailCover: 'ovelo/thumbnail.jpg',
    description: 'An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.',
    tags: ['Graphics', 'Branding'],
    date: { month: 'June', year: '2024' },
    selected: true,
  },
  {
    id: 2,
    slug: 'nostratic',
    client: 'Nostratic Studio',
    type: 'Websites',
    year: '2025',
    logo: nostraticLogo,
    // galleryCount: 10,
    hasReel: true,
    thumbnailCover: 'nostratic/thumbnail.jpg',
    description: 'Branding and Web Development for a creative studio agency in Indonesia. that specializes in digital products.',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: { month: 'February', year: '2025' },
    selected: true,
  },
  {
    id: 3,
    slug: 'lunavara',
    client: 'Lunavara',
    type: 'Websites',
    year: '2024',
    logo: lunavaraLogo,
    // galleryCount: 0,
    hasReel: false,
    description: 'Lunavara is a modern nursery and plant art. focused on aesthetic and minimalism audience',
    tags: ['Web Development', 'UI/UX'],
    date: { month: 'August', year: '2024' },
    selected: false,
  },
  {
    id: 4,
    slug: 'investime',
    client: 'Investime+',
    type: 'Applications',
    year: '2024',
    logo: investimeLogo,
    // galleryCount: 0,
    hasReel: false,
    thumbnailCover: 'investime/thumbnail.jpg',
    description: 'A Calculator Website based app that can help you to calculate your compound interest and also can help you to plan your investment in the future.',
    tags: ['Web App', 'FinTech'],
    date: { month: 'May', year: '2024' },
    selected: false,
  },
  {
    id: 5,
    slug: 'routines',
    client: 'Routines+',
    type: 'Applications',
    year: '2024',
    logo: routinesLogo,
    // galleryCount: 0,
    hasReel: false,
    description: 'Intuitive application for productivity that can help you to manage the routines and time management in a modern and simple way.',
    tags: ['Mobile App', 'Productivity'],
    date: { month: 'January', year: '2024' },
    selected: false,
  },
  {
    id: 6,
    slug: 'synora',
    client: 'Synora',
    type: 'Branding',
    year: '2023',
    logo: synoraLogo,
    // galleryCount: 5,
    hasReel: false,
    thumbnailCover: 'synora/thumbnail.jpg',
    description: 'Comprehensive branding and visual identity project for Synora.',
    tags: ['Branding', 'Design', 'Identity'],
    date: { month: 'November', year: '2023' },
    selected: false,
  },
];

export const projects = rawProjects.map(p => {
  const gallery = getGalleryPaths(p.slug);
  return {
    ...p,
    gallery,
    video: getReelPath(p.slug, p.hasReel),
    thumbnail: (p.thumbnailCover != null ? gallery[p.thumbnailCover] : gallery[0]) || placeholder,
  };
});
