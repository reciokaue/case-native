import React, { useRef, useState } from 'react';

import * as ImagePicker from "expo-image-picker";
import * as Yup from 'yup';

import { Input } from '../../components/Input';
import { Container, Form, Frame, Header, HeaderImage } from './styles'
import { Button } from '../../components/Button';

import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
const ViewCloseKeyboard:any = TouchableWithoutFeedback
const ViewUpperKeyboard:any = KeyboardAvoidingView

import Feather from '@expo/vector-icons/Feather'
const Icon:any = Feather

import { api } from '../../services/api';
import { storage } from '../../services/firebase';
import { Modalize } from 'react-native-modalize';
import { LinePressable } from '../../components/LinePressable';
import theme from '../../styles/theme';
import { Portal } from 'react-native-portalize';
import { useApp } from '../../context/AppContext';
import { useNavigation } from '@react-navigation/native';

export function CreateCourse(){
  const [ about, setAbout ] = useState('')
  const [ owner, setOwner ] = useState('')
  const [ courseName, setCourseName ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ image, setImage] = useState('');

  const [ requestLoading, setRequestLoading] = useState(false);
  const modalizeRef = useRef<Modalize>(null);
  const categorys = [ 'Tecnologia', 'Biologia', 'Engenharia', 'Historia', 'Filosofia', 'Matemática']

  const { handleAddCourse } = useApp()
  const navigation = useNavigation();

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  function handleSelecCategory(category: string){
    setCategory(category)
    modalizeRef.current?.close();
  };

  async function handlePickImage(){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  async function handleBlobImage(){
    const filename = image.substring(image.lastIndexOf('/') + 1);

    const blob: Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });
    
    const ref = storage.ref(`images/${filename}`);
    const snapshot = await ref.put(blob, { contentType: "image/png" });
    const remoteURL = await snapshot.ref.getDownloadURL();

    return remoteURL
  }
  async function handleValidade(){
    try{
      const schema = Yup.object().shape({
        courseName: Yup.string()
          .required('O nome do curso obrigatório'),
        owner: Yup.string()
          .required('O nome do professor é obrigatório'),
        category: Yup.string()
          .required('A categoria é obrigatória'),
        about: Yup.string()
          .required('A descrição é obrigatória'),
        image: Yup.string()
          .required('A imagem é obrigatória'),
      });
      await schema.validate({courseName, owner, category, about, image});
      return true
    }catch(error){
      if(error instanceof Yup.ValidationError){
        Alert.alert('Algo está errado', error.message);
      }else{
        Alert.alert(
          'Erro na autenticação', 
          'Ocorreu um erro ao criar o curso, verifique os dados e tente novamente'
        )
      }
      return
    }  
  }
  function handleClearData(){
    setCourseName('')
    setAbout('')
    setOwner('')
    setCategory('')
    setImage('')
  }
  async function handleCreateCourse(){
    const isValidate = await handleValidade()
    
    if(requestLoading)
      return

    if(isValidate){
      setRequestLoading(true)
  
      try {
        const imageUrl = await handleBlobImage()
        const newCourse = {
          name: courseName,
          owner,
          category,
          about,
          image: imageUrl
        }

        await api.post('/course', newCourse);

        handleAddCourse(newCourse)
        handleClearData()

      } catch (error) {
        console.log(error)
        Alert.alert(
          'Algo de errado aconteceu, tente novamente', 
        )
      } finally {
        setRequestLoading(false)
        navigation.navigate('Home')
      }
    }
  }

  return (
    <Container>
      <ViewCloseKeyboard  onPress={Keyboard.dismiss}>
        <ViewUpperKeyboard behavior="position" enabled>
          <Frame>
            <Header onPress={handlePickImage}>
              {image? <HeaderImage source={{uri: image}}/>: null}
              <Icon name='camera' size={48} color="#FAFAFA" style={{zIndex: 10, position: 'absolute', top: 125}}/>
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
            <Button 
              title="Cadastrar"
              loading={requestLoading }
              onPress={() => navigation.navigate('User')}
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
          </Portal>
        </ViewUpperKeyboard>
      </ViewCloseKeyboard>
    </Container>
  )
}