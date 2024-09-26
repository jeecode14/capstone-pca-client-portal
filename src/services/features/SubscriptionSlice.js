import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/API';
import get from 'lodash/get';

export const getPaymentType = createAsyncThunk('request/getRequestForecast', async () => {
    try {
        const response = await API.get(`${process.env.REACT_APP_API}/payment/payment_types`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});
export const getBanks = createAsyncThunk('request/getBanks', async () => {
    try {
        const response = await API.get(`${process.env.REACT_APP_API}/payment/banks`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});
export const getSubscriptionType = createAsyncThunk('request/getSubscriptionType', async () => {
    try {
        const response = await API.get(`${process.env.REACT_APP_API}/payment/subscription_types`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const handlePayment = createAsyncThunk('payment/add', async (formData) => {
    try {
        const response = await API.post(`${process.env.REACT_APP_API}/payment/add/`, formData);

        return response.data;
    } catch (error) {
        return error.response.data;
    }
});

export const SubscriptionSlice = createSlice({
    name: 'subscription',
    initialState: {
        payment_types: [],
        loading: false,
        payment_add: '',
        banks: [],
        subscription_types: []
    },
    reducers: {},
    extraReducers: {
        [getPaymentType.fulfilled]: (state, action) => {
            // Add user to the state array
            state.payment_types = get(action, 'payload');
            state.loading = false;
        },
        [getPaymentType.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [getPaymentType.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        },
        [getSubscriptionType.fulfilled]: (state, action) => {
            // Add user to the state array
            state.subscription_types = get(action, 'payload');
            state.loading = false;
        },
        [getSubscriptionType.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [getSubscriptionType.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        },

        [getBanks.fulfilled]: (state, action) => {
            // Add user to the state array
            state.banks = get(action, 'payload');
            state.loading = false;
        },
        [getBanks.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [getBanks.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        },
        [handlePayment.fulfilled]: (state, action) => {
            // Add user to the state array
            state.payment_add = get(action, 'payload');
            state.loading = false;
        },
        [handlePayment.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [handlePayment.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        }
    }
});

export const subscriptionState = (state) => state.subscription;

export default SubscriptionSlice.reducer;
