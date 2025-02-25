import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { getLocales } from 'expo-localization';
import { twMerge } from 'tailwind-merge';

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
    const weekday = date
      .toLocaleDateString(userLocale, { weekday: 'short' })
      .replace(/,/g, '')
      .toUpperCase();

    const formattedDate = date
      .toLocaleDateString(userLocale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\//g, '/');
    return `${formattedDate} (${weekday})`;
  }

  return date.toLocaleTimeString(userLocale, {
    hour: '2-digit',
    minute: '2-digit',
  });
}
