import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
export const firebaseConfig = {
  apiKey: "AIzaSyCmKb0DCZKTFt5X0udDH2arlr1j-r-Ms30",
  authDomain: "campus-recruitment.firebaseapp.com",
  databaseURL: "https://campus-recruitment.firebaseio.com",
  storageBucket: "campus-recruitment.appspot.com",
};
export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
