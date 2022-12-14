import React from 'react';


import { CreateCourse } from '../screens/CreateCourse';
import { Home } from '../screens/Home';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';
const Icon:any = Feather

import { Host } from 'react-native-portalize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab: any = createBottomTabNavigator();

export function TabRoutes(){
  const theme = useTheme();

  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.main,
          tabBarInactiveTintColor: theme.colors.text_detail,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            height: 78,
            backgroundColor: theme.colors.background_primary
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: (({ color }: any) => (
          <Icon name="box" size={24} color={color} />
        ))}} />
        <Tab.Screen name="CreateCourse" component={CreateCourse} options={{ tabBarIcon: (({ color }: any) => (
          <Icon name="edit" size={24} color={color} />
        ))}} />
      </Tab.Navigator>
    </Host>
  )
}