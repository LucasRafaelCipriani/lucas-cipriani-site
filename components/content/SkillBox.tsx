import { Skill } from '@/types/Skill';

const SkillBox = ({ skill }: { skill: Skill }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
      <h3
        className="text-xl font-semibold text-gray-800 mb-6 text-center"
        data-testid="skillTypeTitle"
      >
        {skill.title}
      </h3>
      <div className="space-y-3" data-testid="skillName">
        {skill.skills.map((sk) => (
          <div className="flex items-center" key={sk}>
            <div className="w-2 h-2 bg-main rounded-full mr-3"></div>
            <span className="text-gray-700 font-medium">{sk}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
