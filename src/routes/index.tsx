import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Followers from '../screens/Followers';
import FollowerDetail from '../screens/FollowerDetail';
import Repositories from '../screens/Repositories';
import Following from '../screens/Following';

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Home" component={Home} />
        <Screen name="Followers" component={Followers} />
        <Screen name="FollowerDetail" component={FollowerDetail} />
        <Screen name="Repositories" component={Repositories} />
        <Screen name="Following" component={Following} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
