import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;
  height: 100%;
`
export const Wrapper = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`
export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px;
  justify-content: center;
  align-items: center;
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
export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title}; 
`
export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title}; 
  margin-top: 20px;
`
export const About = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text}; 
`
export const Professor = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main}; 
`
export const IconBox = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`
export const Section = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
`
