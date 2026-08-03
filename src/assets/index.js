import {
  getCoverPath,
  getGalleryPaths,
  getReelPath,
  getStackIconPath,
  getProjectMedia,
  placeholder,
} from '@/lib/media';

export {
  getCoverPath,
  getGalleryPaths,
  getReelPath,
  getStackIconPath,
  getProjectMedia,
  placeholder,
};

export const getMediaUrl = (val) => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (val.src) return val.src;
  return String(val);
};

export const getProjectAssets = (slug) => getProjectMedia(slug);

// Site media paths
export const siteReels = '/assets/site/site-reels-1.mp4';
export const siteReels2 = '/assets/site/site-reels-2.mp4';
export const siteReels3 = '/assets/site/site-reels-3.mp4';
export const me01 = '/assets/site/me-01.jpg';
export const me02 = '/assets/site/me-02.jpg';
