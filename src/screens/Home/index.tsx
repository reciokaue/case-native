import React from 'react';

import { CourseCard } from '../../components/CourseCard';
import { Container, CourseList, Header, HelloUser, CourseCounter } from './styles'
import { useApp } from '../../context/AppContext';

export function Home(){
  const { courses, userName  } = useApp()

  return (
    <Container>
      <Header>
        <HelloUser>Olá, {userName}</HelloUser>
        <CourseCounter>Você tem {courses?.length} curso{courses?.length != 1 && 's'}</CourseCounter>
      </Header>

      {courses? 
        <CourseList
          data={courses}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <CourseCard 
              key={item.id}
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