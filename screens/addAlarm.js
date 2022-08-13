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

import PageHeader from '../components/pageHeader';

const {AlarmModule} = NativeModules;

import PushNotification from 'react-native-push-notification';
import notificationJson from '../backend/notification.json';
import AlarmComponent from '../components/alarm';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import {formatAMPM, getLowestUniqueInteger} from '../assets/utilities';

const AddAlarmScreen = ({navigation}) => {
  const [alarmList, setAlarmList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [showPicker, setShowPicker] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const scheduleAlarm = (UID, fireTime) => {
    let time = fireTime.getTime();
    AlarmModule.createAlarmEvent(UID, time.toString(), message => {
      PushNotification.localNotificationSchedule({
        ...notificationJson,
        date: fireTime,
        id: UID,
      });
      console.log(message);
    });
  };

  const cancelAlarm = UID => {
    AlarmModule.endAlarmEvent(UID, 'test', message => {
      PushNotification.cancelLocalNotification({
        id: UID,
      });
      console.log(message);
    });
  };

  const createAlarm = () => {
    let takenUIDS = alarmList.map(alarm => {
      return alarm.UID;
    });
    let UID = getLowestUniqueInteger(takenUIDS);
    scheduleAlarm(UID, date);
    let alarmObject = {
      UID: UID,
      fireTime: date,
      active: true,
    };

    setAlarmList([...alarmList, alarmObject]);
    setModalVisible(false);
  };

  const activateAlarmCallback = UID => {
    setAlarmList(current =>
      current.map(alarm => {
        if (alarm.UID == UID) {
          if (alarm.active) {
            cancelAlarm(UID);
          } else {
            scheduleAlarm(UID, alarm.fireTime);
          }
          return {...alarm, active: !alarm.active};
        }
        return alarm;
      }),
    );
  };

  const deleteAlarmCallback = UID => {
    cancelAlarm(UID);
    setAlarmList(current =>
      current.filter(alarm => {
        return alarm.UID !== UID;
      }),
    );
  };

  return (
    <View style={styles.container}>
      <PageHeader text={'Add Alarm'} />
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
          <Text style={styles.topBarText}>{isEditing ? 'Done' : 'Edit'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topBarButton}
          onPress={() => {
            setModalVisible(true);
            setIsEditing(false);
          }}>
          <Text style={styles.topBarPlus}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        {alarmList.map(alarm => (
          <AlarmComponent
            alarm={alarm}
            callback={activateAlarmCallback}
            showDelete={isEditing}
            deleteCallback={deleteAlarmCallback}
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
                display="spinner"
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
    height: '50%',
    width: '80%',
    backgroundColor: '#404040',
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
    marginTop: 30,
  },
});

export default AddAlarmScreen;
