import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { TabRoutes } from './tab.routes';

import { useApp } from '../context/AppContext';

export function Routes(){
  const { isUserLogged } = useApp()

  return (
    <NavigationContainer>
      {isUserLogged?
        <TabRoutes/>:
        <AuthRoutes/>
      }
    </NavigationContainer>
  )
}