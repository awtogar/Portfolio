const pages = {
  home: {
    title: 'Home',
    href: '/',
    label: 'Home',
    sections: [
      {
        id: 'hero',
        title: 'Hero',
      },
      {
        id: 'what-i-do',
        title: 'What I Do',
      },
      {
        id: 'selected-works',
        title: 'Selected Works',
      },
      {
        id: 'contact',
        title: 'Contact',
      },
    ],
  },
  about: {
    title: 'About',
    href: '/about',
    label: 'About',
    sections: [
      {
        id: 'about',
        title: 'About me',
      },
      {
        id: 'experience',
        title: 'Experience',
      },
      {
        id: 'awards',
        title: 'Awards',
      },
      {
        id: 'contact',
        title: 'Contact',
      },
    ],
  },
  project: {
    title: 'Projects',
    href: '/projects',
    label: 'Projects',
    sections: [
      {
        id: 'design',
        title: 'Design',
      },
      {
        id: 'development',
        title: 'Development',
      },
      {
        id: 'showcase',
        title: 'Showcase',
      },
      {
        id: 'Testimonials',
        title: 'Testimonials',
      },
      {
        id: 'Contact',
        title: 'Contact',
      },
    ],
  },
  contact: {
    title: 'Contact',
    href: '/contact',
    label: 'contact',
    sections: [
      {
        id: 'info',
        title: 'Info',
      },
      {
        id: 'collaboration',
        title: 'Collaboration',
      },
      {
        id: 'form',
        title: 'Form',
      },
      {
        id: 'contact',
        title: 'Contact',
      },
    ],
  },
};

const services = [
  {
    id: 1,
    number: '01',
    title: 'Graphic',
    description: 'Building strong brand visuals through creative concepts and graphics.',
    features: [
      {
        number: '01',
        name: 'Product & Merchandise',
      },
      {
        number: '02',
        name: 'Branding Concepts',
      },
      {
        number: '03',
        name: 'Visual Identity Systems',
      },
    ],
    tags: ['Graphics', 'Branding', 'Creative Direction'],
  },
  {
    id: 2,
    number: '02',
    title: 'UI/UX',
    description: 'Crafting intuitive user experiences and visually appealing interfaces.',
    features: [
      {
        number: '01',
        name: 'User Experience Research',
      },
      {
        number: '02',
        name: 'Interface Design',
      },
      {
        number: '03',
        name: 'Prototyping & Wireframing',
      },
    ],
    tags: ['UI/UX', 'User Research', 'Prototyping'],
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    description: 'Creating responsive websites with seamless and brand-focused experiences.',
    features: [
      {
        number: '01',
        name: 'Responsive Web Development',
      },
      {
        number: '02',
        name: 'Frontend Implementation',
      },
      {
        number: '03',
        name: 'Portfolio & Business Websites',
      },
    ],
    tags: ['Frontend', 'Web Design', 'Development'],
  },
];

import { ovelo1, ovelo2, ovelo3, ovelo4, ovelo5, ovelo6, ovelo7, ovelo8 } from '@/assets';

const projects = [
  {
    id: 1,
    slug: 'ovelo',
    client: 'ovelo',
    type: 'Branding',
    year: '2025',
    logo: ovelo1,
    thumbnail: ovelo1,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.',
    tags: ['Graphics', 'Branding'],
    date: {
      month: 'June',
      year: '2024',
    },
    selected: true,
    gallery: [ovelo1, ovelo2, ovelo3, ovelo4, ovelo5, ovelo6, ovelo7, ovelo8],
  },
  {
    id: 2,
    slug: 'nostratic-archive',
    client: 'Nostratic Studio',
    type: 'Websites',
    year: '2025',
    logo: null,
    thumbnail: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=75&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Branding and Web Development for a creative studio agency in Indonesia. that specializes in digital products.',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: {
      month: 'February',
      year: '2025',
    },
    selected: true,
    gallery: [
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=75&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 3,
    slug: 'lunavara',
    client: 'Lunavara',
    type: 'Websites',
    year: '2024',
    logo: null,
    thumbnail: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=75&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Lunavara is a modern nursery and plant art. focused on aesthetic and minimalism audience',
    tags: ['Web Development', 'UI/UX'],
    date: {
      month: 'August',
      year: '2024',
    },
    selected: false,
    gallery: [
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=75&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 4,
    slug: 'investime-plus',
    client: 'Investime+',
    type: 'Applications',
    year: '2024',
    logo: null,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'A Calculator Website based app that can help you to calculate your compound interest and also can help you to plan your investment in the future.',
    tags: ['Web App', 'FinTech'],
    date: {
      month: 'May',
      year: '2024',
    },
    selected: false,
    gallery: [
      'https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=75&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 5,
    slug: 'routines-plus',
    client: 'Routines+',
    type: 'Applications',
    year: '2024',
    logo: null,
    thumbnail: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=75&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Intuitive application for productivity that can help you to manage the routines and time management in a modern and simple way.',
    tags: ['Mobile App', 'Productivity'],
    date: {
      month: 'January',
      year: '2024',
    },
    selected: false,
    gallery: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=75&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 6,
    slug: 'shukari',
    client: 'Shukari',
    type: 'Branding',
    year: '2023',
    logo: null,
    thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=75&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Comprehensive branding and visual identity project for Shukari.',
    tags: ['Branding', 'Design', 'Identity'],
    date: {
      month: 'November',
      year: '2023',
    },
    selected: false,
    gallery: [
      'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=75&w=1200&auto=format&fit=crop',
    ],
  },
];

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'websites', label: 'Websites' },
  { id: 'applications', label: 'Applications' },
  { id: 'branding', label: 'Branding' },
];

const socials = [
  {
    title: 'Github',
    href: 'https://github.com/awtogar',
    icon: 'github',
    label: 'github',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/awaluddintogar',
    icon: 'linkedin',
    label: 'linkedin',
  },
  {
    title: 'Behance',
    href: 'https://www.behance.net/awaluddintogar',
    icon: 'behance',
    label: 'behance',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/awtogarr',
    icon: 'instagram',
    label: 'instagram',
  },
];

const contact_info = {
  email: 'info@awtogar.com',
  phone: '+62 85156015818',
  credits: `© ${new Date().getFullYear()} Awtogar.`,
  copyright: `All rights reserved.`,
};

const experience = [
  {
    id: 1,
    title: 'IT Project Management',
    company: 'PT Bank Negara Indonesia (Persero) Tbk',
    position: 'Intern',
    location: 'Jakarta, Indonesia',
    startDate: '2025-11',
    endDate: null,
    achievements: ['Assisted in managing IT project timelines and task coordination', 'Supported cross-team communication and project documentation'],
    competencies: ['Time Management', 'Communication', 'Leadership'],
    tools: ['Microsoft Excel', 'Microsoft PowerPoint', 'Project Documentation Tools'],
  },
  {
    id: 2,
    title: 'Data & Art Administrator',
    company: 'PT Digital Inisiatif (Kompas Gramedia)',
    position: 'Intern',
    location: 'Jakarta, Indonesia',
    startDate: '2024-09',
    endDate: '2024-12',
    achievements: [
      'Implemented a QR-based system to display detailed artwork information',
      'Designed a QR-based storage layout to map artwork placement accurately',
      'Digitized and integrated 4,000+ art assets into a centralized system',
    ],
    competencies: ['Data Management', 'Automation Workflow', 'System Documentation'],
    tools: ['Adobe Creative Suite', 'Adobe Script', 'Google Workspace'],
  },
  {
    id: 3,
    title: 'Graphic Designer',
    company: 'Nostratic Studio',
    position: 'Freelance',
    location: 'Jakarta, Indonesia',
    startDate: '2022-08',
    endDate: '2024-02',
    achievements: ['Designed branding and visual identity projects for 100+ clients worldwide'],
    competencies: ['Branding', 'Visual Identity Design', 'Creative Direction'],
    tools: ['Adobe Creative Suite', 'Adobe Script', 'Figma'],
  },
];

export { pages, services, projects, projectCategories, socials, contact_info, experience };
