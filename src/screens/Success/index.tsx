import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';
import { Button } from '../../components/Button';
import { StatusBar } from 'expo-status-bar';


export function Confirmation(){
  const { width } = useWindowDimensions();

  const navigation = useNavigation();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }

  return (
    <Container>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
      />
      
      {/* <LogoSvg width={width} /> */}

      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>{title}</Title>

        <Message>
          Seu curso foi adicionado com sucesso!
        </Message>
      </Content>

      <Footer>
        <Button title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}