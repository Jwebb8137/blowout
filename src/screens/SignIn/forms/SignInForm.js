import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import Button from '../../../components/buttons/button';
import Input from '../../../components/inputs/input';

const SignInForm = ({ onSubmit, onFormValueChange, isLoading }) => {
  const navigation = useNavigation();

  return (
    <View centerH paddingT-23 paddingH-20 style={styles.signInContainer}>
      <Text h3 white>
        Welcome Back!
      </Text>
      <Text p marginB-15 bold white style={styles.subTitle}>
        Sign into your account below
      </Text>
      <Input
        label="Email"
        placeholder="Username"
        onChange={(value) => onFormValueChange('email', value)}
      />
      <View marginV-6 />
      <Input
        label="Password"
        placeholder="Password"
        secureTextEntry
        onChange={(value) => onFormValueChange('password', value)}
      />
      <Text marginT-5 marginB-20 p bold white style={styles.forgotPassword}>
        Forgot Password?
      </Text>
      <Button label="Log In" action={onSubmit} loading={isLoading} />
      <View row center marginT-10>
        <Text p bold marginR-5 lightGray style={styles.noAccount}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
          <Text p bold white style={styles.signUpText}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View marginT-28 row>
        <TouchableOpacity style={styles.authButton}>
          <Image
            source={require('../../../assets/media/icons/google.png')}
            style={styles.authImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.authButton}>
          <Image
            source={require('../../../assets/media/icons/facebook.png')}
            style={styles.authImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SignInForm;
