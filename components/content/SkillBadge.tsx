import React from 'react';

const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <span className="px-3 py-1 bg-green-100 text-main-hover rounded-full text-sm font-medium">
      {skill}
    </span>
  );
};

export default SkillBadge;
