import LottieView from 'lottie-react-native';
import React from 'react';
import { View, type DimensionValue } from 'react-native';
import { cn } from '@/lib/utils';

type Props = {
  size: DimensionValue;
};

export function Loading({ size }: Props) {
  return (
    <View className={cn('aspect-square', size)}>
      <LottieView
        style={{ flex: 1 }}
        source={require('../assets/images/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
}
