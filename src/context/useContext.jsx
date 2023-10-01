import { createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const info = { name: 'testing context' };
  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
