import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import history from '../history';


const initialUser = localStorage.getItem('auth')
      ? JSON .parse(localStorage.getItem('auth'))
      : null;


const initialState = {
    isLoading: false,
    currentUser: initialUser,
    error: null,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
        },
        registerSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        registerFailure: (state, action) => {
            state.error = action.payload;
        },
        logoutSuccess: (state) => {
            state.currentUser = null;
        },
    },
});

export const {
    loginFailure,
    loginSuccess,
    registerFailure,
    registerSuccess,
    logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;

export const register = (user) => async (dispatch) => {
    try {
        const config = {
            header: {
                'content-type': 'application/json',
            },
        };
        const response = await axios.post('http://localhost:4000/auth/register', user,config);
        
        if(response)
        {
            console.log(response.data);
            dispatch(registerSuccess(response.data));
            history.push('/signin');
            window.location.reload();
        }
        else{
            dispatch(registerFailure());
        }
      
    } catch (error) {
        console.log(error);
        dispatch(registerFailure());
    }
};


export const signin = (user) => async (dispatch) => {
  try {
    const config = {
      header: {
        'content-type': 'application/json',
      },
    };
   const response = await axios.post('http://localhost:4000/auth/signin', user, config);
   if (response) {
     dispatch(loginSuccess(response.data));
     localStorage.setItem('auth', JSON.stringify(response.data));
     history.push('/dashboard');
     window.location.reload();
   } else {
     dispatch(loginFailure());
   }
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
};