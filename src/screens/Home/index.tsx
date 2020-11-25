import React, {useCallback, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {useUser} from '../../hooks/user';

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

const Home: React.FC = () => {
  const {user, signOut} = useUser();
  const {navigate, goBack} = useNavigation();

  const checkUser = useCallback(async () => {
    const logged = await AsyncStorage.getItem('@LubyHub:logged');
    const userData = await AsyncStorage.getItem('@LubyHub:user');
    console.log('CHECK LOGGED: ', logged);
    console.log('CHECK USER: ', userData);

    if (!userData) {
      navigate('SignIn');
      console.log('chegou aqui hein');
    }
  }, [navigate]);

  const handleSignOut = useCallback(() => {
    signOut();
    goBack();
  }, [signOut, goBack]);

  const handleNavigate = useCallback(
    (screen: string) => {
      navigate(screen);
    },
    [navigate],
  );

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <Container>
      <Header>
        <TopHeader>
          <UserLogin>{`#${user.login}`}</UserLogin>

          <SignOutButton onPress={handleSignOut}>
            <SignOutButtonText>Sair</SignOutButtonText>
            <Icon name="log-out" size={20} color="#D03434" />
          </SignOutButton>
        </TopHeader>

        <UserAvatar source={{uri: user.avatar_url}} />
      </Header>

      <PersonalDataContainer>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
        <UserLocation>{user.location}</UserLocation>
      </PersonalDataContainer>

      <StatsContainer>
        <StatCard onPress={() => handleNavigate('Followers')}>
          <StatNumber>{user.followers}</StatNumber>
          <StatName>Seguidores</StatName>
        </StatCard>
        <StatCard onPress={() => handleNavigate('Following')}>
          <StatNumber>{user.following}</StatNumber>
          <StatName>Seguindo</StatName>
        </StatCard>
        <StatCard onPress={() => handleNavigate('Repositories')}>
          <StatNumber>{user.public_repos}</StatNumber>
          <StatName>Repos</StatName>
        </StatCard>
      </StatsContainer>

      <BioContainer>
        <Title>Bio</Title>
        <BioText>{user.bio}</BioText>
      </BioContainer>
    </Container>
  );
};

export default Home;
