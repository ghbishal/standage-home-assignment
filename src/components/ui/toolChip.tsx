import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { View, Text } from 'react-native';
import { cn } from '@/lib/utils';

const toolChipVariants = cva(
  'flex items-center justify-center rounded-xl border px-3 py-1 font-semibold tracking-wider',
  {
    variants: {
      variant: {
        selected: 'border-black bg-black text-white',
        pressed: 'border-gray-500 bg-gray-500 text-white',
        disabled: 'border-gray-300 bg-gray-300 text-gray-500',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'selected',
      size: 'md',
    },
  }
);

type ToolChipProps = VariantProps<typeof toolChipVariants> & {
  label?: string;
  className?: string;
};

export const ToolChip = ({
  label,
  variant,
  size,
  className,
}: ToolChipProps) => (
  <View className={cn(toolChipVariants({ variant, size }), className)}>
    <Text className="text-xs text-white">{label}</Text>
  </View>
);
