import React from 'react';

import { Input } from '../../components/Input';
import { About, Container, Form, Frame, Header, HeaderImage, IconBox, Professor, Subtitle, Title } from './styles'
import { Button } from '../../components/Button';

import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
const ViewCloseKeyboard:any = TouchableWithoutFeedback
const ViewUpperKeyboard:any = KeyboardAvoidingView

import Feather from '@expo/vector-icons/Feather'
import { CourseProps } from '../../context/AppContext';
import { useRoute } from '@react-navigation/native';
import theme from '../../styles/theme';
const Icon:any = Feather

interface Params extends CourseProps {
  categoryIconName: string
}

export function CourseDetail(){
  const route = useRoute()
  const {name, owner, category, about, image, categoryIconName} = route.params as Params

  return (
    <Container>
      <ViewCloseKeyboard  onPress={Keyboard.dismiss}>
        <ViewUpperKeyboard behavior="position" enabled>
          <Header>
            <HeaderImage source={{uri: image}}/>
          </Header>
          <Frame>
            <Title>{name}</Title>
            <About>{about}</About>
            <Subtitle>Professor responsável</Subtitle>
            <IconBox>
              <Icon name="user-check" size={24} color={theme.colors.main} style={{marginRight: 8}}/>
              <Professor>{owner}</Professor>
            </IconBox>
            <Subtitle>Categoria</Subtitle>
            <IconBox>
              <Icon name={categoryIconName} size={24} color={theme.colors.text} style={{marginRight: 8}}/>
              <About>{category}</About>
            </IconBox>
          </Frame>
          <Frame>
            <Button title="Editar dados" />
            {/* <Button title="Exluir curso" color={theme.colors.exclude}/> */}
          </Frame>



            {/* <Input
              iconName="edit-3"
              placeholder="Nome do curso"
              autoCorrect={false}
              onChangeText={setCourseName}
              value={courseName}
            />
            <Input
              iconName="user-check"
              placeholder="Professor responsável"
              autoCorrect={false}
              onChangeText={setOwner}
              value={owner}
            />
            <Input
              placeholder="Descrição"
              autoCorrect={false}
              autoCapitalize="none"
              multiline numberOfLines={3}
              textAlignVertical="top"
              onChangeText={setAbout}
              value={about}
            />
            <Button 
              title={category? category : 'Categoria'}
              enabled
              color='#fff'
              loading={false} light
              iconName="chevron-up"
              onPress={onOpen}
            />
            
          </Form>
          <Portal>
            <Modalize
              handleStyle={{ width: 105}}
              adjustToContentHeight
              flatListProps={{
                data: categorys,
                renderItem: ({item, index}) => (
                  <LinePressable onPress={() => handleSelecCategory(item)} title={item} color={index%2 == 0? theme.colors.background_primary: theme.colors.background_secondary}/>
                ),
              }}      
              closeOnOverlayTap
              childrenStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden'}}
              overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.45)'}}
              ref={modalizeRef}
            >
            </Modalize>
          </Portal> */}
        </ViewUpperKeyboard>
      </ViewCloseKeyboard>
    </Container>
  )
}