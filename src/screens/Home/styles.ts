import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #292929;
`;

export const Header = styled.View`
  width: 100%;
  height: 150px;
  background-color: #1f1f1f;
  align-items: center;
  /* justify-content: space-around; */
`;

export const TopHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const UserLogin = styled.Text`
  font-size: 17px;
  color: #ffffff;
`;

export const UserAvatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-top: 10px;
`;

export const SignOutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const SignOutButtonText = styled.Text`
  font-size: 17px;
  color: #ffffff;
  padding: 0 10px;
`;

export const PersonalDataContainer = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  padding: 0 20px;
`;

export const UserName = styled.Text`
  font-size: 26px;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const UserEmail = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

export const UserLocation = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: #5252525d;
`;

export const StatCard = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const StatNumber = styled.Text`
  font-size: 40px;
  color: #ffffff;
`;

export const StatName = styled.Text`
  font-size: 17px;
  color: #ffffff;
`;

export const BioContainer = styled.View`
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 15px;
`;

export const BioText = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;
