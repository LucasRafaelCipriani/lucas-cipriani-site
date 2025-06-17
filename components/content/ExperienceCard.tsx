import { format } from 'date-fns';
import { Experience } from '@/types/Experience';
import SkillBadge from './SkillBadge';
import CalendarIcon from '../icons/CalendarIcon';
import LocationIcon from '../icons/LocationIcon';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {experience.title}
          </h3>
          <h4 className="text-lg text-blue-600 font-medium">
            {experience.company}
          </h4>
        </div>
        <div className="flex flex-col md:items-end mt-2 md:mt-0">
          <div className="flex items-center text-gray-600 mb-1">
            <CalendarIcon />
            <span>
              {format(experience.startAt, 'MMM yyyy')} -{' '}
              {format(experience.endAt, 'MMM yyyy')}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <LocationIcon />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <SkillBadge skill={skill} key={skill} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
