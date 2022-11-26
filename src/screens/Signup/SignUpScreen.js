import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../../store/context/AuthContext';
import { View } from 'react-native-ui-lib';
import SignUpForm from './forms/SignUpForm';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { signup } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSignUp = async () => {
    setIsLoading(true);
    const response = await signup(credentials);
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
      <SignUpForm
        onSubmit={handleSignUp}
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

export default SignUpScreen;
