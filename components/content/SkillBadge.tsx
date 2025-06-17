import React from 'react';

const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
      {skill}
    </span>
  );
};

export default SkillBadge;
