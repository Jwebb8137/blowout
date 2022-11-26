import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native-ui-lib';
import AccountScreen from '../screens/Account/AccountScreen';

const Tab = createBottomTabNavigator();

const navigatorScreenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#000',
    borderTopColor: 'transparent',
    height: 85,
    paddingTop: 5,
  },
  tabBarActiveTintColor: '#FFF',
  tabBarLabelStyle: {
    fontSize: 14,
    top: 4,
    fontFamily: 'Roboto-Regular',
  },
  headerShadowVisible: false,
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="star" color={color} size={32} />
          ),
          tabBarLabel: ({ focused, color }) => {
            return focused ? (
              <Text
                style={{
                  color: color,
                  top: 4,
                }}
              >
                Featured
              </Text>
            ) : (
              ''
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" color={color} size={32} />
          ),
          tabBarLabel: ({ focused, color }) => {
            return focused ? (
              <Text
                style={{
                  color: color,
                  top: 4,
                }}
              >
                Calendar
              </Text>
            ) : (
              ''
            );
          },
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="ticket" color={color} size={32} />
          ),
          tabBarLabel: ({ focused, color }) => {
            return focused ? (
              <Text
                style={{
                  color: color,
                  top: 4,
                }}
              >
                Tickets
              </Text>
            ) : (
              ''
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={32} />
          ),
          tabBarLabel: ({ focused, color }) => {
            return focused ? (
              <Text
                style={{
                  color: color,
                  top: 4,
                }}
              >
                Account
              </Text>
            ) : (
              ''
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
