import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
  align-items: center;
  justify-content: flex-start;
  /* padding: 100px 0px; */
`
export const CourseList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false,
})`
  max-width: 100%;
`;