import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { STATUS_HISTORY } from './constants';
import { StatusItem } from './statusItem';

export function StatusSelector() {
  const router = useRouter();
  const latestStatus = STATUS_HISTORY[STATUS_HISTORY.length - 1];

  return (
    <TouchableOpacity
      onPress={() => router.push('/modal/status')}
      className="flex-1 items-center justify-between  rounded-sm border border-gray-300 bg-gray-100 py-2 shadow-sm"
    >
      <StatusItem
        time={latestStatus?.time}
        statuses={latestStatus?.statuses}
        isLastItem={true}
      />
    </TouchableOpacity>
  );
}
