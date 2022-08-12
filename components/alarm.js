import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';

const AlarmComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{props.alarm.fireTime}</Text>
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
    borderBottomColor: 'white',
    borderBottomWidth: 0.25,
  },
  time: {
    fontSize: 48,
    marginLeft: 10,
  },
  switch: {
    position: 'absolute',
    right: 10,
  },
});

export default AlarmComponent;
