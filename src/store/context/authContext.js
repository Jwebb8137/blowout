import createDataContext from './createDataContext';
import serverApi from '../../api';
import { showMessage } from 'react-native-flash-message';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await serverApi.post('/signup', { email, password });
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
      console.log('running sign in', email, password);
      const response = await serverApi.post('/signin', { email, password });
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
  return () => {
    // somehow sign out!
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
  },
  { token: null, errorMessage: '' }
);
