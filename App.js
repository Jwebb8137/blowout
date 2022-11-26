import React, { useEffect, useContext } from 'react';
import { LogBox, StatusBar } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import './src/styles/colors/colorStyles';
import { initializePushNotifications } from './src/utils/notifications/notifications';
import { Provider as AuthProvider } from './src/store/context/AuthContext';

require('react-native-ui-lib/config').setConfig({ appScheme: 'default' });

StatusBar.setBarStyle('light-content');

LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
]);

const App = () => {
  useEffect(() => {
    initializePushNotifications();
  }, []);

  const [fontsLoaded] = useFonts({
    'Saira-Stencil-One': require('./src/assets/fonts/SairaStencilOne-Regular.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <MainStack />
    </AuthProvider>
  );
};

export default App;
