import React from 'react';

type IconProps = {
  IconComponent: React.ComponentType;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Icon = ({ IconComponent, ...rest }: IconProps) => {
  return (
    <a
      {...rest}
      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-700 hover:text-main"
    >
      <IconComponent />
    </a>
  );
};

export default Icon;
