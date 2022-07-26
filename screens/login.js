import React, {useState} from 'react';

import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';

import PageHeader from '../components/pageHeader';
import colors from '../assets/colors';
import {loginUser} from '../backend/authentication';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorStatus, setErrorStatus] = useState({
    display: 'none',
    message: '',
  });

  const handleSubmit = () => {
    if (email === '' || pass === '') {
      setErrorStatus({
        display: 'flex',
        message: 'Enter both email and password',
      });
      return;
    }

    loginUser(email, pass, setErrorStatus, navigation);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.page}>
        <PageHeader text={'Log In'} />
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={30}>
          <TextInput
            style={[styles.textInput, {marginTop: 100}]}
            placeholder={'Email'}
            placeholderTextColor={'gray'}
            onChangeText={newEmail => setEmail(newEmail)}
            textContentType={'emailAddress'}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Password'}
            placeholderTextColor={'gray'}
            onChangeText={newPass => setPass(newPass)}
            textContentType={'password'}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={{color: 'black'}}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{color: 'skyblue'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                display: errorStatus.display,
                color: 'red',
                marginTop: 10,
              }}>
              {errorStatus.message}
            </Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  page: {backgroundColor: colors.darkGray, height: '100%'},
  container: {
    backgroundColor: colors.darkGray,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    color: 'white',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    width: 300,
    margin: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  submitButton: {
    backgroundColor: 'white',
    color: 'black',
    width: 100,
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default LoginScreen;
