const pages = {
  home: {
    title: 'Home',
    href: '/',
    label: 'Home',
    sections: [{
      id: 'hero',
      title: 'Hero'
    },
    {
      id: 'what-i-do',
      title: 'What I Do'
    },
    {
      id: 'selected-works',
      title: 'Selected Works'
    },
    {
      id: 'contact',
      title: 'Contact'
    }
    ]
  },
  about: {
    title: 'About',
    href: '/about',
    label: 'About',
    sections: [{
      id: 'about',
      title: 'About me'
    },
    {
      id: 'experience',
      title: 'Experience'
    },
    {
      id: 'awards',
      title: 'Awards'
    },
    {
      id: 'contact',
      title: 'Contact'
    }
    ]
  },
  project: {
    title: 'Projects',
    href: '/projects',
    label: 'Projects',
    sections: [
      {
        id: 'design',
        title: 'Design'
      },
      {
        id: 'development',
        title: 'Development'
      },
      {
        id: 'showcase',
        title: 'Showcase'
      },
      {
        id: 'Testimonials',
        title: 'Testimonials'
      },
      {
        id: 'Contact',
        title: 'Contact'
      }
    ]
  },
  contact: {
    title: 'Contact',
    href: '/contact',
    label: 'contact',
    sections: [{
      id: 'info',
      title: 'Info'
    },
    {
      id: 'collaboration',
      title: 'Collaboration'
    },
    {
      id: 'form',
      title: 'Form'
    },
    {
      id: 'contact',
      title: 'Contact'
    }
    ]
  }
};

const services = [{
  id: 1,
  number: '01',
  title: 'Graphic',
  description: 'Building strong brand visuals through creative concepts and graphics.',
  features: [{
    number: '01',
    name: 'Product & Merchandise'
  },
  {
    number: '02',
    name: 'Branding Concepts'
  },
  {
    number: '03',
    name: 'Visual Identity Systems'
  },
  ],
  tags: ['Graphics', 'Branding', 'Creative Direction']
},
{
  id: 2,
  number: '02',
  title: 'UI/UX',
  description: 'Crafting intuitive user experiences and visually appealing interfaces.',
  features: [{
    number: '01',
    name: 'User Experience Research'
  },
  {
    number: '02',
    name: 'Interface Design'
  },
  {
    number: '03',
    name: 'Prototyping & Wireframing'
  }
  ],
  tags: ['UI/UX', 'User Research', 'Prototyping']
},
{
  id: 3,
  number: '03',
  title: 'Development',
  description: 'Creating responsive websites with seamless and brand-focused experiences.',
  features: [{
    number: '01',
    name: 'Responsive Web Development'
  },
  {
    number: '02',
    name: 'Frontend Implementation'
  },
  {
    number: '03',
    name: 'Portfolio & Business Websites'
  }
  ],
  tags: ['Frontend', 'Web Design', 'Development']
}
];

import { ovelo1, ovelo2, ovelo3, ovelo4, ovelo5, ovelo6, ovelo7, ovelo8 } from '@/assets';

const projects = [
  {
    id: 1,
    slug: 'ovelo-eyewear',
    title: 'Ovelo Eyewear',
    subtitle: 'Modern Eyewear Branding',
    description: 'An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.',
    overview: 'Ovelo Eyewear is a premium eyewear brand that merges modern aesthetics with functional optical care. The branding project involved creating a comprehensive visual identity system — from logo design and typography choices to packaging and marketing collateral. Every element was crafted to communicate sophistication and clarity, reflecting the precision of optical craftsmanship.',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=75&w=1200&auto=format&fit=crop',
    category: 'Branding',
    tags: ['Graphics', 'Branding'],
    role: 'Brand Designer',
    client: 'Ovelo Eyewear',
    date: {
      month: 'June',
      year: '2024'
    },
    link: '/projects/ovelo-eyewear',
    featured: true,
    selected: true,
    gallery: [
      ovelo1,
      ovelo2,
      ovelo3,
      ovelo4,
      ovelo5,
      ovelo6,
      ovelo7,
      ovelo8
    ]
  },
  {
    id: 2,
    slug: 'nostratic-archive',
    title: 'Nostratic Archive',
    subtitle: 'Creative Studio Agency',
    description: 'Branding and Web Development for a creative studio agency in Indonesia. that specializes in digital products.',
    overview: 'Nostratic Archive is a creative studio based in Indonesia specializing in digital products and immersive experiences. The project encompassed full branding development and a custom-built website, designed to showcase the studio\'s portfolio with a bold, editorial feel. The website features smooth scroll-driven animations and a dark, cinematic aesthetic that captures the studio\'s creative identity.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=75&w=1200&auto=format&fit=crop',
    category: 'Websites',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    role: 'UI/UX Designer & Developer',
    client: 'Nostratic Studio',
    date: {
      month: 'February',
      year: '2025'
    },
    link: '/projects/nostratic-archive',
    featured: true,
    selected: true,
    gallery: [
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=75&w=1200&auto=format&fit=crop',
    ]
  },
  {
  id: 3,
  slug: 'lunavara',
  title: 'Lunavara',
  subtitle: 'Modern Nursery & Plant Art',
  description: 'Lunavara is a modern nursery and plant art. focused on aesthetic and minimalism audience',
  overview: 'Lunavara is a modern nursery and botanical art brand targeting design-conscious plant lovers. The project included creating a complete website experience with an emphasis on clean, minimal layouts that let the plant imagery breathe. The design balances organic warmth with modern grid structures, resulting in a digital space that feels both natural and curated.',
  image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=75&w=1200&auto=format&fit=crop',
  category: 'Websites',
  tags: ['Web Development', 'UI/UX'],
  role: 'Frontend Developer',
  client: 'Lunavara',
  date: {
    month: 'August',
    year: '2024'
  },
  link: '/projects/lunavara',
  featured: true,
  selected: true,
  gallery: [
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=75&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=75&w=1200&auto=format&fit=crop'
  ]
  },
  {
    id: 4,
    slug: 'investime-plus',
    title: 'Investime+',
    subtitle: 'A Website app for calculate compound interest',
    description: 'A Calculator Website based app that can help you to calculate your compound interest and also can help you to plan your investment in the future.',
    overview: 'Investime+ is a web-based financial calculator designed to make compound interest calculations accessible and intuitive. The application features a clean, data-driven interface with interactive charts and real-time calculation updates. Built with a focus on financial literacy, it helps users visualize long-term investment growth through elegant data visualization and thoughtful UX patterns.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=1200&auto=format&fit=crop',
    category: 'Applications',
    tags: ['Web App', 'FinTech'],
    role: 'Full-Stack Developer',
    client: 'Personal Project',
    date: {
      month: 'May',
      year: '2024'
    },
    link: '/projects/investime-plus',
    featured: true,
    selected: true,
    gallery: [
      'https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=75&w=1200&auto=format&fit=crop',
    ]
  },
  {
    id: 5,
    slug: 'dyrit',
    title: 'Dyrit',
    subtitle: 'An App for manage and organize your assets as freelance designer',
    description: 'A design asset management platform for freelance designers to organize, tag, and share their creative files.',
    overview: 'Dyrit is a specialized asset management application built for freelance designers who need to efficiently organize, version, and share their design files. The platform offers intuitive folder structures, tagging systems, and client-sharing capabilities. The interface prioritizes speed and visual clarity, letting designers focus on their creative work rather than file management.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=75&w=1200&auto=format&fit=crop',
    category: 'Websites',
    tags: ['Web App', 'Productivity'],
    role: 'Product Designer & Developer',
    client: 'Personal Project',
    date: {
      month: 'March',
      year: '2024'
    },
    link: '/projects/dyrit',
    featured: true,
    selected: true,
    gallery: [
      'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005192384-a83a8bd57fbe?q=75&w=1200&auto=format&fit=crop',
    ]
  },
  {
    id: 6,
    slug: 'routines-plus',
    title: 'Routines+',
    subtitle: 'Modern scheduling and time management',
    description: 'Intuitive application for productivity that can help you to manage the routines and time management in a modern and simple way.',
    overview: 'Routines+ is a productivity application that reimagines daily scheduling with a modern, minimal interface. The app helps users build consistent habits through intuitive time-blocking, visual progress tracking, and gentle reminder systems. Designed with a focus on reducing cognitive load, the UI uses calming colors and smooth animations to make planning feel effortless.',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=75&w=1200&auto=format&fit=crop',
    category: 'Applications',
    tags: ['Mobile App', 'Productivity'],
    role: 'UI/UX Designer',
    client: 'Personal Project',
    date: {
      month: 'January',
      year: '2024'
    },
    link: '/projects/routines-plus',
    featured: true,
    selected: false,
    gallery: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=75&w=1200&auto=format&fit=crop',
    ]
  },
  {
    id: 7,
    slug: 'shukari',
    title: 'Shukari',
    subtitle: 'Shukari branding and visual concept',
    description: 'Comprehensive branding and visual identity project for Shukari.',
    overview: 'Shukari is a bold branding project that establishes a strong visual identity through custom typography, an expressive color palette, and versatile brand assets. The identity system spans print and digital applications, from business cards and stationery to social media templates and merchandise mockups. Every touchpoint is designed to communicate the brand\'s distinctive personality.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=75&w=1200&auto=format&fit=crop',
    category: 'Branding',
    tags: ['Branding', 'Design', 'Identity'],
    role: 'Brand Designer',
    client: 'Shukari',
    date: {
      month: 'November',
      year: '2023'
    },
    link: '/projects/shukari',
    featured: false,
    selected: true,
    gallery: [
      'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=75&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=75&w=1200&auto=format&fit=crop',
    ]
  }
];

// Derived: Selected works are projects marked as selected
const works = projects.filter(project => project.selected);

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'websites', label: 'Websites' },
  { id: 'applications', label: 'Applications' },
  { id: 'branding', label: 'Branding' }
];

const socials = [{
  title: 'Github',
  href: 'https://github.com/awtogar',
  icon: 'github',
  label: 'github'
},
{
  title: 'LinkedIn',
  href: 'https://www.linkedin.com/in/awaluddintogar',
  icon: 'linkedin',
  label: 'linkedin'
},
{
  title: 'Behance',
  href: 'https://www.behance.net/awaluddintogar',
  icon: 'behance',
  label: 'behance'
},
{
  title: 'Instagram',
  href: 'https://www.instagram.com/awtogarr',
  icon: 'instagram',
  label: 'instagram'
},
];

const contact_info = {
  email: 'info@awtogar.com',
  phone: '+62 85156015818',
  credits: `© ${new Date().getFullYear()} Awtogar.`,
  copyright: `All rights reserved.`
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
    achievements: [
      'Assisted in managing IT project timelines and task coordination',
      'Supported cross-team communication and project documentation'
    ],
    competencies: [
      'Time Management',
      'Communication',
      'Leadership'
    ],
    tools: [
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Project Documentation Tools'
    ]
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
      'Digitized and integrated 4,000+ art assets into a centralized system'
    ],
    competencies: [
      'Data Management',
      'Automation Workflow',
      'System Documentation'
    ],
    tools: [
      'Adobe Creative Suite',
      'Adobe Script',
      'Google Workspace',
    ]
  },
  {
    id: 3,
    title: 'Graphic Designer',
    company: 'Nostratic Studio',
    position: 'Freelance',
    location: 'Jakarta, Indonesia',
    startDate: '2022-08',
    endDate: '2024-02',
    achievements: [
      'Designed branding and visual identity projects for 100+ clients worldwide'
    ],
    competencies: [
      'Branding',
      'Visual Identity Design',
      'Creative Direction',
    ],
    tools: [
      'Adobe Creative Suite',
      'Adobe Script',
      'Figma',
    ]
  }
];

export {
  pages,
  services,
  works,
  projects,
  projectCategories,
  socials,
  contact_info,
  experience
};
