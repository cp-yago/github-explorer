import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 180px;
  justify-content: space-between;
  padding: 20px 20px;
  border: 2px solid #1f1f1f;
`;

export const InfoContainer = styled.View`
  margin-top: 15px;
`;

export const RepositoryName = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const RepositoryDescription = styled.Text`
  font-size: 15px;
  color: #ffffff;
  margin-top: 10px;
`;

export const StatsContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const StarContainer = styled.View`
  width: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StarsCounter = styled.Text`
  font-size: 15px;
  color: #ffffff;
`;

export const PermissionContainer = styled.View`
  width: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
