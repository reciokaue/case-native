import React, { useState } from "react";

import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Container, Form, Title, Wrapper } from "./styles";
import { Button } from "../../components/Button";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import theme from "../../styles/theme";
import HeroImage from "../../assets/loginHero.svg"

const ViewCloseKeyboard:any = TouchableWithoutFeedback

import { useApp } from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { handleLogin } = useApp() 
  const navigation = useNavigation()

  async function handleLoginAccount(){
    handleLogin(email, password)
  }

  const goToCreateAccount = () => {
    navigation.navigate('Signup')
  }

  return (
    <Wrapper>
      <ViewCloseKeyboard onPress={Keyboard.dismiss} style={{flex: 1}}>
        <Container>
          <HeroImage width={270} height={201} />
          <Title>Login</Title>
          <Form>
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
            title="Login"
            onPress={handleLoginAccount}
            />
          <Button
            title="Criar conta"
            color={theme.colors.background_secondary}
            light
            onPress={goToCreateAccount}
          />
        </Container>
      </ViewCloseKeyboard>
    </Wrapper>
  );
}
