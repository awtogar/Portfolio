import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects: list }) => {
  if (list.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-s900">
        <p className="text-h500 text-primary/30 leading-heading">No projects found</p>
        <p className="text-base mt-s300 text-primary/25">Try selecting a different category.</p>
      </div>
    );
  }

  return (
    <div className="md:grid md:grid-cols-2 gap-x-s700 lg:gap-x-s800">
      <div className="flex flex-col gap-s800">
        {list
          .filter((_, i) => i % 2 === 0)
          .map((project, index) => {
            const originalIndex = index * 2;
            return <ProjectCard key={project.id} project={project} index={originalIndex} />;
          })}
      </div>

      <div className="flex flex-col max-md:mt-s800 gap-s800 mt-[clamp(160px,20vw,400px)]">
        {list
          .filter((_, i) => i % 2 === 1)
          .map((project, index) => {
            const originalIndex = index * 2 + 1;
            return <ProjectCard key={project.id} project={project} index={originalIndex} />;
          })}
      </div>
    </div>
  );
};

export default ProjectGrid;
