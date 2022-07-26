import auth from '@react-native-firebase/auth';

export function registerUser(email, pass, setErrorStatus, navigation) {
  auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(() => {
      navigation.navigate('Login');
      return;
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        setErrorStatus({display: 'flex', message: 'Invalid email address'});
        return;
      }
      if (error.code === 'auth/email-already-in-use') {
        setErrorStatus({display: 'flex', message: 'Email already in use'});
        return;
      }
    });
}

export function loginUser(email, pass, setErrorStatus, navigation) {
  auth()
    .signInWithEmailAndPassword(email, pass)
    .then(() => {
      navigation.navigate('Home');
    })
    .catch(error => {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/invalid-email'
      )
        setErrorStatus({display: 'flex', message: 'User email not found'});
      if (error.code === 'auth/wrong-password')
        setErrorStatus({display: 'flex', message: 'Invalid password'});
      return;
    });
}

export function getCurrentUser() {
  if (auth().currentUser) return auth().currentUser.email;
  return null;
}

export function logoutUser() {
  auth().signOut();
}
