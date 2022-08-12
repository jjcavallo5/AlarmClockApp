import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import colors from '../assets/colors';
import DateTimePicker from '@react-native-community/datetimepicker';

import PageHeader from '../components/pageHeader';

const {AlarmModule} = NativeModules;

import PushNotification from 'react-native-push-notification';
import notificationJson from '../backend/notification.json';
import AlarmComponent from '../components/alarm';
import RNDateTimePicker from '@react-native-community/datetimepicker';

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const AddAlarmScreen = ({navigation}) => {
  const [alarmList, setAlarmList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [showPicker, setShowPicker] = useState(false);
  const scheduleAlarm = (UID, timeToFire) => {
    let time = timeToFire.getTime();
    AlarmModule.createAlarmEvent(UID, time.toString(), message => {
      PushNotification.localNotificationSchedule({
        ...notificationJson,
        date: timeToFire,
        id: UID,
      });
      console.log(message);
    });
  };

  const createAlarm = () => {
    let UID = alarmList.length;
    //createAlarm(something, date)
    let alarmObject = {
      UID: UID,
      fireTime: formatAMPM(date),
      active: true,
    };

    setAlarmList([...alarmList, alarmObject]);
    setModalVisible(false);
  };

  const activateAlarmCallback = UID => {
    console.log(UID);
    console.log(alarmList);
    setAlarmList(current =>
      current.map(alarm => {
        if (alarm.UID == UID) {
          console.log(alarm.active);
          return {...alarm, active: !alarm.active};
        }
        return alarm;
      }),
    );
  };

  return (
    <View style={styles.container}>
      <PageHeader text={'Add Alarm'} />
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={styles.topBarText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topBarButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.topBarPlus}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        {alarmList.map(alarm => (
          <AlarmComponent
            alarm={alarm}
            callback={activateAlarmCallback}
            key={alarm.UID}
          />
        ))}
      </ScrollView>
      <Modal visible={modalVisible} style={styles.modal} transparent={true}>
        <View style={styles.center}>
          <View style={styles.modal}>
            <View style={styles.modalTopBar}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.topBarText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={createAlarm}>
                <Text style={{fontSize: 16}}>Save</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.picker} onPress={() => setShowPicker(true)}>
              {formatAMPM(date)}
            </Text>
            {showPicker && (
              <RNDateTimePicker
                mode="time"
                value={date}
                onChange={(event, selected) => {
                  setShowPicker(false);
                  setDate(selected);
                }}
              />
            )}
          </View>
        </View>
      </Modal>
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
  topBar: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  topBarText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
    opacity: 0.7,
  },
  topBarPlus: {
    fontSize: 32,
    color: 'white',
    opacity: 0.7,
  },
  topBarButton: {
    position: 'absolute',
    right: 10,
    top: -12,
  },
  scroll: {
    width: '80%',
    marginTop: 20,
    paddingTop: 2,
    marginBottom: 20,
  },
  center: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    transparent: true,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: '80%',
    width: '80%',
    backgroundColor: 'blue',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  modalTopBar: {
    width: '100%',
    marginTop: 10,
    position: 'relative',
  },
  saveButton: {
    position: 'absolute',
    right: 10,
  },
  picker: {
    fontSize: 64,
    width: '100%',
    textAlign: 'center',
  },
});

export default AddAlarmScreen;
