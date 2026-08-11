import { getGalleryPaths, getReelPath, getStackIconPath, placeholder } from '@/lib/media';

export { getGalleryPaths, getReelPath, getStackIconPath, placeholder };

export const getMediaUrl = val => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (val.src) return val.src;
  return String(val);
};

// Site media paths (served from public/)
export const siteReels = '/assets/site/site-reels-1.mp4';
export const siteReels2 = '/assets/site/site-reels-2.mp4';
export const siteReels3 = '/assets/site/site-reels-3.mp4';
export const myPhoto = '/assets/site/me.jpeg';
