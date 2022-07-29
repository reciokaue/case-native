import React, { useState } from "react";

import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Container, Form, Frame, Heading, SubTitle, Title } from "./styles";
import { Button } from "../../components/Button";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import theme from "../../styles/theme";
import HeroImage from "../../assets/loginHero.svg"

const ViewCloseKeyboard:any = TouchableWithoutFeedback
const ViewUpperKeyboard:any = KeyboardAvoidingView

import { useApp } from "../../context/AppContext";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useApp() 

  return (
    <ViewCloseKeyboard onPress={Keyboard.dismiss}>
      <Container>
        <ViewUpperKeyboard behavior="position" enabled>
        <Frame>
        <Heading>
          <Title>
            Seja bem vindo
          </Title>
          <SubTitle>
            Faça seu login para começar {`\n`}
            uma experiência incrível.
          </SubTitle>
        </Heading>
          <HeroImage width={240} height={201} />
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
            onPress={() => handleLogin (email, password)}
          />
        </Frame>
        </ViewUpperKeyboard>
        <Button
          title="Criar conta"
          color={theme.colors.background_secondary}
          light
          // onPress={handleNewAccount}
        />
      </Container>
    </ViewCloseKeyboard>
  );
}
