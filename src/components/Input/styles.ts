import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: transparent;  
  border-radius: 8px;

  ${({ isFocused, theme }) => isFocused && css`
    border-width: 2px;
    border-color: ${theme.colors.main};    
  `};
  background-color: ${({ theme }) => theme.colors.background_secondary};
  `
export const IconContainer = styled.View`
  min-height: ${RFValue(56)}px;
  width: ${RFValue(55)}px;
  justify-content: center;
  align-items: center;
  
  margin-right: 2px;
  border-radius: 999px;
`
export const InputText = styled.TextInput`
  flex: 1;
  
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: ${RFValue(12)}px ${RFValue(23)}px;  
  `