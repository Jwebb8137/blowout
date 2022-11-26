import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Context as AuthContext } from '../../store/context/AuthContext';
import { View, Text } from 'react-native-ui-lib';
import Button from '../../components/buttons/button';
import Input from '../../components/inputs/input';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { state, signup } = useContext(AuthContext);
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
      <View centerH paddingT-23 paddingH-20 style={styles.signInContainer}>
        <Text h3 white>
          Get Started Now!
        </Text>
        <Text p marginB-15 bold lightGray style={styles.subTitle}>
          Enter your details below
        </Text>
        <Input
          label="Email"
          placeholder="Email Address"
          onChange={(value) => setCredentials({ ...credentials, email: value })}
        />
        <View marginV-6 />
        <Input
          label="Password"
          placeholder="New Password"
          secureTextEntry
          onChange={(value) =>
            setCredentials({ ...credentials, password: value })
          }
        />
        <View marginV-12 />
        <Button
          label="Create Account"
          action={handleSignUp}
          loading={isLoading}
        />
        <View row center marginT-10>
          <Text p bold marginR-5 lightGray style={styles.noAccount}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
            <Text p bold white style={styles.signUpText}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View marginT-28 row>
          <TouchableOpacity style={styles.authButton}>
            <Image
              source={require('../../assets/media/icons/google.png')}
              style={styles.authImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.authButton}>
            <Image
              source={require('../../assets/media/icons/facebook.png')}
              style={styles.authImage}
            />
          </TouchableOpacity>
        </View>
      </View>
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
  subTitle: {},
  signInContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  authButton: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    opacity: 0.8,
  },
  authImage: {
    height: 32,
    width: 32,
  },
});

export default SignUpScreen;
