import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;

  border-width: 2px;
  border-color: transparent;  
  ${({ isFocused, theme }) => isFocused && css`
    border-width: 2px;
    border-color: ${theme.colors.main};    
  `};
`;
export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;
  z-index: 10;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
export const InputText = styled.TextInput`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;
`;