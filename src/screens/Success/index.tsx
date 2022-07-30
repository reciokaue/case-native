import React from 'react';

import { useNavigation} from '@react-navigation/native';

import { Container, Content, Title, Message, Footer } from './styles';
import { Button } from '../../components/Button';

import Feather from '@expo/vector-icons/Feather'
const Icon:any = Feather

export function Success(){
  const navigation = useNavigation();
  
  function handleConfirm() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Content>
        <Icon name='layers' size={150} color="#FAFAFA"/>
        <Title> Seu curso foi adicionado com sucesso!</Title>
      </Content>
      <Footer>
        <Button title="Voltar" onPress={handleConfirm} color="#FAFAFA" light/>
      </Footer>
    </Container>
  );
}