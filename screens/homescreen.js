import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';

import Clock from '../components/clock';
import JoinGroup from '../components/join';
import colors from '../assets/colors';
import {getCurrentUser} from '../backend/authentication';

const Homescreen = ({navigation}) => {
  const handlePlus = () => {
    if (getCurrentUser() == null) navigation.navigate('Login');
    else navigation.navigate('AddAlarm');
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TouchableOpacity
              style={styles.settingsContainer}
              onPress={handleSettingsPress}>
              <Image
                source={require('../assets/settingsIcon.png')}
                style={styles.settings}
              />
            </TouchableOpacity>
            <Text style={styles.addAlarmButtonText} onPress={handlePlus}>
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
  settingsContainer: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 1,
  },
  settings: {
    height: 50,
    width: 50,
    opacity: 0.7,
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
