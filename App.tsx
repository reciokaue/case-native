import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/styles/theme';

import { useFonts, Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold} from '@expo-google-fonts/archivo';
import AppLoading from 'expo-app-loading';
import { AppProvider } from './src/context/AppContext';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent/>
        <Routes/>
      </AppProvider>
    </ThemeProvider>
  );
}
