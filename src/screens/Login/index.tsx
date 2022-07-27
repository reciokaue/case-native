import React, { useState } from "react";

import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

import { Container, ForgotPassword, Form, Frame, Heading, SubTitle, Title } from "./styles";

import theme from "../../styles/theme";
import { Button } from "../../components/Button";

import HeroImage from "../../assets/loginHero.svg"
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView behavior="position" enabled>
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
          <ForgotPassword>Esqueci minha senha</ForgotPassword>
        </Form>

          <Button
            title="Login"
            loading={false}
            // onPress={handleSignIn}
          />
        </Frame>
        </KeyboardAvoidingView>
        <Button
          title="Criar conta"
          color={theme.colors.background_secondary}
          loading={false}
          light
          // onPress={handleNewAccount}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
