import React from 'react';
import { UserProvider } from './src/contexts/UserContext.jsx';

export const wrapRootElement = ({ element }) => {
  return <UserProvider>{element}</UserProvider>;
};
