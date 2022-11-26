import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import serverApi from '../../api';
import { showMessage } from 'react-native-flash-message';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({ type: 'signin', payload: token });
      return token;
    }
    return null;
  };
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await serverApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
      return response.data;
    } catch (error) {
      const errorMessage = error.response.data.error;
      showMessage({
        message: "Oops, we couldn't sign you up",
        description: errorMessage,
        type: 'danger',
        icon: 'danger',
      });
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await serverApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      return response.data;
    } catch (error) {
      const errorMessage = error.response.data.error;
      console.log(errorMessage);
      showMessage({
        message: "Oops, we couldn't sign you in",
        description: errorMessage,
        type: 'danger',
        icon: 'danger',
      });
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with signing in',
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    tryLocalSignin,
  },
  { token: null, errorMessage: '' }
);
