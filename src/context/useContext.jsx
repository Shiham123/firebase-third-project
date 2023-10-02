import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import globalAuth from '../firebase/firebase.config';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const signWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const emailVerification = () => {
    setLoading(true);
    return sendEmailVerification(globalAuth.currentUser);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const info = {
    createUserEmailPassword,
    signWithEmailPassword,
    emailVerification,
    logOut,
    user,
    loading,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
