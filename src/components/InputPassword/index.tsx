import React, { useState } from 'react';

import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
const Icon:any = Feather

import {
  Container,
  IconContainer,
  InputText,
} from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function InputPassword({ iconName, value, ...rest} : Props ){
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }


  return (
    <Container isFocused={isFocused}>
      <InputText 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={!isPasswordVisible}
        autoCorrect={false}            
        {...rest}
      />
      <IconContainer>
        <BorderlessButton style={{padding: 6}} onPress={handlePasswordVisibilityChange}>
            <Icon name={isPasswordVisible ? 'eye' : 'eye-off'}size={24} color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}/>
        </BorderlessButton>
      </IconContainer>
    </Container>
  );
}