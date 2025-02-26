import React from 'react';
import { G, Path, Svg } from 'react-native-svg';
import { DEFAULT_COLOR, DEFAULT_SIZE, type IconProps } from '../types';

export const Reply = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <G transform="matrix(1.07 0 0 1.07 12 12)">
        <Path
          transform=" translate(-11.79, -11.65)"
          d="M 7.2929688 2.2929688 L 2.5859375 7 L 7.2929688 11.707031 L 8.7070312 10.292969 L 6.4140625 8 L 15 8 C 17.220375 8 19 9.7796254 19 12 L 19 21 L 21 21 L 21 12 C 21 8.6983746 18.301625 6 15 6 L 6.4140625 6 L 8.7070312 3.7070312 L 7.2929688 2.2929688 z"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
