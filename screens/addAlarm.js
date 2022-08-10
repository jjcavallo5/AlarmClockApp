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

const AddAlarmScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader text={'Add Alarm'} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          AlarmModule.createAlarmEvent('test', 'test', message => {
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
    backgroundColor: 'slate',
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
