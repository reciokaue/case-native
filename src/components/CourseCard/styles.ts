import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
const Button:any = RectButton


export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
  height: ${RFValue(180)}px;
`;
export const Content = styled.View`
  flex: 1;
  height: ${RFValue(180)}px;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${RFValue(13)}px;
`
export const Image = styled.Image`
  height: 100%;
  width: 145px;
`
export const Effect = styled(Button)`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-weight: bold;
  font-size: ${RFValue(17)}px;
  color: ${({theme}) => theme.colors.title};
`;
export const About = styled.Text.attrs({
  numberOfLines: 5,
})`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text_detail};
`;
export const Divisor = styled.View``
export const Professor = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.main};
  margin-left: 9px;
`;
export const Footer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  
  margin-top: 10px;
`