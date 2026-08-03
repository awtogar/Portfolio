'use client';

// src/pages/sections/ProjectMediaGallery.jsx
import React from 'react';
import { motion } from 'motion/react';

/**
 * Renders project images in the alternating pattern:
 * - full width, full width, then half/half, repeat.
 * @param {Object} props
 * @param {string[]} props.images - array of image URLs
 * @param {string} [props.altPrefix] - prefix for alt text
 */
const ProjectMediaGallery = ({ images, altPrefix = 'Project media' }) => {
  if (!images || images.length === 0) return null;

  // Group images into chunks of 4: [full, full, half, half]
  const chunks = [];
  for (let i = 0; i < images.length; i += 4) {
    chunks.push(images.slice(i, i + 4));
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      {chunks.map((chunk, chunkIndex) => {
        const elements = [];

        // First two: full width
        for (let j = 0; j < 2; j++) {
          if (chunk[j]) {
            const index = chunkIndex * 4 + j;
            elements.push(
              <motion.div
                key={`full-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-full h-[200px] lg:h-[clamp(600px,57vw,1200px)] rounded-lg lg:rounded-xl overflow-hidden relative"
              >
                <img src={chunk[j]} alt={`${altPrefix} ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </motion.div>
            );
          }
        }

        // Next two: half width in a flex row
        const halfItems = chunk.slice(2, 4);
        if (halfItems.length > 0) {
          elements.push(
            <div key={`half-pair-${chunkIndex}`} className="flex gap-4 lg:gap-5">
              {halfItems.map((src, idx) => {
                const actualIndex = chunkIndex * 4 + 2 + idx;
                return (
                  <motion.div
                    key={`half-${actualIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: actualIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="w-1/2 h-[160px] lg:h-[clamp(600px,40vw,1200px)] rounded-lg lg:rounded-xl overflow-hidden relative"
                  >
                    <img src={src} alt={`${altPrefix} ${actualIndex + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </motion.div>
                );
              })}
            </div>
          );
        }

        return elements;
      })}
    </div>
  );
};

export default ProjectMediaGallery;
