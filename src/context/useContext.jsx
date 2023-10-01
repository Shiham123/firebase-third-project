import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { createContext } from 'react';
import globalAuth from '../firebase/firebase.config';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const createUserEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const signWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const info = { createUserEmailPassword, signWithEmailPassword };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
