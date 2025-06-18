import { Experience } from '@/types/Experience';
import { API_URL } from '@/constants/constants';
import ExperienceCard from '../content/ExperienceCard';

const ExperienceSection = async () => {
  const res = await fetch(`${API_URL}/api/experiences`, {
    cache: 'no-store',
  });
  const experiences: Experience[] = await res.json();

  return (
    <section
      id="experience"
      className="py-10 md:py-20 bg-gray-50 scroll-mt-[60px]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard experience={experience} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
