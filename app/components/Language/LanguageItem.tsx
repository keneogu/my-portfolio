"use client";

type SomeComponentProps = {
  size?: number;
  color?: string;
};

interface ContainerProps {
  IconComponent: React.FC<SomeComponentProps>;
  name: string;
}

const LanguageItem = ({ IconComponent, name }: ContainerProps) => {
  return (
    <>
      <div className="flex-col max-w-none">
        <IconComponent size={50}/>
        <p className="text-2xl">{name}</p>
      </div>
    </>
  );
};

export default LanguageItem;
