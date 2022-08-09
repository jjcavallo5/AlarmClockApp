import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/colors';
import {logoutUser} from '../backend/authentication';
import PageHeader from '../components/pageHeader';

const SettingsScreen = () => {
  const handleLogOut = () => {
    logoutUser();
  };

  return (
    <View style={styles.container}>
      <PageHeader text={'Settings'} />
      <TouchableOpacity onPress={handleLogOut} style={styles.logout}>
        <Text style={{color: 'black', fontSize: 16}}>Log Out</Text>
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
  logout: {
    backgroundColor: 'red',
    height: 50,
    width: 120,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
