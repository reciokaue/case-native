import React, { useEffect, useState } from 'react';

import { CourseCard } from '../../components/CourseCard';
import { Container, CourseList, Header, HelloUser, CourseCounter } from './styles'
import { useApp } from '../../context/AppContext';

export function Home(){
  const [ data, setData ] = useState([])
  const { courses, userName } = useApp()

  useEffect(() => {
    setData(courses)
  }, [courses])

  return (
    <Container>
      <Header>
        <HelloUser>Olá, {userName}</HelloUser>
        <CourseCounter>Você tem {data?.length} curso{data?.length != 1 && 's'}</CourseCounter>
      </Header>

      {data? 
        <CourseList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <CourseCard 
              key={item.id}
              id={item.id}
              name={item.name}
              owner={item.owner}
              category={item.category}
              about={item.about}
              image={item.image}
            />
          }
        />
      :null}
    </Container>
  )
}