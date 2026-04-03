import { useParams } from 'react-router-dom';
import { projects } from '../../../../data/data';
import { ScrollAnimatedImg } from '../../../../components';

const ProjectHeroSection = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return null;

  return (
    <section className="relative w-full overflow-hidden">
      <ScrollAnimatedImg
        src={project.image}
        alt={project.title}
        containerClassName="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]"
        imageClassName="object-cover w-full h-full"
        scrollRange={['0%', '12%']}
        offset={['start start', 'end start']}
      />
    </section>
  );
};

export default ProjectHeroSection;
