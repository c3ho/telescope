import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  email: '',
  id: '',
  isAdmin: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
    default:
      return state;
  }
};

const UserContext = createContext(initialState);

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <UserContext.Provider value={{ state, dispatch }}>{props.children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.elementType,
};

export { UserContext, UserProvider };
