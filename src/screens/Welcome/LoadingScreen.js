import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useContext } from 'react';
import { View } from 'react-native-ui-lib';
import { Context as AuthContext } from '../../store/context/AuthContext';

const LoadingScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    const handleSignIn = async () => {
      const token = await tryLocalSignin();
      if (token) {
        navigation.navigate('Tabs');
      } else {
        navigation.navigate('Welcome');
      }
    };
    handleSignIn();
  }, []);

  return <View flex bg-black />;
};

export default LoadingScreen;
