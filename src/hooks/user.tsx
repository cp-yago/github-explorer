import React, {createContext, useState, useCallback, useContext} from 'react';
import {ToastAndroid} from 'react-native';
import api from '../services/api';

import AsyncStorage from '@react-native-community/async-storage';

export interface User {
  login: string | null;
  name: string | null;
  email: string | null;
  location: string | null;
  company: string | null;
  bio: string | null;
  avatar_url: string;
  followers_url: string | null;
  following_url: string | null;
  organizations_url: string | null;
  starred_url: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

interface Follower {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface UserContextData {
  user: User;
  followers: Follower[];
  searchUser(userLogin: string): void;
  signOut(): void;
  loadFollowers(): void;
  loadRepos(): void;
  repos: [];
  loadFollowing(): void;
  following: Follower[];
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>({} as User);
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [following, setFollowing] = useState<Follower[]>([]);
  const [repos, setRepos] = useState<[]>([]);

  const searchUser = useCallback(async (userLogin: string) => {
    try {
      const response = await api.get(`/users/${userLogin}`);

      const {
        login,
        name,
        email,
        location,
        company,
        bio,
        avatar_url,
        followers_url,
        following_url,
        organizations_url,
        starred_url,
        public_repos,
        public_gists,
        followers,
        following,
      } = response.data;

      const userData = {
        login,
        name,
        email,
        location,
        company,
        bio,
        avatar_url,
        followers_url,
        following_url,
        organizations_url,
        starred_url,
        public_repos,
        public_gists,
        followers,
        following,
      };

      await AsyncStorage.multiSet([
        ['@LubyHub:logged', 'true'],
        ['@LubyHub:user', JSON.stringify(userData)],
      ]);

      setUser(userData);
    } catch (err) {
      await AsyncStorage.setItem('@LubyHub:logged', 'false');
      ToastAndroid.show('Usuário não encontrado', ToastAndroid.LONG);
      throw new Error(err);
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@LubyHub:user');
    await AsyncStorage.setItem('@LubyHub:logged', 'false');
  }, []);

  const loadFollowers = useCallback(async () => {
    const response = await api.get(`users/${user.login}/followers`);
    setFollowers(response.data);
  }, [user.login]);

  const loadRepos = useCallback(async () => {
    const response = await api.get(`users/${user.login}/repos`);
    setRepos(response.data);
  }, [user.login]);

  const loadFollowing = useCallback(async () => {
    const response = await api.get(`users/${user.login}/following`);
    setFollowing(response.data);
  }, [user.login]);

  const value = React.useMemo(
    () => ({
      user,
      searchUser,
      signOut,
      loadFollowers,
      followers,
      loadRepos,
      repos,
      loadFollowing,
      following,
    }),
    [
      user,
      searchUser,
      signOut,
      loadFollowers,
      followers,
      loadRepos,
      repos,
      loadFollowing,
      following,
    ],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be within a ToolProvider.');
  }

  return context;
}

export {UserProvider, useUser};
