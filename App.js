/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen';

import Clock from './components/clock';
import JoinGroup from './components/join';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{backgroundColor: '#1e1e1e', height: '100%'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <KeyboardAvoidingView behavior="position">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{backgroundColor: '#1e1e1e'}}>
            <Clock
              style={{
                textAlign: 'center',
                fontSize: 128,
                backgroundColor: '#1e1e1e',
                color: 'white',
                marginTop: 200,
                marginBottom: 100,
              }}
            />
            <JoinGroup
              style={{
                backgroundColor: '#1e1e1e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
