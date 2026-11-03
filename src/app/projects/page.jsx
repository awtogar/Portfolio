"use client";

import React from "react";
import { projects } from "@/data/data";
import { BaseSection, Footer, TextReveal } from "@/components";
import PageLayout from "@/components/PageLayout";

import AnimatedCard, { CardMeta } from "@/components/AnimatedCard";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <BaseSection sectionClassName="section-padding-x pt-[clamp(8rem,14vw,14rem)]">
        <div className="flex flex-col gap-s700 lg:gap-s900 px-4 lg:px-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <TextReveal as="span">
                <span className="text-base leading-[1.2] font-[500] uppercase">
                  (Recent)
                </span>
              </TextReveal>
            </div>
            <div className="flex items-end justify-between w-full flex-wrap">
              <TextReveal
                className="text-display leading-[1.2] font-[600] uppercase"
                as="span"
              >
                Project
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
        </div>

        <div className="px-2 lg:px-4 pt-6 lg:py-4">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
            {projects.map((project) => (
              <AnimatedCard
                key={project.id}
                as="li"
                reels={project.reels}
                thumbnail={project.thumbnail}
                alt={project.client}
                to={`/projects/${project.slug}`}
                LinkComponent={Link}
                imageContainerClassName="aspect-4/3 md:aspect-video lg:aspect-square"
              >
                <CardMeta
                  client={project.client}
                  type={project.type}
                  year={project.date?.year}
                  tags={project.tags}
                  logo={project.logo}
                />
              </AnimatedCard>
            ))}
          </ul>
        </div>
      </BaseSection>
      <Footer />
    </PageLayout>
  );
}
