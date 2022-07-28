import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  height: 100%;
`
export const Header = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(270)}px;
  background: ${({ theme }) => theme.colors.main};

  align-items: center;
  justify-content: center;
`
export const HeaderImage = styled.Image`
  width: 100%;
  height: 100%;
`
export const Form = styled.View`
  /* height: 100%; */
  background: ${({ theme }) => theme.colors.background_primary};

  padding: ${RFValue(24)}px;
`
export const Frame = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #466EB6;
`