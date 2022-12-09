import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBhz5UNoCBldUgrQxRqzljcl2r4oy881W0",
  authDomain: "portfolio-backend-64b7e.firebaseapp.com",
  projectId: "portfolio-backend-64b7e",
  storageBucket: "portfolio-backend-64b7e.appspot.com",
  messagingSenderId: "441298596438",
  appId: "1:441298596438:web:bb94a30451edc7b96cc1f7",
  measurementId: "G-7ZKLTNP298"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);