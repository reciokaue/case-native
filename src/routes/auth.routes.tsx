import React from 'react';

import { Login } from '../screens/Login';
import { Signup } from '../screens/Signup';
import { PasswordChange } from '../screens/PasswordChange';

import { createStackNavigator } from '@react-navigation/stack';
const Stack: any = createStackNavigator();

export function AuthRoutes(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="PasswordChange" component={PasswordChange} />
    </Stack.Navigator>
  )
}