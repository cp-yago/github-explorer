import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 68px;
  background-color: #1f1f1f;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 30px;
`;

export const GoBackIcon = styled(Icon)``;

export const HeaderName = styled.Text`
  font-size: 17px;
  color: #fff;
`;
