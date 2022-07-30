import React, { useEffect, useRef, useState } from 'react';

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
 import { Modalize } from 'react-native-modalize';
import { LinePressable } from '../../components/LinePressable';
import theme from '../../styles/theme';
import { Portal } from 'react-native-portalize';
import { CourseProps, useApp } from '../../context/AppContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import handleBlobImage from '../../utils/handleBlobImage';
import { categorys } from '../../utils/handleGetCategoryIcon';
import handlePickImage from '../../utils/handlePickImage';

export function CreateCourse(){
  const [ about, setAbout ] = useState('')
  const [ owner, setOwner ] = useState('')
  const [ courseName, setCourseName ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ image, setImage] = useState('');

  const [ isEditing, setIsEditing ] = useState(false);
  const [ requestLoading, setRequestLoading] = useState(false);

  const route = useRoute()
  const data = route.params as CourseProps
  const modalizeRef = useRef<Modalize>(null);
  const navigation = useNavigation();
  const { handleEditCourse, handleDeleteCourse, handleAddCourse } = useApp()

  const onOpen = () => { modalizeRef.current?.open(); };
  function handleSelecCategory(category: string){
    setCategory(category)
    modalizeRef.current?.close();
  };
  async function handlePickImageFromGallery(){
    const result = await handlePickImage()
    setImage(result)
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
  async function handleCreateCourse(){
    const isValidate = await handleValidade()
    
    if(requestLoading)
      return

    if(isValidate){
      setRequestLoading(true)
      
      try {
        const imageUrl = await handleBlobImage(image)
        
        if(isEditing){
          const newCourse = {id: data.id, name: courseName,owner,category,about,image: imageUrl }
          console.log(newCourse)
          await api.put('/course', newCourse);
          handleEditCourse(newCourse)
        }else{
          const newCourse = {name: courseName,owner,category,about,image: imageUrl }
          await api.post('/course', newCourse);
          handleAddCourse(newCourse)
        }
        setCourseName('')
        setAbout('')
        setOwner('')
        setCategory('')
        setImage('')
        setIsEditing(false)
      } catch (error) {
        console.log(error)
        Alert.alert(
          'Algo de errado aconteceu, tente novamente', 
        )
      } finally {
        setRequestLoading(false)
        navigation.navigate('Success')
      }
    }
  }
  async function handleDelete(){
    Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover esse item?',
      [ 
        {text: 'Não'},
        {text: 'Sim', onPress: () => {
          handleDeleteCourse(data.id as string)
          navigation.navigate('Home')
        }}
      ]
    )
  }

  useEffect(() => {
    if(data != undefined){
      setIsEditing(true)
      setCourseName(data.name)
      setAbout(data.about)
      setOwner(data.owner)
      setCategory(data.category)
      setImage(data.image)
    }
  }, [data])

  return (
    <Container>
      <ViewCloseKeyboard  onPress={Keyboard.dismiss}>
        <>
          <Frame>
            <Header onPress={handlePickImageFromGallery}>
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
              autoCapitalize='words'
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
              title={isEditing? 'Editar curso': 'Cadastrar'}
              loading={requestLoading }
              onPress={handleCreateCourse}
            />
            {isEditing? 
              <Button 
                title="Excluir" color={theme.colors.exclude}
                onPress={handleDelete}
              />: null
            }
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
        </>
      </ViewCloseKeyboard>
    </Container>
  )
}