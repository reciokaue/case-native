import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
const Stack: any = createStackNavigator();

import { Success } from '../screens/Success';
import { TabRoutes } from './tab.routes';
import { CourseDetail } from '../screens/CourseDetail';

export function StackRoutes(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
    </Stack.Navigator>
  )
}
