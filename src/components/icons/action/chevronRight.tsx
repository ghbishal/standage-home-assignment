import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { DEFAULT_COLOR, DEFAULT_SIZE, type IconProps } from '../types';

export const ChevronRight = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.6917 11.6822C15.6842 11.4185 15.5862 11.1925 15.3828 10.9891L9.52176 5.25614C9.34849 5.0904 9.14509 5 8.89648 5C8.39174 5 8 5.39174 8 5.89648C8 6.13756 8.09794 6.36356 8.27121 6.53683L13.5446 11.6822L8.27121 16.8276C8.09794 17.0008 8 17.2193 8 17.4679C8 17.9727 8.39174 18.3644 8.89648 18.3644C9.13756 18.3644 9.34849 18.274 9.52176 18.1083L15.3828 12.3677C15.5937 12.1719 15.6917 11.9459 15.6917 11.6822Z"
        fill={color}
      />
    </Svg>
  );
};
