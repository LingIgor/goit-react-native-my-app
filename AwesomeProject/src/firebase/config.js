import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB3MvsuQIZnYu6P-prk-meknSIbz-52k9o",
  authDomain: "ling-react-native-883a4.firebaseapp.com",
  projectId: "ling-react-native-883a4",
  storageBucket: "ling-react-native-883a4.appspot.com",
  messagingSenderId: "457443581282",
  appId: "1:457443581282:web:05ebc3788095f87e1a603b",
  measurementId: "G-7WSKDK1FP7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const database = getDatabase(app);
