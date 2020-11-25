import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  FollowerContainer,
  FollowerAvatar,
  FollowerUser,
  GoToProfileButton,
} from './styles';

interface FollowerProps {
  user: string | null;
  avatar_url: string;
}

const FollowerComponent: React.FC<FollowerProps> = ({
  user,
  avatar_url,
}: FollowerProps) => {
  const {navigate} = useNavigation();

  const handleGoToFollowerDatail = useCallback(
    (userName) => {
      navigate('FollowerDetail', {userName});
    },
    [navigate],
  );

  return (
    <Container onPress={() => handleGoToFollowerDatail(user)}>
      <FollowerContainer>
        <FollowerAvatar source={{uri: `${avatar_url}`}} />
        <FollowerUser>{`#${user}`}</FollowerUser>
      </FollowerContainer>
      <GoToProfileButton>
        <Icon name="arrow-right" size={25} color="#fff" />
      </GoToProfileButton>
    </Container>
  );
};

export default FollowerComponent;
