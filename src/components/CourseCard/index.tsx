import React from 'react';

import { useTheme } from 'styled-components';
import { About, Container, Content, Divisor, Effect, Footer, Image, Professor, Title,} from './styles';
import { CourseProps } from '../../context/AppContext';

import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const Icon:any = Feather

export function CourseCard({id, name, owner, category, about, image}: CourseProps){
  const theme = useTheme();
  const IconName = getCourseIcon(category)
  const navigation = useNavigation()

  function getCourseIcon(name: string){
    switch (name) {
      case 'Tecnologia':
    return 'terminal'
      case 'Biologia':
    return 'feather'
      case 'Historia':
    return 'anchor'
      case 'Matemática':
    return 'hash'
     case 'Filosofia':
    return 'users'
      case 'Engenharia':
    return 'truck'
      default:
        break;
    }
  }

  function handleGoToCourseDetail(){
    navigation.navigate({
      name: 'CourseDetail',
      params: {id, name, owner, category, about, image, categoryIconName: IconName}
    })
  }

  return (
    <Container activeOpacity={0.95} onPress={handleGoToCourseDetail}>
      <Effect>
        <Content>
          <Divisor>
            <Title>{name}</Title>
            <About>{about}</About>
          </Divisor>
          <Footer>
            <Icon name='user-check' size={24} color={theme.colors.main}/>
            <Professor>{owner}</Professor>
          </Footer>
        </Content>
        <Image source={{uri: image}}/>
        <Icon name={IconName} size={24} color={theme.colors.background_secondary} style={{position: 'absolute', right: 13, bottom: 13, zIndex: 10}}/>
        <Icon name='award' size={24} color={theme.colors.background_secondary} style={{position: 'absolute', right: 13, top: 13, zIndex: 10}}/>
      </Effect>
    </Container>
  );
}