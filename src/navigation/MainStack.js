import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// screens
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import SignInScreen from "../screens/SignIn/SignInScreen";
import EventScreen from "../screens/Event/EventScreen";
import TicketScreen from "../screens/Ticket/TicketScreen";

// tab navigators
import TabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          backgroundColor: "#000",
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Event" component={EventScreen} />
        <Stack.Screen name="Ticket" component={TicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
