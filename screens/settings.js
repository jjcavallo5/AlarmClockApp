import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {logoutUser} from '../backend/authentication';

const SettingsScreen = () => {
  const handleLogOut = () => {
    logoutUser();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLogOut}>
        <Text style={{color: 'black'}}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
