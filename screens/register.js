import React, {useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import PageHeader from '../components/pageHeader';
import colors from '../assets/colors';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [pwDontMatch, setPwDontMatch] = useState('none');
  const [invalidEmail, setInvalidEmail] = useState('none');
  const [emailInUse, setEmailInUse] = useState('none');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.page}>
        <PageHeader text={'Create Account'} style={{fontSize: 38}} />
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={100}>
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
          <TextInput
            style={styles.textInput}
            placeholder={'Confirm Password'}
            placeholderTextColor={'gray'}
            onChangeText={newConfirmPass => setConfirmPass(newConfirmPass)}
            textContentType={'password'}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              console.log(email);
              console.log(pass);
            }}>
            <Text style={{color: 'black'}}>Create Account</Text>
          </TouchableOpacity>
          <View>
            <Text style={{display: pwDontMatch, color: 'red', marginTop: 10}}>
              Passwords don't match
            </Text>
            <Text style={{display: invalidEmail, color: 'red', marginTop: 10}}>
              Invalid email
            </Text>
            <Text style={{display: emailInUse, color: 'red', marginTop: 10}}>
              Email already in use
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
    width: 130,
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterScreen;
