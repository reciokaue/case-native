import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-bottom-color: transparent;  
  ${({ isFocused, theme }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};    
  `};
  `
export const IconContainer = styled.View`
  min-height: ${RFValue(56)}px;
  width: ${RFValue(55)}px;
  justify-content: center;
  align-items: center;
  
  margin-right: 2px;
  
  background-color: ${({ theme }) => theme.colors.background_secondary};
  `
export const InputText = styled.TextInput`
  flex: 1;
  
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: ${RFValue(12)}px ${RFValue(23)}px;  
  `