import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

export default function InternalChat() {
  const { t } = useTranslation('translation', { keyPrefix: 'navigation' });
  return (
    <View>
      <Text>{t('internal_chat')}</Text>
    </View>
  );
}
