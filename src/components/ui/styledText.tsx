import React, { type ReactNode, useMemo } from 'react';
import { Text, type TextProps } from 'react-native';
import { cn } from '@/lib/utils';

export type Typography =
  | 'Heading'
  | 'Title1'
  | 'Subtitle1'
  | 'Caption1'
  | 'Body1'
  | 'Label1'
  | 'Label2';

const TYPOGRAPHY_STYLES: Record<Typography, string> = {
  Heading: 'text-[25px] font-normal leading-8',
  Title1: 'text-[20px] font-bold leading-8',
  Subtitle1: 'text-[16px] font-bold leading-6',
  Caption1: 'text-[13px] font-bold leading-4',
  Body1: 'text-[16px] font-normal leading-6',
  Label1: 'text-[13px] font-normal leading-4',
  Label2: 'text-[10px] font-normal leading-4',
};

export type StyledTextProps = TextProps & {
  children: ReactNode | string;
  typography?: Typography;
  parentTypography?: Typography;
  className?: string;
};

export const StyledText = ({
  typography = 'Caption1',
  parentTypography,
  children,
  className,
  style,
  ...textProps
}: StyledTextProps) => {
  const textClass = useMemo(() => {
    return TYPOGRAPHY_STYLES[parentTypography || typography];
  }, [typography, parentTypography]);

  return (
    <Text className={cn(textClass, className)} style={style} {...textProps}>
      {children}
    </Text>
  );
};
