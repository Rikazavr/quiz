import React from 'react';
import { stores } from '../../stores';
import { StoresContext } from './context';

export const StoresProvider = ({children}) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);
