import React from 'react';

import { Login } from '../screens/Login';

import { createStackNavigator } from '@react-navigation/stack';
import { Signup } from '../screens/Signup';
const Stack: any = createStackNavigator();

export function AuthRoutes(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}