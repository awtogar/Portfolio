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

const projects = [
  {
    id: 1,
    title: 'Ovelo Eyewear',
    subtitle: 'Modern Eyewear Branding',
    description: 'An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.',
    image: 'https://placehold.co/800x600/1a1a1a/ffffff?text=1',
    category: 'Branding',
    tags: ['Graphics', 'Branding'],
    date: {
      month: 'June',
      year: '2024'
    },
    link: '/projects/ovelo-eyewear',
    featured: true,
    selected: true
  },
  {
    id: 2,
    title: 'Nostratic Archive',
    subtitle: 'Creative Studio Agency',
    description: 'Branding and Web Development for a creative studio agency in Indonesia. that specializes in digital products.',
    image: 'https://placehold.co/800x600/010101/ffffff?text=2',
    category: 'Websites',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: {
      month: 'February',
      year: '2025'
    },
    link: '/projects/nostratic-archive',
    featured: true,
    selected: true
  },
  {
    id: 3,
    title: 'Lunavara',
    subtitle: 'Modern Nursery & Plant Art',
    description: 'Lunavara is a modern nursery and plant art. focused on aesthetic and minimalism audience',
    image: 'https://placehold.co/800x600/1a1a1a/ffffff?text=3',
    category: 'Websites',
    tags: ['Web Development', 'UI/UX'],
    date: {
      month: 'August',
      year: '2024'
    },
    link: '/projects/lunavara',
    featured: true,
    selected: true
  },
  {
    id: 4,
    title: 'Punto Pago',
    subtitle: 'The First Super-App in Latin America',
    description: 'A comprehensive super-app for Latin American markets',
    image: 'https://placehold.co/800x600/1a1a1a/ffffff?text=4',
    category: 'Applications',
    tags: ['Mobile App', 'FinTech', 'Super App'],
    link: '/projects/punto-pago',
     featured: true,
    selected: true
  },
  {
    id: 5,
    title: 'Kelvin Zero',
    subtitle: 'A digital product for passwordless authentication',
    description: 'Secure passwordless authentication solution',
    image: 'https://placehold.co/800x600/1a1a1a/ffffff?text=5',
    category: 'Websites',
    tags: ['Web App', 'Security', 'Authentication'],
    link: '/projects/kelvin-zero',
    featured: true,
    selected: true
  },
  {
    id: 6,
    title: 'Calendar App',
    subtitle: 'Modern scheduling and time management',
    description: 'Intuitive calendar application for productivity',
    image: 'https://placehold.co/800x600/1a1a1a/ffffff?text=6',
    category: 'Applications',
    tags: ['Mobile App', 'Productivity', 'Calendar'],
    link: '/projects/calendar-app',
    featured: true,
    selected: false
  },
  {
    id: 7,
    title: 'Brand Identity Project',
    subtitle: 'Complete brand redesign',
    description: 'Comprehensive branding and visual identity',
    image: 'https://placehold.co/800x600/1a1a1a/ffffff?text=7',
    category: 'Branding',
    tags: ['Branding', 'Design', 'Identity'],
    link: '/projects/brand-identity',
    featured: false,
    selected: true
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
