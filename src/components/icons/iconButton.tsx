import React from 'react';
import { type ColorValue, TouchableOpacity } from 'react-native';
import {
  ICON_LIST,
  type IconNames,
  PRESET_ICON_SIZE,
  type PresetIconSize,
} from './styledIcon';
import { cn } from '@/lib/utils';

type Props = {
  name: IconNames;
  size?: PresetIconSize | number;
  color?: ColorValue;
  onPress?: () => void;
  className?: string;
};

export function IconButton({
  name,
  size = 'medium',
  color,
  onPress,
  className,
}: Props) {
  const IconComponent = ICON_LIST[name];
  const _size = typeof size === 'number' ? size : PRESET_ICON_SIZE[size];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <TouchableOpacity
      className={cn(
        `w-[${_size}px] h-[${_size}px] flex items-center justify-center active:opacity-75`,
        className
      )}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <IconComponent size={_size} color={color} />
    </TouchableOpacity>
  );
}
