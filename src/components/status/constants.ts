export const STATUS_STYLES: Record<string, string> = {
  new: 'bg-red-400 text-white',
  categorization: 'bg-orange-400 text-white',
  ts_in_progress: 'bg-blue-400 text-white',
};

export const STATUS_HISTORY = [
  { id: 1, time: '22:58', statuses: ['new'] },
  { id: 2, time: '22:58', statuses: ['new', 'categorization'] },
  { id: 3, time: '22:59', statuses: ['categorization', 'ts_in_progress'] },
];
