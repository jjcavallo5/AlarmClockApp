import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors';

import PageHeader from '../components/pageHeader';

const {AlarmModule} = NativeModules;

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import notificationJson from '../backend/notification.json';

const ALARM_TIME_TEST = new Date(Date.now() + 10000);

const AddAlarmScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader text={'Add Alarm'} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          let time = ALARM_TIME_TEST.getTime();
          AlarmModule.createAlarmEvent('test', time.toString(), message => {
            PushNotification.localNotificationSchedule({
              ...notificationJson,
              date: ALARM_TIME_TEST,
            });
            console.log(message);
          });
        }}>
        <Text style={{color: 'black'}}>Schedule Test</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          AlarmModule.endAlarmEvent('test', 'test', message => {
            console.log(message);
          });
        }}>
        <Text style={{color: 'black'}}>Stop</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 20,
  },
});

export default AddAlarmScreen;
