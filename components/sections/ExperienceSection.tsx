import { Experience } from '@/types/Experience';
import React from 'react';
import ExperienceCard from '../content/ExperienceCard';

const ExperienceSection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/experiences`,
    {
      cache: 'no-store',
    }
  );
  const experiences: Experience[] = await res.json();

  return (
    <section id="experience" className="py-20 bg-gray-50">
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
