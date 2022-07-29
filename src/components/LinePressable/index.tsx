import React from 'react';

import { useTheme } from 'styled-components';
import {  RectButtonProps } from 'react-native-gesture-handler';
import { Container, IconContainer, Title, Wrapper} from './styles';

import Feather from '@expo/vector-icons/Feather';
const Icon:any = Feather

interface Props extends RectButtonProps{
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
  iconName?: React.ComponentProps<typeof Feather>['name'];
}

export function LinePressable({ title, color, iconName, onPress }: Props){
  const theme = useTheme();

  return (
    <Wrapper
      onPress={onPress}
      color={color ? color : theme.colors.main} 
      activeOpacity={0.9}
    >
      <Container>
        <IconContainer>
          <Icon name={iconName} size={24} color={theme.colors.text_detail}/>
        </IconContainer>
        <Title>{title}</Title>   
      </Container>
    </Wrapper>
  );
}