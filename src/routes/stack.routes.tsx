import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { CourseDetail } from '../screens/CourseDetail';
import { User } from '../screens/User';
const Stack: any = createStackNavigator();

export function StackRoutes(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  )
}