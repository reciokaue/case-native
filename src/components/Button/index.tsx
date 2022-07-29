import React from 'react';
import { useTheme } from 'styled-components';
import {  RectButtonProps } from 'react-native-gesture-handler';
import { Container, IconContainer, Title, Wrapper} from './styles';
import { ActivityIndicator } from 'react-native';
const LoadingIcon: any = ActivityIndicator

import Feather from '@expo/vector-icons/Feather';
const Icon:any = Feather

interface Props extends RectButtonProps{
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
  iconName?: React.ComponentProps<typeof Feather>['name'];
}

export function Button({
  title,
  color,
  iconName,
  onPress,
  enabled = true,
  loading = false,
  light = false,
}: Props){
  const theme = useTheme();

  return (
    <Wrapper
      onPress={onPress}
      color={color ? color : theme.colors.main} 
      activeOpacity={1}
      enabled={loading? false: enabled}
    >
      <Container 
        style={{ opacity: (enabled === false || loading === true) ? .5 : 1,
          justifyContent: iconName? 'space-between': 'center'
        }}
      >
        {
          loading 
          ? <LoadingIcon color={theme.colors.shape} />
          : <Title  light={light}>{title}</Title>      
        }
        {iconName &&
          <IconContainer>
            <Icon name={iconName} size={24} color={theme.colors.text_detail}/>
          </IconContainer>
        }
      </Container>
    </Wrapper>
  );
}