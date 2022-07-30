import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
const Stack: any = createStackNavigator();

import { Success } from '../screens/Success';
import { TabRoutes } from './tab.routes';
import { CourseDetail } from '../screens/CourseDetail';
import { CreateCourse } from '../screens/CreateCourse';
import { Host } from 'react-native-portalize';

export function StackRoutes(){
  return (
    <Host>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="EditCourse" component={CreateCourse} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </Host>
  )
}
