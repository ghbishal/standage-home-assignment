import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { DEFAULT_COLOR, DEFAULT_SIZE, type IconProps } from '../types';

export const PersonFill = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.5077 11.7987C13.1846 11.7987 14.6077 10.2965 14.6077 8.35288C14.6077 6.45575 13.1769 5 11.5077 5C9.83077 5 8.39231 6.47898 8.4 8.36836C8.4 10.2965 9.82308 11.7987 11.5077 11.7987ZM6.70769 19H16.2923C17.5615 19 18 18.6128 18 17.9004C18 15.9104 15.4923 13.1692 11.5 13.1692C7.51538 13.1692 5 15.9104 5 17.9004C5 18.6128 5.43846 19 6.70769 19Z"
        fill={color}
      />
    </Svg>
  );
};
