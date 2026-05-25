import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetailGallerySection = ({ project }) => {
  if (!project.gallery?.length) return null;

  const bentoLayout = [
    {
      colSpan: 'col-span-5',
      rowSpan: 'row-span-2',
      aspect: 'aspect-[3/4]',
      positions: 'md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-3',
    },
    {
      colSpan: 'col-span-7',
      rowSpan: 'row-span-1',
      aspect: 'aspect-[16/9]',
      positions: 'md:col-start-6 md:col-end-13 md:row-start-1 md:row-end-2',
    },
    {
      colSpan: 'col-span-7',
      rowSpan: 'row-span-1',
      aspect: 'aspect-square',
      positions: 'md:col-start-6 md:col-end-13 md:row-start-2 md:row-end-3',
    },
    {
      colSpan: 'col-span-12',
      rowSpan: 'row-span-1',
      aspect: 'aspect-[21/9]',
      positions: 'md:col-start-1 md:col-end-13 md:row-start-3 md:row-end-4',
    },
    {
      colSpan: 'col-span-4',
      rowSpan: 'row-span-2',
      aspect: 'aspect-[2/3]',
      positions: 'md:col-start-1 md:col-end-5 md:row-start-4 md:row-end-6',
    },
    {
      colSpan: 'col-span-4',
      rowSpan: 'row-span-1',
      aspect: 'aspect-square',
      positions: 'md:col-start-5 md:col-end-9 md:row-start-4 md:row-end-5',
    },
    {
      colSpan: 'col-span-4',
      rowSpan: 'row-span-2',
      aspect: 'aspect-[3/4]',
      positions: 'md:col-start-9 md:col-end-13 md:row-start-4 md:row-end-6',
    },
    {
      colSpan: 'col-span-4',
      rowSpan: 'row-span-1',
      aspect: 'aspect-[4/3]',
      positions: 'md:col-start-5 md:col-end-9 md:row-start-5 md:row-end-6',
    },
    {
      colSpan: 'col-span-6',
      rowSpan: 'row-span-2',
      aspect: 'aspect-square',
      positions: 'md:col-start-1 md:col-end-7 md:row-start-6 md:row-end-8',
    },
    {
      colSpan: 'col-span-3',
      rowSpan: 'row-span-1',
      aspect: 'aspect-[4/3]',
      positions: 'md:col-start-7 md:col-end-10 md:row-start-6 md:row-end-7',
    },
    {
      colSpan: 'col-span-3',
      rowSpan: 'row-span-1',
      aspect: 'aspect-[4/3]',
      positions: 'md:col-start-10 md:col-end-13 md:row-start-6 md:row-end-7',
    },
    {
      colSpan: 'col-span-6',
      rowSpan: 'row-span-1',
      aspect: 'aspect-[16/9]',
      positions: 'md:col-start-7 md:col-end-13 md:row-start-7 md:row-end-8',
    },
    {
      colSpan: 'col-span-12',
      rowSpan: 'row-span-1',
      aspect: 'aspect-[16/9]',
      positions: 'md:col-start-1 md:col-end-13 md:row-start-8 md:row-end-9',
    },
    {
      colSpan: 'col-span-3',
      rowSpan: 'row-span-2',
      aspect: 'aspect-[2/3]',
      positions: 'md:col-start-1 md:col-end-4 md:row-start-9 md:row-end-11',
    },
    {
      colSpan: 'col-span-6',
      rowSpan: 'row-span-2',
      aspect: 'aspect-[4/3]',
      positions: 'md:col-start-4 md:col-end-10 md:row-start-9 md:row-end-11',
    },
    {
      colSpan: 'col-span-3',
      rowSpan: 'row-span-1',
      aspect: 'aspect-square',
      positions: 'md:col-start-10 md:col-end-13 md:row-start-9 md:row-end-10',
    },
    {
      colSpan: 'col-span-3',
      rowSpan: 'row-span-1',
      aspect: 'aspect-[16/9]',
      positions: 'md:col-start-10 md:col-end-13 md:row-start-10 md:row-end-11',
    },
  ];

  return (
    <div className="w-full">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-3">
          {project.gallery.map((media, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
            >
              <img src={media} alt={`${project.client} - ${idx + 1}`} className="w-full h-auto aspect-[4/3] object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-3 auto-rows-min">
          {project.gallery.slice(0, bentoLayout.length).map((media, idx) => {
            const layout = bentoLayout[idx];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.03, 0.3) }}
                viewport={{ once: true, margin: '-50px' }}
                className={`
                  ${layout.colSpan} ${layout.rowSpan}
                  ${layout.positions}
                  relative overflow-hidden
                  bg-neutral-200 dark:bg-neutral-800
                  shadow-md
                `}
              >
                <div className={`relative w-full h-full ${layout.aspect}`}>
                  <img src={media} alt={`${project.client} gallery ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {project.gallery.length > bentoLayout.length && (
          <div className="grid grid-cols-12 gap-3 auto-rows-min mt-3">
            {project.gallery.slice(bentoLayout.length).map((media, idx) => {
              const layout = bentoLayout[(idx + 3) % bentoLayout.length];

              return (
                <motion.div
                  key={idx + bentoLayout.length}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.03, 0.3) }}
                  viewport={{ once: true }}
                  className={`
                    ${layout.colSpan} ${layout.rowSpan}
                    ${layout.positions.replace(/row-start-\d+ row-end-\d+/, '')}
                    relative overflow-hidden rounded-2xl
                    bg-neutral-200 dark:bg-neutral-800
                    shadow-md
                  `}
                  style={{
                    gridColumn: layout.colSpan === 'col-span-12' ? '1 / -1' : undefined,
                  }}
                >
                  <div className={`relative w-full h-full ${layout.aspect}`}>
                    <img src={media} alt={`${project.client} gallery ${idx + bentoLayout.length + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailGallerySection;
