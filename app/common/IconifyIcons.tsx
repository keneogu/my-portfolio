import { Icon } from "@iconify/react";

const sizeWithDefault = (size?: number) => {
  return size ?? 16;
};

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ReactIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="mdi:react"
      style={{ fontSize: `${sizeWithDefault(size)}`, color: "#61DBFB" }}
    />
  );
};

export const NextIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="teenyicons:nextjs-solid"
      style={{ fontSize: `${sizeWithDefault(size)}`, color: "black" }}
    />
  );
};

export const JsIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="akar-icons:javascript-fill"
      style={{ fontSize: `${sizeWithDefault(size)}`, color: "#F0DB4F" }}
    />
  );
};

export const RubyIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="vscode-icons:file-type-ruby"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const NodeIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="vscode-icons:file-type-node"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const RailsIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="vscode-icons:file-type-rails"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const MongoDBIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="teenyicons:mongodb-solid"
      style={{ fontSize: `${sizeWithDefault(size)}`, color: "#41a247" }}
    />
  );
};

export const CalenderIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="uil:calender"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const EyeIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="teenyicons:eye-outline"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const CodeIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="teenyicons:code-solid"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const GithubIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="mdi:github"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const LinkedInIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="mdi:linkedin"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const TwitterIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="mdi:twitter"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const BarIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="uil:bars"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};

export const XMarkIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="gravity-ui:xmark"
      style={{ fontSize: `${sizeWithDefault(size)}` }}
    />
  );
};
