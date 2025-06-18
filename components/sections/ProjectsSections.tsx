import { Project } from '@/types/Project';
import { API_URL } from '@/constants/constants';
import ProjectCard from '../content/ProjectCard';

const ProjectsSections = async () => {
  const res = await fetch(`${API_URL}/api/projects`, {
    cache: 'no-store',
  });
  const projects: Project[] = await res.json();

  return (
    <section
      id="projects"
      className="py-10 md:py-20 bg-gray-50 scroll-mt-[60px]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Highlighted achievements that demonstrate my experience and impact
            in e-commerce and digital transformation projects.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSections;
