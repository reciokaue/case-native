import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

import { Alert } from 'react-native';
import { api } from '../services/api';

import * as Yup from 'yup';

export interface CourseProps {
  id?: string
  name?: string
  owner?: string
  category?: string
  about?: string
  image?: string
}

interface AppContextData {
  courses: [CourseProps] | undefined
  handleAddCourse: (data: CourseProps) => void
  handleEditCourse: (data: CourseProps) => void
  handleDeleteCourse: (id: string) => void
  isUserLogged: boolean
  handleLogin: (email: string, password: string) => void
  handleSignup: (name: string, email: string, password: string) => void
  handleLogout: () => void
  userName: string
}

interface AuthProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

function AppProvider({ children } : AuthProviderProps) {
  const [ courses, setCourses ] = useState<[CourseProps]>()
  const [ isUserLogged, setIsUserLogged ] = useState(false)
  const [ userName, setUserName ] = useState('')

  function handleAddCourse(course: CourseProps){
    setCourses([...courses, course])
  }
  function handleEditCourse(course: CourseProps){
    const filtered = courses!.filter((item) =>  {
      return item.id != course.id
    })
    filtered.push(course)
    setCourses(filtered)
  }
  async function handleDeleteCourse(id: string){
    api.delete(`/course/${id}`);
    const filtered = courses!.filter((item) =>  {
      return item.id != id
    })
    setCourses(filtered)
  }

  async function handleLogin(email: string, password: string){
    const validate = async () => {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      });
      await schema.validate({ email, password });
    }
    const testUser = async () => {
      const response:any = await api.post('/login', {
        email,
        password
      });
      if(response.status == '200'){
        setUserName(response.data.userName)
        setIsUserLogged(true)
      }
    }
    const errorMessage = (error: any) => {
      if(error instanceof Yup.ValidationError){
        Alert.alert('Algo está errado', error.message);
        console.log(error)
      }else{
        console.log(error)

        Alert.alert(
          'Erro na autenticação', 
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
      return
    }

    try{
      await validate()
      await testUser()
    }catch(error){
      errorMessage(error)
    } 
  }
  async function handleSignup(name: string, email: string, password: string){
    const validate = async () => {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required('O nome é obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      });
      await schema.validate({name,  email, password});

    }
    const testUser = async () => {
      const response:any = await api.post('/user', { name, email, password});
      if(response.data.error){
        Alert.alert('O email já esta em uso!');
        return
      }

      if(response.status == '200'){
        setUserName(response.data.userName)
        setIsUserLogged(true)
      }
    }
    const errorMessage = (error: any) => {
      if(error instanceof Yup.ValidationError){
        Alert.alert('Algo está errado', error.message);
        console.log(error)
      }else{
        console.log(error)

        Alert.alert(
          'Erro na autenticação', 
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }

    try{
      await validate()
      await testUser()
    }catch(error){
      errorMessage(error)
    } 
  }

  const handleLogout = () => setIsUserLogged(false)

  
  useEffect(() => {
    async function fetchCourses (){
      const response:any = await api.get('/course') as [CourseProps]
      setCourses(response.data)
    }
    fetchCourses()
  }, [])

  return (
    <AppContext.Provider 
      value={{ 
        courses, handleAddCourse, handleEditCourse, handleDeleteCourse,
        handleLogin, handleLogout, isUserLogged, handleSignup,
        userName
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

function useApp(): AppContextData {
  const context = useContext(AppContext);
  return context;  
}
export { AppProvider, useApp };