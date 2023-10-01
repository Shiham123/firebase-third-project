import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA6O3RyeDFuywiQNVMoZgpwK65JhJxRfoQ',
  authDomain: 'fir-third-2b4d7.firebaseapp.com',
  projectId: 'fir-third-2b4d7',
  storageBucket: 'fir-third-2b4d7.appspot.com',
  messagingSenderId: '644582302804',
  appId: '1:644582302804:web:95f94b4baec716f8f3b9c1',
};

const app = initializeApp(firebaseConfig);
const globalAuth = getAuth(app);
export default globalAuth;
