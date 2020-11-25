import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 130px;
  border: 1px solid #1f1f1f;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const FollowerContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FollowerAvatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
`;

export const FollowerUser = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 18px;
`;

export const GoToProfileButton = styled.TouchableOpacity``;
