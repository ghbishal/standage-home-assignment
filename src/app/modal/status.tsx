import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { STATUS_HISTORY } from '@/components/status/constants';
import { StatusItem } from '@/components/status/statusItem';

export default function StatusModal() {
  const router = useRouter();
  const { t } = useTranslation('translation', { keyPrefix: 'status' });

  return (
    <View className="flex-1 bg-white p-2">
      <Text className="mb-4 text-center text-lg font-semibold">
        {t('status_history')}
      </Text>
      <FlatList
        data={STATUS_HISTORY}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <StatusItem time={item.time} statuses={item.statuses} />
        )}
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="mt-6 self-center rounded-lg bg-gray-200 p-3"
      >
        <Text className="text-lg font-semibold text-gray-700">
          {t('close')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
