import React from "react";

interface TechnologyProps {
  iconName: string;
  name: string;
}

const Technology: React.VFC<TechnologyProps> = ({ iconName, name }) => {
  return (
    <li className="flex items-center" key={name}>
      <i className={iconName}></i>
      <span className="ml-2">{name}</span>
    </li>
  );
};

export default Technology;
