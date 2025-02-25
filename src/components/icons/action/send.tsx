import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { DEFAULT_COLOR, DEFAULT_SIZE, type IconProps } from '../types';

export const Send = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />
    </Svg>
  );
};
