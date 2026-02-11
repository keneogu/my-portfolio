import React from "react";

type ProjectTagProps = {
  name: string;
  onClick: (name: string) => any;
  isSelected: boolean;
};

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-slate-600 border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} rounded-full border-2 px-3 py-1 md:px-6 md:py-3 md:text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
