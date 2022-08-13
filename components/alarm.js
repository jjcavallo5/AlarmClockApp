import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  TouchableOpacity,
} from 'react-native';

import {formatAMPM} from '../assets/utilities';

const AlarmComponent = props => {
  return (
    <View style={styles.container}>
      {props.showDelete && (
        <TouchableOpacity onPress={() => props.deleteCallback(props.alarm.UID)}>
          <Image
            source={require('../assets/deleteIcon.png')}
            style={styles.delete}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.time}>
        {formatAMPM(props.alarm.fireTime).split(' ')[0]}
      </Text>
      <Text style={styles.AMPM}>
        {formatAMPM(props.alarm.fireTime).split(' ')[1]}
      </Text>
      <Switch
        style={styles.switch}
        onValueChange={() => {
          props.callback(props.alarm.UID);
        }}
        value={props.alarm.active}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopColor: 'white',
    borderTopWidth: 0.25,
  },
  delete: {
    height: 20,
    width: 20,
  },
  time: {
    fontSize: 48,
    marginLeft: 10,
  },
  AMPM: {
    fontSize: 24,
    marginLeft: 5,
  },
  switch: {
    position: 'absolute',
    right: 10,
  },
});

export default AlarmComponent;
