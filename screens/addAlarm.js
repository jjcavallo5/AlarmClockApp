import React from 'react';
import {View, Text} from 'react-native';

const AddAlarmScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
      }}>
      <Text
        style={{
          position: 'absolute',
          top: -10,
          right: 15,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 80,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        -
      </Text>
      <Text
        style={{
          marginTop: 50,
          fontSize: 24,
          color: 'white',
        }}>
        Add Alarm
      </Text>
    </View>
  );
};

export default AddAlarmScreen;
