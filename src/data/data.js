export const services = [
  {
    id: 1,
    number: '01',
    title: 'Design',
    description:
      'Building strong brand visuals through creative concepts and graphics.',
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
    title: 'Web Development',
    description:
      'Creating responsive websites with seamless and brand-focused experiences.',
    features: [
      { number: '01', name: 'Responsive Web Development' },
      { number: '02', name: 'UI/UX Implementation' },
      { number: '03', name: 'Portfolio & Business Websites' }
    ],
    tags: ['UI/UX', 'Web Design', 'Web Development']
  },
  {
    id: 3,
    number: '03',
    title: 'Motion & Animation',
    description:
      'Enhancing designs with motion that boosts digital brand presence.',
    features: [
      { number: '01', name: 'Logo & Brand Animation' },
      { number: '02', name: 'UI Micro-Interactions' },
      { number: '03', name: 'Animated Visuals for Social Media' }
    ],
    tags: ['Motion', 'Animation', 'Graphics']
  }
];

import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
// import img4 from '../assets/images/img-4.png';


export const works = [
  {
    title: 'Azz',
    description: 'A selection of my recent projects showcasing my skills in graphic design and web development.',
    tags: ['Graphics', 'Branding'],
    date: { month: 'Jun', year: '2024' },
    image: img1
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website with smooth animations and responsive design.',
    tags: ['Web Development', 'UI/UX'],
    date: { month: 'Aug', year: '2024' },
    image: img2
  },
  {
    title: 'Social Media Campaign',
    description: 'Creative graphics and motion for a digital campaign on Instagram and TikTok.',
    tags: ['Graphics', 'Motion', 'Animation'],
    date: { month: 'May', year: '2024' },
    image: img3
  }
];

