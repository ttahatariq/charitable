import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAcD2-sA5-Cw5G10Yw0mWx-RVB7pRWzb_w",
  authDomain: "demoapp-248a1.firebaseapp.com",
  projectId: "demoapp-248a1",
  storageBucket: "demoapp-248a1.appspot.com",
  messagingSenderId: "888443522707",
  appId: "1:888443522707:web:77b70e0a6500003c758766"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
