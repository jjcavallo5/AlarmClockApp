/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/**
 * VSCode Dark Theme Color Palette:
 * https://github.com/tcd/dark-plus-syntax/blob/master/src/palettes/DarkPlusPalette.ts
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';

import AddAlarmScreen from './screens/addAlarm';
import Homescreen from './screens/homescreen';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import SettingsScreen from './screens/settings';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="AddAlarm" component={AddAlarmScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
