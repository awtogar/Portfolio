// Dynamic glob loaders for project media
const projectMedia = import.meta.glob('./images/projects/**/*.{webp,jpg,jpeg,png,mp4}', {
  eager: true,
  import: 'default',
});

/**
 * Automatically loads all media (video & sorted gallery) for a project directory in src/assets/images/projects/[projectFolder]
 * @param {string} projectFolder Subdirectory name (e.g. 'ovelo', 'nostratic', 'synora')
 */
export const getProjectAssets = (projectFolder) => {
  const prefix = `./images/projects/${projectFolder}/`;
  let video = null;
  const galleryEntries = [];

  Object.entries(projectMedia).forEach(([path, url]) => {
    if (!path.startsWith(prefix)) return;

    const filename = path.replace(prefix, '');
    if (filename.endsWith('.mp4')) {
      video = url;
    } else {
      const numMatch = filename.match(/^(\d+)\./);
      const index = numMatch ? parseInt(numMatch[1], 10) : 999;
      galleryEntries.push({ index, filename, url });
    }
  });

  galleryEntries.sort((a, b) => a.index - b.index);

  const gallery = galleryEntries.map(e => e.url);

  return {
    video,
    gallery,
    thumbnail: gallery[0] || null,
  };
};

// Site Media Exports
export { default as placeholder } from './Placeholder.jpg';
export { default as me01 } from './site/me-01.jpg';
export { default as me02 } from './site/me-02.jpg';

// Site Video Showreels
export { default as siteReels } from './site/site-reels-1.mp4';
export { default as siteReels2 } from './site/site-reels-2.mp4';
export { default as siteReels3 } from './site/site-reels-3.mp4';
