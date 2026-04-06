import { useParams } from 'react-router-dom';
import { projects } from '../../../../data/data';

const DetailGallerySection = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project || !project.gallery?.length) return null;

  const isVideo = (url) => url && url.match(/\.(mp4|webm|mov)$/i);

  const renderItem = (media, i) => {
    if (isVideo(media)) {
      return <video src={media} autoPlay muted loop playsInline className="object-cover object-center w-full h-full absolute inset-0 text-transparent" />;
    }
    return <img src={media} alt={`${project.client} - ${i + 1}`} className="object-cover w-full h-full absolute inset-0 text-transparent" loading="lazy" decoding="async" />;
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      {project.gallery.map((media, i) => {
        // Build the 2-column split specifically for items 2 and 3 like the exact DOM reference!
        if (i === 3 && project.gallery.length >= 4) return null;
        
        if (i === 2 && project.gallery.length >= 4) {
          return (
            <div key={i} className="flex gap-4 lg:gap-5 w-full">
              <div className="w-1/2 h-[160px] lg:h-[clamp(600px,40vw,1200px)] rounded-lg lg:rounded-xl overflow-hidden relative">
                {renderItem(media, i)}
              </div>
              <div className="w-1/2 h-[160px] lg:h-[clamp(600px,40vw,1200px)] rounded-lg lg:rounded-xl overflow-hidden relative">
                {renderItem(project.gallery[3], 3)}
              </div>
            </div>
          );
        }

        // Standard full width block height
        return (
          <div key={i} className="w-full h-[200px] lg:h-[clamp(600px,57vw,1200px)] rounded-lg lg:rounded-xl overflow-hidden relative">
            {renderItem(media, i)}
          </div>
        );
      })}
    </div>
  );
};

export default DetailGallerySection;
