import React, { useEffect, useState } from 'react';

import { CourseCard } from '../../components/CourseCard';
import { Container, CourseList, Header, HelloUser, CourseCounter, Line } from './styles'
import { CourseProps, useApp } from '../../context/AppContext';
import { SearchBar } from '../../components/SearchBar';
import { View } from 'react-native';

export function Home(){
  const [ data, setData ] = useState<[CourseProps]>()
  const { courses, userName } = useApp()
  const [ searchText, setSearchText ] = useState('')

  function handleFilterData() {
    if(searchText == ''){
      setData(courses)
      return
    }
    const coursesFiltred = courses.filter((item: CourseProps) => 
      item.name.toLowerCase().includes(searchText.toLowerCase()) 
    )
    setData(coursesFiltred)
    if(!coursesFiltred){
      setData(courses)
    }
  }

  useEffect(() => {
    setData(courses)
  }, [courses])

  return (
    <Container>
      <Header>
        <Line>
          <HelloUser>Olá, {userName}</HelloUser>
          <CourseCounter>Você tem {data?.length} curso{data?.length != 1 && 's'}</CourseCounter>
        </Line>
        <SearchBar
           placeholder="Qual curso voce deseja?"
           onChangeText={setSearchText}
           value={searchText}
           returnKeyType="search"
           onSubmitEditing={handleFilterData}
           onSearchButtonPress={handleFilterData}
        />
      </Header>

      {data? 
        <CourseList
          data={data}
          ListHeaderComponent={<View style={{height: 25}}/>}
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