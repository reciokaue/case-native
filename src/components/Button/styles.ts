import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
const Button:any = RectButton

interface ButtonProps {
  color: string;
}

interface ButtonTextProps {
  light: boolean;
}

export const Wrapper = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  background-color: ${({ color }) => color};
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
`;
export const Container = styled(Button)<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({theme, light}) => 
  light ? theme.colors.text_detail : theme.colors.shape};
`;
export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  
  margin-right: 2px;
  border-radius: 999px;
`