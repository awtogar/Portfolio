export const pages = {
  home: {
    title: 'Home',
    href: '/',
    label: 'Home',
    sections: [
      { id: 'welcome', title: 'Welcome' },
      { id: 'showreels', title: 'showreels' },
      { id: 'what-i-do', title: 'What I Do' },
      { id: 'works', title: 'Works' },
      { id: 'contact', title: 'Contact' },
    ],
  },
  about: {
    title: 'About',
    href: '/about',
    label: 'About',
    sections: [
      { id: 'about', title: 'About me' },
      { id: 'experience', title: 'Experience' },
      { id: 'awards', title: 'Awards' },
      { id: 'contact', title: 'Contact' },
    ],
  },
  project: {
    title: 'Projects',
    href: '/projects',
    label: 'Projects',
    sections: [
      { id: 'design', title: 'Design' },
      { id: 'development', title: 'Development' },
      { id: 'showcase', title: 'Showcase' },
      { id: 'Testimonials', title: 'Testimonials' },
      { id: 'Contact', title: 'Contact' },
    ],
  },
  contact: {
    title: 'Contact',
    href: '/contact',
    label: 'contact',
    sections: [
      { id: 'info', title: 'Info' },
      { id: 'collaboration', title: 'Collaboration' },
      { id: 'form', title: 'Form' },
      { id: 'contact', title: 'Contact' },
    ],
  },
};

export const socials = [
  { title: 'Github', href: 'https://github.com/awtogar', icon: 'github', label: 'github' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/awaluddintogar', icon: 'linkedin', label: 'linkedin' },
  { title: 'Behance', href: 'https://www.behance.net/awaluddintogar', icon: 'behance', label: 'behance' },
  { title: 'Instagram', href: 'https://www.instagram.com/awtogarr', icon: 'instagram', label: 'instagram' },
];

export const contact_info = {
  email: 'info@awtogar.com',
  phone: '+62 85156015818',
  credits: `© ${new Date().getFullYear()} Awtogar.`,
  copyright: `All rights reserved.`,
};
