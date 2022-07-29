import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

import { api } from '../services/api';

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
  handleLogin: () => void
  handleLogout: () => void
}

interface AuthProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

function AppProvider({ children } : AuthProviderProps) {
  const [ courses, setCourses ] = useState<[CourseProps]>()
  const [ isUserLogged, setIsUserLogged ] = useState(false)

  function handleAddCourse(course: CourseProps){
    setCourses([...courses, course])
  }

  const handleLogin = () => setIsUserLogged(true)
  const handleLogout = () => setIsUserLogged(false)

  async function fetchCourses (){
    const response:any = await api.get('/course') as [CourseProps]
    setCourses(response.data)
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  return (
    <AppContext.Provider 
      value={{ 
        courses, handleAddCourse,
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