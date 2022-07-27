import React, { useState } from 'react';

import * as ImagePicker from "expo-image-picker";

import { Input } from '../../components/Input';
import { Container, Form, Header, HeaderImage } from './styles'
import { StatusBar } from 'expo-status-bar';

import Feather from '@expo/vector-icons/Feather'
const Icon:any = Feather

import { Button } from '../../components/Button';

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
      <StatusBar style='light' backgroundColor='transparent' translucent/>
      <Header onPress={handlePickImage}>
        {image?
          <HeaderImage source={{uri: image}}/>:
          <Icon name='camera' size={48} color="#FAFAFA" />
        }
      </Header>
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
          textAlignVertical='top'
          numberOfLines={4}
          onChangeText={setAbout}
          value={about}
        />
        <Button 
          title="Cadastrar"
          enabled
          loading={false}
          onPress={() => {}}
        />
      </Form>
    </Container>
  )
}