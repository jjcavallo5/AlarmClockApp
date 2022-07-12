import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

const JoinGroup = props => {
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    console.log(code);
  };

  return (
    <View style={props.style}>
      <TextInput
        style={{
          backgroundColor: 'white',
          color: '#00222B',
          width: '50%',
          borderWidth: 1,
          borderRadius: 10,
          textAlign: 'center',
        }}
        placeholder="Enter group code"
        placeholderTextColor={'gray'}
        onChangeText={newCode => setCode(newCode)}
        keyboardType="numeric"
        maxLength={6}
        onSubmitEditing={handleSubmit}></TextInput>

      <TouchableOpacity
        title="Submit"
        style={{
          backgroundColor: 'white',
          color: 'black',
          width: 100,
          height: 40,
          borderRadius: 10,
          marginTop: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handleSubmit}>
        <Text style={{color: 'black', textAlign: 'center'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinGroup;
