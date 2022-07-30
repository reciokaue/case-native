import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
  align-items: center;
  justify-content: flex-start;
`
export const CourseList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false,
})`
  max-width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight() + 12}px ;
  background-color: ${({theme}) => theme.colors.main};
  align-items: center;
  justify-content: space-between;
`
export const Line = styled.View`
  padding: 0 ${RFValue(24)}px  ${RFValue(12)}px ;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`
export const HelloUser = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary}; 
`
export const CourseCounter = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.background_secondary}; 
`
