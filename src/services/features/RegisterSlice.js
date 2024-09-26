import Axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import get from 'lodash/get';

export const onRegister = createAsyncThunk('registration/onRegister', async (res) => {
    try {
        const response = await Axios({
            url: `${process.env.REACT_APP_API}/register/`,
            method: 'post',
            data: res
        });

        return response.data;
    } catch (error) {
        return error.response.data;
    }
});

export const RegisterSlice = createSlice({
    name: 'register',
    initialState: {
        formValues: {},
        loading: false,
        registerData: ''
    },
    reducers: {
        setFormValues: (state, payload) => {
            state.formValues = payload;
        }
    },
    extraReducers: {
        [onRegister.fulfilled]: (state, action) => {
            state.registerData = get(action, 'payload');
            state.loading = false;
        },
        [onRegister.pending]: (state, action) => {
            state.pending = action.error;
            state.loading = true;
        },
        [onRegister.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }
    }
});

export const { setFormValues } = RegisterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const registerState = (state) => state.register;

export default RegisterSlice.reducer;
