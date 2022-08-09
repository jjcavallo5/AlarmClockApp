import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../assets/colors';

import PageHeader from '../components/pageHeader';

const AddAlarmScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader text={'Add Alarm'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    height: '100%',
  },
});

export default AddAlarmScreen;
