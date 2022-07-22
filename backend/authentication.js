import auth from '@react-native-firebase/auth';

export function registerUser(
  email,
  pass,
  setInvalidEmail,
  setEmailInUse,
  navigation,
) {
  auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(() => {
      console.log('User account created & signed in!');
      navigation.navigate('Login');
      return;
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        setInvalidEmail('flex');
        return;
      }
      if (error.code === 'auth/email-already-in-use') {
        setEmailInUse('flex');
        return;
      }

      console.error(error);
    });
}
