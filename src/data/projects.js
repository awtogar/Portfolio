import oveloLogo from '../../public/assets/images/projects/ovelo/cover.svg?react';
import nostraticLogo from '../../public/assets/images/projects/nostratic/cover.svg?react';
import synoraLogo from '../../public/assets/images/projects/synora/cover.svg?react';
import lunavaraLogo from '../../public/assets/images/projects/lunavara/cover.svg?react';
import investimeLogo from '../../public/assets/images/projects/investime/cover.svg?react';
import routinesLogo from '../../public/assets/images/projects/routines/cover.svg?react';

import { getProjectMedia, placeholder } from '@/lib/media';

const oveloMedia = getProjectMedia('ovelo');
const nostraticMedia = getProjectMedia('nostratic');
const synoraMedia = getProjectMedia('synora');
const lunavaraMedia = getProjectMedia('lunavara');

export const projects = [
  {
    id: 1,
    slug: 'ovelo',
    client: 'ovelo',
    type: 'Branding',
    year: '2025',
    logo: oveloLogo,
    thumbnail: oveloMedia.gallery[14] || oveloMedia.thumbnail,
    video: oveloMedia.video,
    description: 'An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.',
    tags: ['Graphics', 'Branding'],
    date: { month: 'June', year: '2024' },
    selected: true,
    gallery: oveloMedia.gallery,
  },
  {
    id: 2,
    slug: 'nostratic-archive',
    client: 'Nostratic Studio',
    type: 'Websites',
    year: '2025',
    logo: nostraticLogo,
    thumbnail: nostraticMedia.thumbnail,
    video: nostraticMedia.video,
    description: 'Branding and Web Development for a creative studio agency in Indonesia. that specializes in digital products.',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: { month: 'February', year: '2025' },
    selected: true,
    gallery: nostraticMedia.gallery,
  },
  {
    id: 3,
    slug: 'lunavara',
    client: 'Lunavara',
    type: 'Websites',
    year: '2024',
    logo: lunavaraLogo,
    thumbnail: lunavaraMedia.thumbnail || placeholder,
    video: lunavaraMedia.video,
    description: 'Lunavara is a modern nursery and plant art. focused on aesthetic and minimalism audience',
    tags: ['Web Development', 'UI/UX'],
    date: { month: 'August', year: '2024' },
    selected: false,
    gallery: lunavaraMedia.gallery,
  },
  {
    id: 4,
    slug: 'investime-plus',
    client: 'Investime+',
    type: 'Applications',
    year: '2024',
    logo: investimeLogo,
    thumbnail: placeholder,
    video: null,
    description: 'A Calculator Website based app that can help you to calculate your compound interest and also can help you to plan your investment in the future.',
    tags: ['Web App', 'FinTech'],
    date: { month: 'May', year: '2024' },
    selected: false,
    gallery: [],
  },
  {
    id: 5,
    slug: 'routines-plus',
    client: 'Routines+',
    type: 'Applications',
    year: '2024',
    logo: routinesLogo,
    thumbnail: placeholder,
    video: null,
    description: 'Intuitive application for productivity that can help you to manage the routines and time management in a modern and simple way.',
    tags: ['Mobile App', 'Productivity'],
    date: { month: 'January', year: '2024' },
    selected: false,
    gallery: [],
  },
  {
    id: 6,
    slug: 'synora',
    client: 'Synora',
    type: 'Branding',
    year: '2023',
    logo: synoraLogo,
    thumbnail: synoraMedia.thumbnail,
    video: synoraMedia.video,
    description: 'Comprehensive branding and visual identity project for Synora.',
    tags: ['Branding', 'Design', 'Identity'],
    date: { month: 'November', year: '2023' },
    selected: false,
    gallery: synoraMedia.gallery,
  },
];
