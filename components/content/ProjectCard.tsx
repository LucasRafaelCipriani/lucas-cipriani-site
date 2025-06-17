import { Project } from '@/types/Project';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group border-l-4 border-main">
      <div className="flex items-start space-x-4">
        <div className="text-3xl mb-4">{project.icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
