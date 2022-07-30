import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.main};
  padding: 62px;
  padding-top: 96px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  text-align: center;

  margin: 80px 0 140px;
`;
export const Footer = styled.View`
  width: 100%;
  align-items: center;
`;