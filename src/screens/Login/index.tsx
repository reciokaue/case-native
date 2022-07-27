import React from 'react';

import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';

import { Container } from './styles'

export function Login(){
  return (
    <Container>
      <Input iconName='user'/>
      <InputPassword iconName='lock'/>
    </Container>
  )
}