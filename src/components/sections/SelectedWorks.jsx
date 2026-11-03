import React from "react";
import { projects } from "@/data/data";
import { TextReveal, BaseSection } from "@/components";
import AnimatedCard, { CardMeta } from "@/components/AnimatedCard";
import Link from "next/link";

import { RiArrowRightSLine } from "@remixicon/react";

const SelectedWorks = () => {
  const selectedWorks = projects.filter((project) => project.selected);

  return (
    <BaseSection
      sectionID="works"
      sectionClassName="overflow-hidden relative section-padding-xy"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <TextReveal as="span">
            <span className="text-base leading-[1.2] font-[500] uppercase">
              (selected)
            </span>
          </TextReveal>
        </div>
        <div className="flex items-end justify-between w-full flex-wrap">
          <TextReveal
            className="text-display leading-[1.2] font-[600] uppercase"
            as="span"
          >
            Works
          </TextReveal>
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal
              className="text-display leading-[1.2] font-[600] uppercase"
              as="span"
            >
              25
            </TextReveal>
          </div>
        </div>
      </div>

      <ul className="flex flex-col w-full gap-2 pb-s500 lg:flex-row lg:gap-4 lg:pb-s600">
        {selectedWorks.map((work) => (
          <AnimatedCard
            key={work.id}
            as="li"
            className="w-full lg:w-1/2"
            thumbnail={work.thumbnail}
            alt={work.title}
            reels={work.reels}
            to={`/projects/${work.slug}`}
            LinkComponent={Link}
          >
            <CardMeta
              client={work.client}
              type={work.type}
              year={work.date?.year}
              tags={work.tags}
              logo={work.logo}
            />
          </AnimatedCard>
        ))}
      </ul>

      <Link
        href="/projects"
        className="flex text-base items-center justify-center cursor-pointer group"
      >
        <div className="gap-1 flex items-center">
          <span>See all</span>
          <RiArrowRightSLine size={24} />
        </div>
      </Link>
    </BaseSection>
  );
};

export default SelectedWorks;
