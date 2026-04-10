import {
  about1, about2,
  img1, img3, img4, img5, img6,
  ovelo1, ovelo2, ovelo3, ovelo4,
  nostraticLogo, lunavaraLogo, colorrideLogo, synoraLogo,
  introVideo1, introVideo2
} from '../assets';

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

const projects = [
  {
    id: 1,
    slug: 'ovelo',
    client: 'ovelo',
    type: 'Branding',
    year: '2025',
    logo: ovelo1,
    thumbnail: ovelo1,
    video: introVideo1,
    description: 'An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.',
    tags: ['Graphics', 'Branding'],
    date: {
      month: 'June',
      year: '2024',
    },
    selected: true,
    gallery: [ovelo1, ovelo2, ovelo3, ovelo4],
  },
  {
    id: 2,
    slug: 'nostratic-archive',
    client: 'Nostratic Studio',
    type: 'Websites',
    year: '2025',
    logo: nostraticLogo,
    thumbnail: img1,
    video: null,
    description: 'Branding and Web Development for a creative studio agency in Indonesia. that specializes in digital products.',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: {
      month: 'February',
      year: '2025',
    },
    selected: true,
    gallery: [img3, img4, img5],
  },
  {
    id: 3,
    slug: 'lunavara',
    client: 'Lunavara',
    type: 'Websites',
    year: '2024',
    logo: lunavaraLogo,
    thumbnail: img4,
    video: null,
    description: 'Lunavara is a modern nursery and plant art. focused on aesthetic and minimalism audience',
    tags: ['Web Development', 'UI/UX'],
    date: {
      month: 'August',
      year: '2024',
    },
    selected: false,
    gallery: [img1, img6],
  },
  {
    id: 4,
    slug: 'investime-plus',
    client: 'Investime+',
    type: 'Applications',
    year: '2024',
    logo: colorrideLogo,
    thumbnail: img5,
    video: null,
    description: 'A Calculator Website based app that can help you to calculate your compound interest and also can help you to plan your investment in the future.',
    tags: ['Web App', 'FinTech'],
    date: {
      month: 'May',
      year: '2024',
    },
    selected: false,
    gallery: [img3, img4],
  },
  {
    id: 5,
    slug: 'routines-plus',
    client: 'Routines+',
    type: 'Applications',
    year: '2024',
    logo: synoraLogo,
    thumbnail: img6,
    video: null,
    description: 'Intuitive application for productivity that can help you to manage the routines and time management in a modern and simple way.',
    tags: ['Mobile App', 'Productivity'],
    date: {
      month: 'January',
      year: '2024',
    },
    selected: false,
    gallery: [img1, img5],
  },
  {
    id: 6,
    slug: 'shukari',
    client: 'Shukari',
    type: 'Branding',
    year: '2023',
    logo: nostraticLogo,
    thumbnail: about1,
    video: null,
    description: 'Comprehensive branding and visual identity project for Shukari.',
    tags: ['Branding', 'Design', 'Identity'],
    date: {
      month: 'November',
      year: '2023',
    },
    selected: false,
    gallery: [about2, img3, img4],
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
    startDate: '11/2025',
    endDate: 'Present',
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
    startDate: '09/2024',
    endDate: '12/2024',
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
    startDate: '08/2022',
    endDate: '02/2024',
    achievements: ['Designed branding and visual identity projects for 100+ clients worldwide'],
    competencies: ['Branding', 'Visual Identity Design', 'Creative Direction'],
    tools: ['Adobe Creative Suite', 'Adobe Script', 'Figma'],
  },
];

export { pages, services, projects, projectCategories, socials, contact_info, experience };
