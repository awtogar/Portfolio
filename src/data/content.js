import { siteReels, siteReels2 } from '@/assets';

export const services = [
  {
    id: 1,
    number: '01',
    title: 'Graphic',
    video: siteReels,
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
    video: siteReels2,
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
    video: siteReels2,
    description: 'Creating responsive websites with seamless and brand-focused experiences.',
    features: [
      { number: '01', name: 'Responsive Web Development' },
      { number: '02', name: 'Frontend Implementation' },
      { number: '03', name: 'Portfolio & Business Websites' },
    ],
    tags: ['Frontend', 'Web Design', 'Development'],
  },
];

export const experience = [
  {
    id: 1,
    title: 'IT Project Management',
    company: 'PT Bank Negara Indonesia (Persero) Tbk',
    position: 'Intern',
    location: 'Jakarta, Indonesia',
    startDate: '11/2025',
    endDate: '05/2026',

    description: [
      'Participated in business requirement analysis sessions alongside mentors and business stakeholders.',
      'Supported project coordination between developers, QA teams, and business divisions throughout the SDLC process.',
      'Assisted in the preparation and review of BRD, FSD, and SRS documents for internal IT projects.',
      'Conducted workflow and estimation analysis to identify bottlenecks in project development processes.',
      'Maintained project documentation flow to ensure smooth communication and collaboration across teams.',
    ],

    achievements: [
      'Identified SDLC bottlenecks through workflow and estimation analysis.',
      'Supported collaboration between technical and business teams in project execution.',
      'Contributed to project documentation and requirement analysis processes.',
    ],

    competencies: ['Project Management', 'Business Analysis', 'Communication', 'Time Management'],

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

    description: [
      'Managed and organized digital artwork data to improve accessibility and internal documentation workflows.',
      'Developed a QR-based system to simplify artwork tracking and information retrieval processes.',
      'Collaborated with teams to digitize and integrate thousands of art assets into a centralized database.',
      'Designed structured storage mapping systems to improve artwork organization and asset management.',
      'Supported operational efficiency through documentation, automation workflows, and data maintenance.',
    ],

    achievements: [
      'Implemented a QR-based system to display detailed artwork information.',
      'Designed a QR-based storage layout to map artwork placement accurately.',
      'Digitized and integrated 4,000+ art assets into a centralized system.',
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

    description: [
      'Created branding and visual identity solutions tailored to client goals and business needs.',
      'Designed promotional materials, merchandise concepts, and digital assets for various industries.',
      'Collaborated directly with local and international clients throughout the creative process.',
      'Maintained consistent visual direction across branding projects to strengthen brand recognition.',
      'Delivered creative solutions focused on clarity, aesthetics, and strategic communication.',
    ],

    achievements: ['Designed branding and visual identity projects for 100+ clients worldwide.'],

    competencies: ['Branding', 'Visual Identity Design', 'Creative Direction'],

    tools: ['Adobe Creative Suite', 'Figma'],
  },
];
