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