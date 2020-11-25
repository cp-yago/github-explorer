import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  InfoContainer,
  RepositoryName,
  RepositoryDescription,
  StatsContainer,
  StarContainer,
  StarsCounter,
  PermissionContainer,
} from './styles';

interface RepositoryProps {
  name: string;
  description: string;
  stars: string;
}

const RepositoryComponent: React.FC<RepositoryProps> = ({
  name,
  description,
  stars,
}: RepositoryProps) => {
  return (
    <Container>
      <InfoContainer>
        <RepositoryName>{name}</RepositoryName>
        <RepositoryDescription>{description}</RepositoryDescription>
      </InfoContainer>
      <StatsContainer>
        <StarContainer>
          <Icon name="star" size={15} color="#FFCE00" />
          <StarsCounter>{stars}</StarsCounter>
        </StarContainer>
        <PermissionContainer>
          <Icon name="lock" size={15} color="#63BF1F" />
          <Icon name="unlock" size={15} color="#CC042A" />
        </PermissionContainer>
      </StatsContainer>
    </Container>
  );
};

export default RepositoryComponent;
