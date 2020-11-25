import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useUser} from '../../hooks/user';

import Header from '../../components/Header';
import RepositoryComponent from '../../components/RepositoryComponent';

import {Container} from './styles';

const Repositories: React.FC = () => {
  const {loadRepos, repos} = useUser();

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <Container>
      <Header name="Repositorios" metricValue={`${repos.length}`} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}>
        {repos.map((repo: any) => {
          return (
            <RepositoryComponent
              key={repo.id}
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Repositories;
