import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { StyledIcon } from '../icons/styledIcon';
import { ToolChip } from '../ui/toolChip';
import { STATUS_STYLES } from './constants';
import { cn } from '@/lib/utils';

type Props = {
  time?: string;
  statuses?: string[];
  isLastItem?: boolean;
};
export function StatusItem({ time, statuses, isLastItem = false }: Props) {
  const { t } = useTranslation('translation', { keyPrefix: 'status' });
  return (
    <View
      className={cn(
        'flex-row items-center justify-between py-1',
        isLastItem ? '' : 'border-b border-gray-300'
      )}
    >
      <View className="mr-1 flex-row items-center gap-1">
        <ToolChip label={time} variant="pressed" size="sm" />
        <StyledIcon name="Live" />
        <Text className="text-sm text-gray-600">{t('status_changed')}</Text>
      </View>
      <View className="flex-row items-center gap-2">
        {statuses &&
          statuses.map((status, index) => (
            <View
              key={`${time}-${index}`}
              className="flex-row items-center gap-1"
            >
              {index > 0 && <Text className="text-gray-500">→</Text>}
              <Text
                className={cn(
                  'rounded-md px-2 py-1 text-xs font-semibold uppercase',
                  STATUS_STYLES[status] || 'bg-gray-300'
                )}
              >
                {t(status)}
              </Text>
            </View>
          ))}
      </View>
    </View>
  );
}
