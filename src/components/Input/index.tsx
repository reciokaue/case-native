import React, { useState } from 'react';

import { Container, IconContainer, InputText } from './styles'
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
const Icon:any = Feather

interface Props extends TextInputProps {
  iconName?: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({iconName, value, ...rest}: Props){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)     
  }

  return (
    <Container isFocused={isFocused}>
      <InputText value={value}  onFocus={handleInputFocus} onBlur={handleInputBlur}{...rest}/>

      {iconName &&
        <IconContainer>
          <Icon name={iconName} size={24} color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}/>
        </IconContainer>
      }
    </Container>
  )
}