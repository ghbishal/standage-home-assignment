import { useRouter } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { Button } from '@/components/ui/button';

export default function StartPage() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{t('name')}</Text>
      <Button
        label="Go To Chat Page"
        onPress={() => router.replace('/(chatList)/externalChat')}
      />
    </View>
  );
}
