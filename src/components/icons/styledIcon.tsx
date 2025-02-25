import React from 'react';
import { View, type ColorValue } from 'react-native';
import { ActionIcons } from './action';
import { ContentsIcons } from './contents';

import { cn } from '@/lib/utils';

// Combine all icons into a single list
export const ICON_LIST = {
  ...ActionIcons,
  ...ContentsIcons,
};

export type IconNames = keyof typeof ICON_LIST;

export type PresetIconSize =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large';

export const PRESET_ICON_SIZE: Record<PresetIconSize, number> = {
  xxsmall: 10,
  xsmall: 16,
  small: 20,
  medium: 24,
  large: 32,
};

type Props = {
  name: IconNames;
  size?: PresetIconSize | number;
  color?: ColorValue;
  className?: string;
};

export function StyledIcon({ name, size = 'medium', color, className }: Props) {
  const Icon = ICON_LIST[name];
  const _size = typeof size === 'number' ? size : PRESET_ICON_SIZE[size];

  if (!Icon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <View
      className={cn(
        `w-[${_size}px] h-[${_size}px] flex items-center justify-center`,
        className
      )}
    >
      <Icon size={_size} color={color} />
    </View>
  );
}
