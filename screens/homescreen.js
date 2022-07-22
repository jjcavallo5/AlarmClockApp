import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Clock from '../components/clock';
import JoinGroup from '../components/join';
import colors from '../assets/colors';

const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text
              style={styles.addAlarmButtonText}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              +
            </Text>
            <Clock style={styles.clock} />
            <JoinGroup style={styles.join} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    height: '100%',
  },
  addAlarmButtonText: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
    color: 'white',
    opacity: 0.7,
  },
  clock: {
    textAlign: 'center',
    fontSize: 128,
    backgroundColor: colors.darkGray,
    color: 'white',
    paddingTop: 200,
    paddingBottom: 100,
  },
  join: {
    backgroundColor: colors.darkGray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Homescreen;
