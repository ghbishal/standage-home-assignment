import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Details from './details';
import ExternalChat from './externalChat';
import InternalChat from './internalChat';

const Tab = createMaterialTopTabNavigator();

export default function _layout() {
  const { t } = useTranslation('translation', { keyPrefix: 'navigation' });
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="externalChat"
        component={ExternalChat}
        options={{ title: t('external_chat') }}
      />
      <Tab.Screen
        name="internalChat"
        component={InternalChat}
        options={{ title: t('internal_chat') }}
      />
      <Tab.Screen
        name="details"
        component={Details}
        options={{ title: t('details') }}
      />
    </Tab.Navigator>
  );
}
