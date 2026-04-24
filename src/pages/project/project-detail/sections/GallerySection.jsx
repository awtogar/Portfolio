import { HoverVideoCard } from '@/components';

const GallerySection = ({ project }) => {
  if (!project.gallery?.length) return null;

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      {project.gallery.map((media, i) => {
        if (i === 3 && project.gallery.length >= 4) return null;
        if (i === 2 && project.gallery.length >= 4) {
          return (
            <div key={i} className="flex gap-4 lg:gap-5 w-full">
              <HoverVideoCard
                src={media}
                alt={`${project.client} - ${i + 1}`}
                containerClassName="w-1/2 h-[160px] lg:h-[clamp(600px,40vw,1200px)] rounded-lg lg:rounded-xl"
                imageClassName="object-cover object-center"
              />
              <HoverVideoCard
                src={project.gallery[3]}
                alt={`${project.client} - 4`}
                containerClassName="w-1/2 h-[160px] lg:h-[clamp(600px,40vw,1200px)] rounded-lg lg:rounded-xl"
                imageClassName="object-cover object-center"
              />
            </div>
          );
        }

        return (
          <HoverVideoCard
            key={i}
            src={media}
            alt={`${project.client} - ${i + 1}`}
            containerClassName="w-full h-[200px] md:h-[400px] lg:h-[clamp(600px,57vw,1200px)] rounded-lg lg:rounded-xl"
            imageClassName="object-cover object-center"
          />
        );
      })}
    </div>
  );
};

export default GallerySection;
