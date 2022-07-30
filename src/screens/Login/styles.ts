import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Wrapper = styled.View`
  flex: 1;
  height: 100%;
`
export const Container = styled.View`
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 24px;
`
export const Title = styled.Text`
  font-size: ${RFValue(43)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title}; 
  line-height: ${RFValue(40)}px;
  text-align: left;
  width: 100%;
  margin: ${RFValue(60)}px 0 0 0;
`
export const Frame = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const Form = styled.View`
  width: 100%;
  margin: 20px 0 50px 0;
`;
