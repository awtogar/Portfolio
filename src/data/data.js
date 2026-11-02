import { heroReels } from "@/assets";
import oveloLogo from "@/assets/images/project/ovelo.svg";
import nostraticLogo from "@/assets/images/project/nostratic.svg";
import synoraLogo from "@/assets/images/project/synora.svg";
import lunavaraLogo from "@/assets/images/project/lunavara.svg";
import investimeLogo from "@/assets/images/project/investime.svg";
import routinesLogo from "@/assets/images/project/routines.svg";
import serojaLogo from "@/assets/images/project/seroja.svg";

// Navigation & Contact Data
export const navlink = {
  home: {
    title: "Home",
    href: "/",
    label: "Home Page",
  },
  about: {
    title: "Labs",
    href: "/labs",
    label: "Labs Page",
  },
  services: {
    title: "Projects",
    href: "/projects",
    label: "Projects Page",
  },
  works: {
    title: "Writings",
    href: "/writings",
    label: "Writings Page",
  },
};

export const socials = [
  {
    title: "Github",
    href: "https://github.com/awtogar",
    icon: "github",
    label: "github",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/awaluddintogar",
    icon: "linkedin",
    label: "linkedin",
  },
  {
    title: "Behance",
    href: "https://www.behance.net/awaluddintogar",
    icon: "behance",
    label: "behance",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/awtogarr_",
    icon: "instagram",
    label: "instagram",
  },
];

export const contact_info = {
  email: "awaluddintogar@gmail.com",
  phone: "+62 8139 9090 251",
  credits: `© ${new Date().getFullYear()} Awtogar.`,
  copyright: `All rights reserved.`,
};

// Services Data
export const services = [
  {
    id: 1,
    number: "01",
    title: "Graphic",
    video: heroReels,
    description:
      "Building strong brand visuals through creative concepts and graphics.",
    features: [
      { number: "01", name: "Product & Merchandise" },
      { number: "02", name: "Branding Concepts" },
      { number: "03", name: "Visual Identity Systems" },
    ],
    tags: ["Graphics", "Branding", "Creative Direction"],
  },
  {
    id: 2,
    number: "02",
    title: "UI/UX",
    video: heroReels,
    description:
      "Crafting intuitive user experiences and visually appealing interfaces.",
    features: [
      { number: "01", name: "User Experience Research" },
      { number: "02", name: "Interface Design" },
      { number: "03", name: "Prototyping & Wireframing" },
    ],
    tags: ["UI/UX", "User Research", "Prototyping"],
  },
  {
    id: 3,
    number: "03",
    title: "Development",
    video: heroReels,
    description:
      "Creating responsive websites with seamless and brand-focused experiences.",
    features: [
      { number: "01", name: "Responsive Web Development" },
      { number: "02", name: "Frontend Implementation" },
      { number: "03", name: "Portfolio & Business Websites" },
    ],
    tags: ["Frontend", "Web Design", "Development"],
  },
];

// Projects Data
const logosBySlug = {
  ovelo: oveloLogo,
  nostratic: nostraticLogo,
  synora: synoraLogo,
  lunavara: lunavaraLogo,
  investime: investimeLogo,
  routines: routinesLogo,
  seroja: serojaLogo,
};

export const projects = [
  {
    id: 1,
    slug: "ovelo",
    client: "Ovelo Eyewear",
    type: "Websites",
    description:
      "An eyewear and Optical Care branding. focused on modern aesthetics and strong visuals branding.",
    tags: ["Branding", "Web Development", "CMS"],
    date: { month: "June", year: "2026" },
    liveUrl: "https://www.oveloprototype.awtogar.com",
    selected: false,
    thumbnail: "/assets/projects/ovelo/thumbnail.webp",
    reels: null,
    assets: [
      { type: "image", src: "/assets/projects/ovelo/1.webp", alt: "Ovelo 1" },
      { type: "image", src: "/assets/projects/ovelo/2.webp", alt: "Ovelo 2" },
      { type: "image", src: "/assets/projects/ovelo/3.webp", alt: "Ovelo 3" },
      { type: "image", src: "/assets/projects/ovelo/4.webp", alt: "Ovelo 4" },
    ],
  },
  {
    id: 2,
    slug: "nostratic",
    client: "Nostratic Studio",
    type: "Websites",
    description:
      "Nostratic is a creative design studio specializing in branding and merchandise. They offer a curated collection of ready to use premade designs, helping brands bring their ideas to life across a variety of products and creative needs.",
    tags: ["Mockup", "Figma", "Branding", "Merch", "Web Development"],
    date: { month: "February", year: "2024" },
    liveUrl: "https://www.nostratic.awtogar.com",
    selected: true,
    thumbnail: "/assets/projects/nostratic/thumbnail.webp",
    reels: "/assets/projects/nostratic/reels.mp4",
    assets: [
      {
        type: "image",
        src: "/assets/projects/nostratic/1.webp",
        alt: "image of Nostratic Studio",
      },
      {
        type: "image",
        src: "/assets/projects/nostratic/2.webp",
        alt: "image of Nostratic Studio",
      },
      {
        type: "image",
        src: "/assets/projects/nostratic/3.webp",
        alt: "image of Nostratic Studio",
      },
      {
        type: "image",
        src: "/assets/projects/nostratic/4.webp",
        alt: "image of Nostratic Studio",
      },
      {
        type: "image",
        src: "/assets/projects/nostratic/5.webp",
        alt: "image of Nostratic Studio",
      },
      {
        type: "image",
        src: "/assets/projects/nostratic/6.webp",
        alt: "image of Nostratic Studio",
      },
      {
        type: "image",
        src: "/assets/projects/nostratic/7.webp",
        alt: "image of Nostratic Studio",
      },
      {
        type: "image",
        src: "/assets/projects/nostratic/8.webp",
        alt: "image of Nostratic Studio",
      },
    ],
  },
  {
    id: 3,
    slug: "nyambi",
    client: "Nyambi",
    type: "UI/UX Design",
    description:
      "A local service marketplace concept designed to connect users with skilled workers and local service providers. Developed as a team project for FORTEX 5.0 UI/UX Design Competition, where the team earned a national finalist position.",
    tags: ["UI/UX", "Product Design", "Competition"],
    date: { month: "September", year: "2024" },
    liveUrl: null,
    selected: true,
    thumbnail: "/assets/projects/nyambi/thumbnail.jpg",
    reels: "/assets/projects/nyambi/Splash screen.mp4",
    assets: [
      {
        type: "image",
        src: "/assets/projects/nyambi/image-1.webp",
        alt: "Image of the Nyambi app screens",
      },
      {
        type: "image",
        src: "/assets/projects/nyambi/image-2.jpg",
        alt: "Image of the Nyambi app screens",
      },
      {
        type: "image",
        src: "/assets/projects/nyambi/image-3.webp",
        alt: "Image of the Nyambi app screens",
      },
      {
        type: "image",
        src: "/assets/projects/nyambi/image-4.jpg",
        alt: "Image of the Nyambi app screens",
      },
      {
        type: "image",
        src: "/assets/projects/nyambi/image-5.jpg",
        alt: "Image of the Nyambi app screens",
      },
      {
        type: "image",
        src: "/assets/projects/nyambi/image-6.jpg",
        alt: "Image of the Nyambi app screens",
      },
    ],
  },
].map((p) => ({ ...p, logo: logosBySlug[p.slug] ?? null }));
