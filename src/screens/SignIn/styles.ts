import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #292929;
  justify-content: center;
`;

export const SignInContainer = styled.View`
  height: 40%;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const FormContainer = styled.View`
  width: 90%;
  height: 45%;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: #ffce00;
`;

export const SubmitButtonText = styled.Text`
  font-size: 20px;
  color: #030202;
`;
