import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import colors from '../assets/colors';

const PageHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText} onPress={() => navigation.goBack()}>
        -
      </Text>
      <Text style={[styles.headerText, props.style]}>{props.text}</Text>
      <View style={styles.bottomShape} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    position: 'absolute',
    top: -10,
    right: 15,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 80,
    color: 'black',
  },
  headerText: {
    marginTop: 50,
    fontSize: 48,
    color: 'black',
    fontWeight: '500',
  },
  bottomShape: {
    borderTopLeftRadius: 50,
    backgroundColor: colors.darkGray,
    width: '100%',
    height: 50,
    marginTop: 50,
  },
});

export default PageHeader;
