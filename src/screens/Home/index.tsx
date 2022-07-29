import React from 'react';
import { CourseCard } from '../../components/CourseCard';
import { useApp } from '../../context/AppContext';

import { Container, CourseList } from './styles'

export function Home(){
  const { courses } = useApp()

  return (
    <Container>
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