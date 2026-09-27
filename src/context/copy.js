import { createContext, useContext } from 'react';

export const CopyContext = createContext(null);

export const useCopy = () => {
  const context = useContext(CopyContext);
  if (!context) {
    throw new Error('useCopy must be used within CopyProvider');
  }
  return context;
};
