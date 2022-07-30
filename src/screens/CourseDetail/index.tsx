import React, { useState } from 'react';

import { Input } from '../../components/Input';
import { About, Container, Footer, Header, HeaderImage, IconBox, Professor, Section, Subtitle, Title, Wrapper } from './styles'
import { Button } from '../../components/Button';

// import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import Feather from '@expo/vector-icons/Feather'
import { CourseProps } from '../../context/AppContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import theme from '../../styles/theme';
const Icon:any = Feather

interface Params extends CourseProps {
  categoryIconName: string
}

export function CourseDetail(){
  const navigation = useNavigation()
  const route = useRoute()
  const {id, name, owner, category, about, image, categoryIconName} = route.params as Params

  const handleToggleEdit = () => {
    navigation.navigate({
      name: 'EditCourse',
      params: {id, name, owner, category, about, image}
    })
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderImage source={{uri: image}}/>
        </Header>
        <Section>
          <Title>{name}</Title>
          <About>{about}</About>
          <Subtitle>Professor responsável</Subtitle>
          <IconBox>
            <Icon name="user-check" size={24} color={theme.colors.main} style={{marginRight: 8}}/>
            <Professor>{owner}</Professor>
          </IconBox>
          <Subtitle>Categoria</Subtitle>
          <IconBox>
            <Icon name={categoryIconName} size={24} color={theme.colors.text} style={{marginRight: 8}}/>
            <About>{category}</About>
          </IconBox>
        </Section>
      </Container>
      <Footer>
        <Button title="Editar dados" onPress={handleToggleEdit}/>
      </Footer>
    </Wrapper>
  )
}