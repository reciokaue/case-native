import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  padding-top: ${getStatusBarHeight() + 24}px;
`
export const Heading = styled.View`
  width: 100%;
  justify-content: flex-start;
  margin-top: 15px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(43)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title}; 
  line-height: ${RFValue(40)}px;
`
export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text}; 
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${RFValue(25)}px;
`
export const Frame = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const Form = styled.View`
  width: 100%;
  margin: 20px 0;
`;
export const ForgotPassword = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_detail}; 
  margin-top: ${RFValue(5)}px;
  margin-bottom: ${RFValue(25)}px;
`