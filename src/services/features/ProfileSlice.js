import API from 'services/API';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import get from 'lodash/get';

export const getProfile = createAsyncThunk('profile/getProfile', async () => {
    try {
        const response = await API.get(`${process.env.REACT_APP_API}/profile`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const onEditProfile = createAsyncThunk('profile/onEditProfile', async (res) => {
    try {
        const response = await API.patch(`${process.env.REACT_APP_API}/update_profile/`, res);

        return response.data;
    } catch (error) {
        return error.response.data;
    }
});
export const changePassword = createAsyncThunk('profile/changePassword', async (res) => {
    try {
        const response = await API.patch(`${process.env.REACT_APP_API}/change_password/`, res);

        return response.data;
    } catch (error) {
        return error.response.data;
    }
});

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: '',
        loading: false,
        change_password: ''
    },
    reducers: {},
    extraReducers: {
        [getProfile.fulfilled]: (state, action) => {
            // Add user to the state array
            state.profile = get(action, 'payload');
            state.loading = false;
        },
        [getProfile.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [getProfile.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        },
        [onEditProfile.fulfilled]: (state, action) => {
            // Add user to the state array
            state.profile = get(action, 'payload');
            state.loading = false;
        },
        [onEditProfile.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [onEditProfile.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        },
        [changePassword.fulfilled]: (state, action) => {
            // Add user to the state array
            state.password_change_status = get(action, 'payload');
            state.loading = false;
        },
        [changePassword.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [changePassword.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        }
    }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const profileState = (state) => state.profile;

export default ProfileSlice.reducer;
