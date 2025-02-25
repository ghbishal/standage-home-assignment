import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getLocales } from 'expo-localization';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  timestamp: string | number,
  formatType: 'fullDate' | 'timeOnly' = 'timeOnly'
): string {
  const userLocale = getLocales()[0]?.languageTag || 'en-US';
  const date = new Date(timestamp);

  if (formatType === 'fullDate') {
    return date
      .toLocaleDateString(userLocale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
      })
      .replace(/,/g, '')
      .toUpperCase();
  }

  return date.toLocaleTimeString(userLocale, {
    hour: '2-digit',
    minute: '2-digit',
  });
}
