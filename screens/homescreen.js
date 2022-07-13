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
  TouchableOpacity,
} from 'react-native';

import Clock from '../components/clock';
import JoinGroup from '../components/join';

const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#1e1e1e', height: '100%'}}>
      <KeyboardAvoidingView behavior="position">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{backgroundColor: '#1e1e1e'}}>
            <Text
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 60,
              }}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              +
            </Text>
            <Clock
              style={{
                textAlign: 'center',
                fontSize: 128,
                backgroundColor: '#1e1e1e',
                color: 'white',
                paddingTop: 200,
                paddingBottom: 100,
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

export default Homescreen;
