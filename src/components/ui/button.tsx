import { Pressable, Text } from 'react-native';

type Props = {
  label: string;
  onPress?: () => void;
};

export function Button({ label, onPress }: Props) {
  return (
    <Pressable
      className="w-320 h-68 mx-20 items-center justify-center rounded-md bg-blue-800 p-3"
      onPress={onPress}
    >
      <Text className="text-xl color-white">{label}</Text>
    </Pressable>
  );
}
