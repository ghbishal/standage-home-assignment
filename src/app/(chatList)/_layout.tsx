import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Details from './details';
import ExternalChat from './externalChat';
import InternalChat from './internalChat';

const Tab = createMaterialTopTabNavigator();

export default function _layout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="externalChat"
        component={ExternalChat}
        options={{ title: 'External Chat' }}
      />
      <Tab.Screen
        name="internalChat"
        component={InternalChat}
        options={{ title: 'Internal Chat' }}
      />
      <Tab.Screen
        name="details"
        component={Details}
        options={{ title: 'Details' }}
      />
    </Tab.Navigator>
  );
}
