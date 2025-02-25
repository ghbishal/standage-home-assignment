import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@/components/ui/button';

export default function StartPage() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello World</Text>
      <Button
        label="Go To Chat Page"
        onPress={() => router.push('/chatList')}
      />
    </View>
  );
}
