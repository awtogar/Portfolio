// halaman navigasi dan bagian
const pages_data = {
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
        id: 'contact',
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

// what i do section data
const ido = [{
    id: 1,
    number: '01',
    title: 'Graphic Design',
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
    title: 'UI/UX Design',
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
    title: 'Web Development',
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
    tags: ['Frontend', 'Web Design', 'Web Development']
  }
];

// selected works section data
import ovelo_showreel from '../assets/images/selected-works/ovelo-kit.webp';

import nostratic_showreel from '../assets/images/selected-works/nostratic-kit.webp';

import lunavara_showreel from '../assets/images/selected-works/lunavara-kit.webp'

const works = [{
    title: 'Ovelo Eyewear',
    description: 'An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.',
    tags: ['Graphics', 'Branding'],
    date: {
      month: 'Jun',
      year: '2024'
    },
    image: ovelo_showreel
  },
  {
    title: 'Nostratic Archive',
    description: 'Branding and Web Development for a creative studio agency in Indonesia. that specializes in digital products.',
    tags: ['UI/UX', 'Prototype', 'Figma'],
    date: {
      month: 'Feb',
      year: '2025'
    },
    image: nostratic_showreel
  },
  {
    title: 'Lunavara',
    description: 'Lunavara is a modern nursery and plant art. focused on aesthetic and minimalism audience',
    tags: ['Web Development', 'UI/UX'],
    date: {
      month: 'Aug',
      year: '2024'
    },
    image: lunavara_showreel
  }
];

// Social media links
const social_links = [{
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


// Contact information
const contact_info = {
  email: 'info@awtogar.com',
  phone: '+62 85156015818',
  credits: `© ${new Date().getFullYear()} Awtogar.`,
  copyright: `All rights reserved.`
};

export {
  pages_data,
  ido,
  works,
  social_links,
  contact_info
};