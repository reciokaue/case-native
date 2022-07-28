import React, { useState } from 'react';

import * as ImagePicker from "expo-image-picker";

import { Input } from '../../components/Input';
import { Container, Form, Frame, Header, HeaderImage } from './styles'
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button';

import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
const ViewCloseKeyboard:any = TouchableWithoutFeedback
const ViewUpperKeyboard:any = KeyboardAvoidingView

import Feather from '@expo/vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler';
const Icon:any = Feather


export function CreateCourse(){
  const [ about, setAbout ] = useState('')
  const [ owner, setOwner ] = useState('')
  const [ courseName, setCourseName ] = useState('')
  const [ category, setCategory ] = useState('tecnology')
  const [ image, setImage] = useState('');

  async function handlePickImage(){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <Container>
      <ViewCloseKeyboard  onPress={Keyboard.dismiss}>
        <ViewUpperKeyboard behavior="position" enabled>
            <StatusBar style='light' backgroundColor='transparent' translucent/>
            <Frame>
              <Header onPress={handlePickImage}>
                {image?
                  <HeaderImage source={{uri: image}}/>:
                  <Icon name='camera' size={48} color="#FAFAFA" />
                }
              </Header>
            </Frame>
            <Form>
              <Input
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
                iconName="clipboard"
                placeholder="Descrição"
                autoCorrect={false}
                autoCapitalize="none"
                multiline
                onChangeText={setAbout}
                value={about}
              />
              <Button 
                title="Categoria"
                enabled
                color='#fff'
                loading={false} light
                iconName="chevron-up"
                onPress={() => {}}
              />
              <Button 
                title="Cadastrar"
                enabled
                loading={false}
                onPress={() => {}}
              />
            </Form>
        </ViewUpperKeyboard>
      </ViewCloseKeyboard>
    </Container>
  )
}