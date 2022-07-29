import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

import { Alert } from 'react-native';
import { api } from '../services/api';

import * as Yup from 'yup';

export interface CourseProps {
  id?: string
  name: string
  owner: string
  category: string
  about: string
  image: string
}

interface AppContextData {
  courses: [CourseProps] | undefined
  handleAddCourse: (data: CourseProps) => void
  isUserLogged: boolean
  handleLogin: (email: string, password: string) => void
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
        console.log(response.data.userName)
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
        courses, handleAddCourse,
        handleLogin, handleLogout, isUserLogged,
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