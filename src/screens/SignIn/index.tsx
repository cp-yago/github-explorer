/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useUser} from '../../hooks/user';
import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import GitHubLogo from '../../assets/images/GitHub-Mark-Light-120px-plus.png';

import {
  Container,
  SignInContainer,
  Logo,
  FormContainer,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const {searchUser} = useUser();

  const {navigate} = useNavigation();

  const schema = Yup.object().shape({
    user: Yup.string().required('Campo obrigatório'),
  });

  const handleSignIn = useCallback(
    async (value) => {
      try {
        await searchUser(`${value.user}`);
        navigate('Home');
      } catch (err) {
        console.error('ERR: ', err);
      }
    },
    [navigate, searchUser],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Container>
        <SignInContainer>
          <Logo source={GitHubLogo} />

          <Formik
            initialValues={{
              user: '',
            }}
            validationSchema={schema}
            onSubmit={handleSignIn}>
            {({values, handleChange, handleSubmit}) => {
              return (
                <FormContainer>
                  <Input
                    placeholder="Usuário"
                    value={values.user}
                    onChangeText={handleChange('user')}
                  />
                  <SubmitButton onPress={handleSubmit}>
                    <SubmitButtonText>ENTRAR</SubmitButtonText>
                  </SubmitButton>
                </FormContainer>
              );
            }}
          </Formik>
        </SignInContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
