import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../../../data/data';
import { ScrollAnimatedImg } from '../../../components';
import BaseSection from '../../sections/BaseSection';

const ease = [0.25, 0.46, 0.45, 0.94];

const ProjectGallerySection = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project || !project.gallery?.length) return null;

  return (
    <BaseSection
      sectionClassName="section-padding-x pb-s900"
      containerClassName="max-w-full md:max-w-[768px] lg:max-w-[1080px] xl:max-w-[1440px]"
    >
      <span className="text-primary/30">(Gallery)</span>
      <motion.div
        className="flex flex-col gap-s600 md:gap-s700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col gap-s500 md:gap-s600">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.07, ease }}
            >
              <ScrollAnimatedImg
                src={img}
                alt={`${project.title} — ${i + 1}`}
                containerClassName="w-full aspect-[4/3] md:aspect-[16/10]"
                imageClassName="object-cover w-full h-full"
                scrollRange={['0%', '8%']}
                offset={['start end', 'end start']}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </BaseSection>
  );
};

export default ProjectGallerySection;
