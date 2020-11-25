import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useUser} from '../../hooks/user';
import Header from '../../components/Header';
import FollowerComponent from '../../components/FollowerComponent';

import {Container} from './styles';

const Followers: React.FC = () => {
  const {loadFollowers, followers} = useUser();

  useEffect(() => {
    loadFollowers();
  }, []);

  return (
    <Container>
      <Header
        name={followers.length > 1 ? 'Seguidores' : 'Seguidor'}
        metricValue={`${followers.length}`}
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}>
        {followers.map((follower) => {
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

export default Followers;
