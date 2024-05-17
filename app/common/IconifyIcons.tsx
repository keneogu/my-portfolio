import { Icon } from '@iconify/react';

const sizeWithDefault = (size?: number) => {
  return size ?? 16;
};

interface IconProps {
  size?: number;
  color?: string;
}

export const ReactIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="mdi:react"
      style={{ fontSize: `${sizeWithDefault(size)}`, color: '#61DBFB' }}
    />
  );
};

export const NextIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="teenyicons:nextjs-solid"
      style={{ fontSize: `${sizeWithDefault(size)}`, color: 'black' }}
    />
  );
};

export const JsIcon = ({ size }: IconProps) => {
  return (
    <Icon
      icon="akar-icons:javascript-fill"
      style={{ fontSize: `${sizeWithDefault(size)}`, color: '#F0DB4F' }}
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