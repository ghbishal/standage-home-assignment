import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { DEFAULT_COLOR, DEFAULT_SIZE, type IconProps } from '../types';

export const ArrowRight = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </Svg>
  );
};
