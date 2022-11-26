import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Text, View } from 'react-native-ui-lib';
import { FontAwesome5 } from '@expo/vector-icons';
import { Context as AuthContext } from '../../store/context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  const navigation = useNavigation();
  const chevronRight = (
    <FontAwesome5 name="chevron-right" size={24} color={Colors.lightGray} />
  );
  const settings = [
    {
      title: 'Notifications',
      icon: 'bell',
      action: () => console.log('Notifications'),
    },
    {
      title: 'Privacy',
      icon: 'lock',
      action: () => console.log('Privacy'),
    },
    {
      title: 'Settings',
      icon: 'cog',
      action: () => console.log('Settings'),
    },
    {
      title: 'Support',
      icon: 'question-circle',
      action: () => console.log('Support'),
    },
    {
      title: 'Logout',
      icon: 'sign-out-alt',
      action: () => {
        signout();
      },
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: '#000',
      },
      title: 'Account Settings',
      headerTitleStyle: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
        letterSpacing: 1,
      },
    });
  }, [navigation]);

  return (
    <View useSafeArea style={styles.rootContainer}>
      <View row marginT-20 paddingH-15>
        <Image
          source={require('../../assets/media/images/profile-image.png')}
          style={styles.profileAvatar}
        />
        <View flex row spread centerV>
          <View marginL-20>
            <Text h5 white>
              Joshua Webb
            </Text>
            <Text p lightGray>
              Performer
            </Text>
          </View>
          {chevronRight}
        </View>
      </View>
      <View marginT-20 paddingL-15>
        {settings.map((setting, index) => (
          <TouchableOpacity key={index} onPress={setting.action}>
            <View
              row
              spread
              centerV
              paddingH-15
              paddingV-15
              style={styles.setting}
            >
              <View row centerV>
                <FontAwesome5
                  name={setting.icon}
                  size={32}
                  color="#FFF"
                  style={styles.settingIcon}
                />
                <Text h5 lightGray marginL-20>
                  {setting.title}
                </Text>
              </View>
              {chevronRight}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  profileAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
