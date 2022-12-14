import styled from 'styled-components/native';

import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  position: relative;
  z-index: 10;
`;
export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(56)}px;

  border-radius: 5px;
  overflow: hidden;
  z-index: 20;
  background:  ${({ theme }) => theme.colors.background_primary};
`;

export const Input = styled.TextInput`
  flex: 1;
  padding:  ${(RFValue(20))}px ${(RFValue(20))}px;

  font-size: ${(RFValue(15))}px;
  color:  ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${(RFValue(15))}px;
  
  border-right-color:  ${({ theme }) => theme.colors.line};
  border-right-width: 1.5px;
  z-index: 10;
`;
export const Button = styled(RectButton)`
  background: ${({ theme }) => theme.colors.background_primary};
  padding: 16px;
  justify-content: center;
`;
export const Icon = styled(Feather).attrs({
  size: 24,
})`
  color:  ${({ theme }) => theme.colors.text_detail};
`;
export const FakeBackground = styled.View`
  width: 120%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
