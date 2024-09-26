import Axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import get from 'lodash/get';
import moment from 'moment';

export const login = createAsyncThunk('auth/login', async (res) => {
    try {
        const response = await Axios({
            url: `${process.env.REACT_APP_API}/login/`,
            method: 'post',
            data: res
        }).then((response) => {
            const authData = response.data;
            const setExpiry = moment().add(authData.expires_in, 'seconds');
            localStorage.setItem('auth', JSON.stringify(authData));
            localStorage.setItem('expiry', setExpiry);
            return response;
        });

        return response.data;
    } catch (error) {
        return error.response.data;
    }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (res) => {
    try {
        const response = await Axios({
            url: `${process.env.REACT_APP_API}/forgot_password/`,
            method: 'post',
            data: res
        }).then((response) => {
            return response;
        });

        return response.data;
    } catch (error) {
        return error.response.data;
    }
});

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: '',
        auth: '',
        forgot_password: ''
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            // Add user to the state array
            state.auth = get(action, 'payload');
            state.loading = false;
        },
        [login.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [login.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        },
        [forgotPassword.fulfilled]: (state, action) => {
            // Add user to the state array
            state.forgot_password = get(action, 'payload');
            state.loading = false;
        },
        [forgotPassword.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [forgotPassword.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        }
    }
});

export const { setUser } = AuthSlice.actions;

export const authState = (state) => state.auth;

export default AuthSlice.reducer;
