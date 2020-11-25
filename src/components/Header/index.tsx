import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, HeaderName, GoBackButton, GoBackIcon} from './styles';

interface HeaderProps {
  name: string;
  metricValue: string;
}

const Header: React.FC<HeaderProps> = ({name, metricValue}: HeaderProps) => {
  const {goBack} = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <GoBackButton onPress={handleGoBack}>
        <GoBackIcon name="arrow-left" size={30} color="#FFFFFF" />
      </GoBackButton>
      <HeaderName>{`${metricValue} ${name}`}</HeaderName>
    </Container>
  );
};

export default Header;
