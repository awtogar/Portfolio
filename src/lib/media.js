export const placeholder = '/assets/Placeholder.jpg';

export function getLogo(slug) {
  try {
    return require(`@/assets/images/projects/${slug}/cover.svg`);
  } catch {
    return null;
  }
}

export function getReelPath(slug, hasReel) {
  if (!hasReel) return null;
  try {
    const mod = require(`@/assets/images/projects/${slug}/reel.mp4`);
    return mod.default || mod;
  } catch {
    return null;
  }
}

export function getGalleryPaths(slug, count) {
  if (!count) return [];
  const list = [];
  for (let i = 1; i <= count; i++) {
    try {
      const mod = require(`@/assets/images/projects/${slug}/${i}.webp`);
      list.push(mod.default || mod);
    } catch {
      break;
    }
  }
  return list;
}
