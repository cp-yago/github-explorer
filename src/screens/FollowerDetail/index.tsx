import React, {useCallback, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import api from '../../services/api';
import {User} from '../../hooks/user';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  TopHeader,
  UserLogin,
  UserAvatar,
  SignOutButton,
  SignOutButtonText,
  PersonalDataContainer,
  UserName,
  UserEmail,
  UserLocation,
  StatsContainer,
  StatCard,
  StatNumber,
  StatName,
  BioContainer,
  Title,
  BioText,
} from './styles';

interface Params {
  userName: string;
}

const FollowerDetail: React.FC = () => {
  const route = useRoute();
  const routeParam = route.params as Params;
  const [user, setUser] = useState({} as User);

  const loadFollowerData = useCallback(async () => {
    const response = await api.get(`/users/${routeParam.userName}`);
    setUser(response.data);
  }, [routeParam.userName]);

  useEffect(() => {
    loadFollowerData();
  }, [loadFollowerData]);

  return (
    <Container>
      <Header>
        <TopHeader>
          <UserLogin>{`#${user.login}`}</UserLogin>

          <SignOutButton>
            <SignOutButtonText>Salvar</SignOutButtonText>
            <Icon name="log-out" size={20} color="#5CBC29" />
          </SignOutButton>
        </TopHeader>

        <UserAvatar source={{uri: `${user.avatar_url}`}} />
      </Header>

      <PersonalDataContainer>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
        <UserLocation>{user.location}</UserLocation>
      </PersonalDataContainer>

      <StatsContainer>
        <StatCard>
          <StatNumber>{user.followers}</StatNumber>
          <StatName>Seguidores</StatName>
        </StatCard>
        <StatCard>
          <StatNumber>{user.following}</StatNumber>
          <StatName>Seguindo</StatName>
        </StatCard>
        <StatCard>
          <StatNumber>10</StatNumber>
          <StatName>{user.public_repos}</StatName>
        </StatCard>
      </StatsContainer>

      <BioContainer>
        <Title>Bio</Title>
        <BioText>{user.bio}</BioText>
      </BioContainer>
    </Container>
  );
};

export default FollowerDetail;
