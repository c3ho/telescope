import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const UserStateContext = createContext();
export const UserDispatchContext = createContext();

const initialState = {
  name: '',
  email: '',
  id: '',
  isAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{props.children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.elementType,
};
