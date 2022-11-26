import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BackButton from '../components/buttons/backButton';
import { Context as AuthContext } from '../store/context/AuthContext';
import FlashMessage from 'react-native-flash-message';

// screens
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import SignInScreen from '../screens/SignIn/SignInScreen';
import EventScreen from '../screens/Event/EventScreen';
import TicketScreen from '../screens/Ticket/TicketScreen';
import CreateEvent from '../screens/CreateEvent/createEvent';
import SignUpScreen from '../screens/Signup/SignUpScreen';

// tab navigators
import TabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const MainStack = () => {
  const { state } = useContext(AuthContext);
  const authenticated = state.token;
  const showHeaderOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: '#000',
      shadowColor: 'transparent',
      elevation: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      fontSize: 20,
      letterSpacing: 1,
    },
    headerBackTitleVisible: false,
    headerBackImage: () => <BackButton />,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          backgroundColor: '#000',
        }}
      >
        {authenticated ? (
          <Stack.Group>
            <Stack.Screen name="Tabs" component={TabNavigator} />
            <Stack.Screen
              name="Create Event"
              component={CreateEvent}
              options={showHeaderOptions}
            />
            <Stack.Screen name="Event" component={EventScreen} />
            <Stack.Screen name="Ticket" component={TicketScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Sign In" component={SignInScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default MainStack;
