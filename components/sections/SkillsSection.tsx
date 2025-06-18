import { Experience } from '@/types/Experience';
import { Language } from '@/types/Language';
import { API_URL } from '@/constants/constants';
import SkillBox from '../content/SkillBox';

const SkillsSection = async () => {
  const data = Promise.all([
    await fetch(`${API_URL}/api/skills`, {
      cache: 'no-store',
    }).then((res) => res.json()),
    await fetch(`${API_URL}/api/languages`, {
      cache: 'no-store',
    }).then((res) => res.json()),
  ]);

  const [skills, languages]: [Experience[], Language[]] = await data;

  return (
    <section id="skills" className="py-10 md:py-20 bg-white scroll-mt-[60px]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Skills and Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <SkillBox skill={skill} key={index} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
              Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((language) => (
                <div
                  className="bg-green-50 p-4 rounded-lg text-center"
                  key={language.language}
                >
                  <h4 className="font-semibold text-gray-800">
                    {language.language}
                  </h4>
                  <p className="text-main text-sm">{language.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
