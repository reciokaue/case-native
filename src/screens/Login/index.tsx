import React, { useState } from "react";

import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Container, ForgotPassword, Form, Frame, Heading, SubTitle, Title } from "./styles";
import { Button } from "../../components/Button";
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { api } from "../../services/api";

import theme from "../../styles/theme";
import HeroImage from "../../assets/loginHero.svg"
import { useNavigation } from "@react-navigation/native";

const ViewCloseKeyboard:any = TouchableWithoutFeedback
const ViewUpperKeyboard:any = KeyboardAvoidingView

import * as Yup from 'yup';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleSignIn(){
    try{
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      });
      await schema.validate({ email, password });

      const response:any = await api.post('/login', {
        email,
        password
      });
      if(response.status == '200'){
        navigation.navigate("PasswordChange")
      }
    }catch(error){
      if(error instanceof Yup.ValidationError){
        Alert.alert('Opa', error.message);
      }else{
        Alert.alert(
          'Erro na autenticação', 
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }  
  }

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
          <ForgotPassword>Esqueci minha senha</ForgotPassword>
        </Form>
          <Button
            title="Login"
            onPress={handleSignIn}
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
