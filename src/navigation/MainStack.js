import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// screens
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import SignInScreen from "../screens/SignIn/SignInScreen";
import EventScreen from "../screens/Event/EventScreen";
import TicketScreen from "../screens/Ticket/TicketScreen";
import CreateEvent from "../screens/CreateEvent/createEvent";

// tab navigators
import TabNavigator from "./BottomTabNavigator";
import BackButton from "../components/buttons/backButton";

const Stack = createStackNavigator();

const MainStack = () => {
  const showHeaderOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: "#000",
      shadowColor: "transparent",
      elevation: 0,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "Roboto-Medium",
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
          backgroundColor: "#000",
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen
          name="Create Event"
          component={CreateEvent}
          options={showHeaderOptions}
        />
        <Stack.Screen name="Event" component={EventScreen} />
        <Stack.Screen name="Ticket" component={TicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
