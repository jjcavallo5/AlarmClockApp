import {NativeModules} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
const {AlarmModule} = NativeModules;
import notificationJson from '../backend/notification.json';

export function configureNotifications() {
  PushNotification.createChannel(
    {
      channelId: 'ALARM-CHANNEL',
      channelName: 'My channel',
      channelDescription: 'A channel to categorise your notifications',
      playSound: false,
      soundName: 'default',
      importance: Importance.HIGH,
      vibrate: true,
    },
    created => console.log(`createChannel returned '${created}'`),
  );

  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);

      //notification.finish(PushNotificationIOS.FetchResult.NoData);
      if (notification.action == 'Dismiss' || notification.action == 'Snooze') {
        AlarmModule.endAlarmEvent('test', 'test', message => {
          console.log(message);
        });
      }

      if (notification.action == 'Snooze') {
        let newAlarmTime = new Date(Date.now() + 7 * 60 * 1000);
        let time = newAlarmTime.getTime();
        AlarmModule.createAlarmEvent('test', time.toString(), message => {
          PushNotification.localNotificationSchedule({
            ...notificationJson,
            date: newAlarmTime,
          });
          console.log(message);
        });
      }
    },

    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },

    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,

    requestPermissions: true,
  });
}
