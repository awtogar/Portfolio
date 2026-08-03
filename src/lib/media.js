const PROJECTS_BASE = '/assets/images/projects';
const STACK_BASE = '/assets/images/stack';

export const placeholder = '/assets/Placeholder.jpg';

const projectConfig = {
  ovelo:     { gallery: 23, reel: true },
  nostratic: { gallery: 10, reel: true },
  synora:    { gallery: 5,  reel: false },
  lunavara:  { gallery: 0,  reel: false },
  seroja:    { gallery: 6,  reel: false },
  investime: { gallery: 0,  reel: false },
  routines:  { gallery: 0,  reel: false },
  coloride:  { gallery: 0,  reel: false },
  nyambi:    { gallery: 0,  reel: false },
};

export function getCoverPath(slug) {
  return `${PROJECTS_BASE}/${slug}/cover.svg`;
}

export function getReelPath(slug) {
  const config = projectConfig[slug];
  if (!config?.reel) return null;
  return `${PROJECTS_BASE}/${slug}/reel.mp4`;
}

export function getGalleryPaths(slug) {
  const config = projectConfig[slug];
  if (!config || config.gallery === 0) return [];
  const list = [];
  for (let i = 1; i <= config.gallery; i++) {
    list.push(`${PROJECTS_BASE}/${slug}/${i}.webp`);
  }
  return list;
}

export function getStackIconPath(name) {
  return `${STACK_BASE}/${name}.svg`;
}

export function getProjectMedia(slug) {
  const gallery = getGalleryPaths(slug);
  return {
    cover: getCoverPath(slug),
    video: getReelPath(slug),
    gallery,
    thumbnail: gallery[0] || getCoverPath(slug),
  };
}
