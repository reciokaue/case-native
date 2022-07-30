import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';

import { useApp } from '../context/AppContext';
import { StackRoutes } from './stack.routes';

export function Routes(){
  const { isUserLogged } = useApp()

  return (
    <NavigationContainer>
      {isUserLogged?
        <StackRoutes/>:
        <AuthRoutes/>
      }
    </NavigationContainer>
  )
}