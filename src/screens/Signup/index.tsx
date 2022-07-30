import React, { useState } from "react";

import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Container, Form,Title, Wrapper } from "./styles";
import { Button } from "../../components/Button";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import HeroImage from "../../assets/loginHero.svg"

const ViewCloseKeyboard:any = TouchableWithoutFeedback

import { useApp } from "../../context/AppContext";

export function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const { handleSignup } = useApp() 

  return (
    <Wrapper>
      <ViewCloseKeyboard onPress={Keyboard.dismiss} style={{flex: 1}}>
          <Container>
            <HeroImage width={270} height={201} />
            <Title>Criar conta</Title>
            <Form>
              <Input
                iconName="user-check"
                placeholder="Seu nome"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={setName}
                value={name}
              />
              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
              />
              <InputPassword
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
            </Form>
            <Button
              title="Criar conta"
              onPress={() => handleSignup (name, email, password)}
            />
          </Container>
      </ViewCloseKeyboard>
    </Wrapper>
)}
