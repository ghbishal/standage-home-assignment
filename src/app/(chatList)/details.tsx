import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

export default function Details() {
  const { t } = useTranslation('translation', { keyPrefix: 'navigation' });
  return (
    <View>
      <Text>{t('details')}</Text>
    </View>
  );
}
