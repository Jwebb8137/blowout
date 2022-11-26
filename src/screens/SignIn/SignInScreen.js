import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../../store/context/AuthContext';
import { View } from 'react-native-ui-lib';
import SignInForm from './forms/SignInForm';

const SignInScreen = () => {
  const navigation = useNavigation();
  const { state, signin } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async () => {
    setIsLoading(true);
    const response = await signin(credentials);
    if (response) {
      navigation.navigate('Tabs');
    }
    setIsLoading(false);
  };

  return (
    <View paddingT-250 style={styles.rootContainer}>
      <ImageBackground
        source={require('../../assets/media/images/concert-fans.png')}
        style={styles.image}
      />
      <SignInForm
        onSubmit={handleSignIn}
        onFormValueChange={(target, value) =>
          setCredentials({ ...credentials, [target]: value })
        }
        isLoading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  rootContainer: {
    flex: 1,
  },
});

export default SignInScreen;
