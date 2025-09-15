import { label } from 'framer-motion/client';
import { href } from 'react-router-dom';


const pageData = {
   home: {
    title: 'Home',
    href: '/',
    label: 'home',
    sections: [
      { id: 'hero', title: 'Hero' },
      { id: 'features', title: 'Features' },
      { id: 'testimonials', title: 'Testimonials' },
      { id: 'cta', title: 'Call to Action' }
    ]
  },
  about: {
    title: 'About',
    href: '/about',
    label: 'about',
    sections: [
      { id: 'story', title: 'Our Story' },
      { id: 'mission', title: 'Mission' },
      { id: 'team', title: 'Team' },
      { id: 'values', title: 'Values' }
    ]
  },
  project: {
    title: 'Projects',
    href: '/projects',
    label: 'projects',
    sections: [
      { id: 'consulting', title: 'Consulting' },
      { id: 'development', title: 'Development' },
      { id: 'design', title: 'Design' },
      { id: 'support', title: 'Support' }
    ]
  },
  contact: {
    title: 'Contact',
    href: '/contact',
    label: 'contact',
    sections: [
      { id: 'info', title: 'Contact Info' },
      { id: 'form', title: 'Contact Form' },
      { id: 'location', title: 'Location' },
      { id: 'hours', title: 'Business Hours' }
    ]
  }
};


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
      id: 'Hero',
      title: 'Home',
      component: 'HomeHero'
    },
    {
      id: 'Ido',
      title: 'What I Do',
      component: 'HomeWhatIdo'
    },
    {
      id: 'Selected-Works',
      title: 'Selected Works',
      component: 'HomeSelectedWorks'
    },
    {
      id: 'Contact',
      title: 'Contact',
      component: 'HomeContact'
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
    image: 'https://placehold.co/600x400/504B38/FFFFFF.png'
  },
  {
    title: 'Foodify App',
    description: 'Mobile-first design for a food delivery service with interactive prototype.',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: { month: 'Feb', year: '2025' },
    image: 'https://placehold.co/600x400/504B38/FFFFFF.png'
  },
  {
    title: 'Luminova Studio',
    description: 'Portfolio website with smooth animations and mobile-first design for a creative agency.',
    tags: ['Web Development', 'UI/UX'],
    date: { month: 'Aug', year: '2024' },
    image: 'https://placehold.co/600x400/504B38/FFFFFF.png',
  }
];

// Contact information
const contactInfo = {
  email: 'info@awtogar.com',
  phone: '+62 85156015818',
  copyright: `© ${new Date().getFullYear()} Awtogar. All rights reserved.`
};

export {
  socialLinks,
  footerMenu,
  pageNavigation,
  services,
  works,
  contactInfo,
  pageData
};

