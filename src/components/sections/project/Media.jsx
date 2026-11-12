"use client";

import React from "react";
import { motion } from "motion/react";
import { VideoLoader } from "@/components";

const ProjectVideoItem = ({ src, poster, className }) => {
  return (
    <VideoLoader
      src={src}
      poster={poster}
      className={className}
    />
  );
};

const Media = ({ assets }) => {
  if (!assets || assets.length === 0) return null;

  const chunks = [];
  for (let i = 0; i < assets.length; i += 4) {
    chunks.push(assets.slice(i, i + 4));
  }

  const renderAsset = (asset, index, className) => {
    if (asset.type === "video") {
      return (
        <ProjectVideoItem
          key={`video-${index}`}
          src={asset.src}
          poster={asset.poster}
          className={className}
        />
      );
    }
    return (
      <img
        src={asset.src}
        alt={asset.alt || ""}
        className={className}
        loading="lazy"
      />
    );
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      {chunks.map((chunk, chunkIndex) => {
        const elements = [];

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
                className="overflow-hidden relative w-full h-[200px] rounded-lg lg:h-[clamp(600px,57vw,1200px)] lg:rounded-xl"
              >
                {renderAsset(
                  chunk[j],
                  index,
                  "absolute inset-0 w-full h-full object-cover"
                )}
              </motion.div>
            );
          }
        }

        const halfItems = chunk.slice(2, 4);
        if (halfItems.length > 0) {
          elements.push(
            <div
              key={`half-pair-${chunkIndex}`}
              className="flex gap-4 lg:gap-5"
            >
              {halfItems.map((asset, idx) => {
                const actualIndex = chunkIndex * 4 + 2 + idx;
                return (
                  <motion.div
                    key={`half-${actualIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: actualIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="overflow-hidden relative w-1/2 h-[160px] rounded-lg lg:h-[clamp(600px,40vw,1200px)] lg:rounded-xl"
                  >
                    {renderAsset(
                      asset,
                      actualIndex,
                      "absolute inset-0 w-full h-full object-cover"
                    )}
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

export default Media;
