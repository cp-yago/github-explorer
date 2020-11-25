import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useUser} from '../../hooks/user';
import Header from '../../components/Header';
import FollowerComponent from '../../components/FollowerComponent';

import {Container} from './styles';

const Following: React.FC = () => {
  const {loadFollowing, following} = useUser();

  useEffect(() => {
    loadFollowing();
  }, []);

  return (
    <Container>
      <Header name="Seguindo" metricValue={`${following.length}`} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}>
        {following.map((follower) => {
          return (
            <FollowerComponent
              key={follower.id}
              user={follower.login}
              avatar_url={follower.avatar_url}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Following;
