import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "final-project-react-f1cb8.firebaseapp.com",
    projectId: "final-project-react-f1cb8",
    storageBucket: "final-project-react-f1cb8.appspot.com",
    messagingSenderId: "58783713858",
    appId: "1:58783713858:web:7d3a2dc8cec09f1c6c3bdb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };