import { label } from 'framer-motion/client';
import img1 from '../assets/images/img-1.jpg';

// Common placeholder image
const placeholderImage = "https://placehold.co/600x400/504B38/FFFFFF.png";

// Navigation items
const navigationLinks = [
  {
    title: 'Home',
    href: '/',
    label: 'home'
  },
  {
    title: 'Work',
    href: '/work',
    label: 'work'
  },
  {
    title: 'About',
    href: '/about',
    label: 'about'
  },
  {
    title: 'Contact',
    href: '/contact',
    label: 'contact'
  },
];

// Social media links
const socialLinks = [
  {
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

// Section definitions with IDs that match the element IDs in your components
const pageNavigation = {
  HomePage: [
    {
      id: 'home-hero',
      title: 'Home',
      component: 'HeroSection'
    },
    {
      id: 'home-services-works',
      title: 'Services',
      component: 'ServicesSection'
    },
    {
      id: 'home-selected-works',
      title: 'Selected Works',
      component: 'WorksSection'
    },
    {
      id: 'home-contact',
      title: 'Contact',
      component: 'ContactSection'
    }
  ],
  AboutPage: [
    {
      id: 'about-myself',
      title: 'About Me',
      component: 'AboutMeSection'
    },
    {
      id: 'about-skills-tools',
      title: 'Skills & Tools',
      component: 'SkillsSection'
    },
    {
      id: 'about-experience',
      title: 'Experience',
      component: 'ExperienceSection'
    },
    {
      id: 'about-education',
      title: 'Education',
      component: 'EducationSection'
    }
  ]
};



// Generate footer menu from page sections
const generateFooterMenu = () => {
  const menu = {};

  Object.keys(pageNavigation).forEach(page => {
    menu[page] = pageNavigation[page].map(section => ({
      title: section.title,
      href: `#${section.id}`
    }));
  });
  
  return menu;
};

const footerMenu = generateFooterMenu();

// Services data
const services = [
  {
    id: 1,
    number: '01',
    title: 'Graphic Design',
    description: 'Building strong brand visuals through creative concepts and graphics.',
    features: [
      { number: '01', name: 'Product & Merchandise' },
      { number: '02', name: 'Branding Concepts' },
      { number: '03', name: 'Visual Identity Systems' },
    ],
    tags: ['Graphics', 'Branding', 'Creative Direction']
  },
  {
    id: 2,
    number: '02',
    title: 'UI/UX Design',
    description: 'Crafting intuitive user experiences and visually appealing interfaces.',
    features: [
      { number: '01', name: 'User Experience Research' },
      { number: '02', name: 'Interface Design' },
      { number: '03', name: 'Prototyping & Wireframing' }
    ],
    tags: ['UI/UX', 'User Research', 'Prototyping']
  },
  {
    id: 3,
    number: '03',
    title: 'Web Development',
    description: 'Creating responsive websites with seamless and brand-focused experiences.',
    features: [
      { number: '01', name: 'Responsive Web Development' },
      { number: '02', name: 'Frontend Implementation' },
      { number: '03', name: 'Portfolio & Business Websites' }
    ],
    tags: ['Frontend', 'Web Design', 'Web Development']
  }
];

// Portfolio works
const works = [
  {
    title: 'Dieter Rams Tribute',
    description: 'A selection of my recent projects showcasing my skills in graphic design and web development.',
    tags: ['Graphics', 'Branding'],
    date: { month: 'Jun', year: '2024' },
    image: img1
  },
  {
    title: 'Foodify App',
    description: 'Mobile-first design for a food delivery service with interactive prototype.',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: { month: 'Feb', year: '2025' },
    image: placeholderImage
  },
  {
    title: 'Luminova Studio',
    description: 'Portfolio website with smooth animations and mobile-first design for a creative agency.',
    tags: ['Web Development', 'UI/UX'],
    date: { month: 'Aug', year: '2024' },
    image: placeholderImage,
  }
];

// Contact information
const contactInfo = {
  email: 'info@awtogar.com',
  phone: '+62 85156015818',
  copyright: `© ${new Date().getFullYear()} Awtogar. All rights reserved.`
};

export {
  navigationLinks,
  socialLinks,
  footerMenu,
  pageNavigation,
  services,
  works,
  contactInfo,
  placeholderImage
};

