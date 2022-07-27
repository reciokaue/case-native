import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { TabRoutes } from './tab.routes';

export function Routes(){
  return (
    <NavigationContainer>
      {/* <AuthRoutes/> */}
      <TabRoutes/>
    </NavigationContainer>
  )
}