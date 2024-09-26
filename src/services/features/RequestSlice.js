import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/API';
import get from 'lodash/get';

export const getRequestForecast = createAsyncThunk('request/getRequestForecast', async () => {
    try {
        const response = await API.get(`${process.env.REACT_APP_API}/request/forecast/list/`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const getRequestLayers = createAsyncThunk('request/getRequestLayers', async (data) => {
    const params = new URLSearchParams(data);
    try {
        const response = await API.get(
            `${process.env.REACT_APP_API}/request/solar_potential/list/?${params.toString()}`
        );

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const getProductTypes = createAsyncThunk('request/getProductTypes', async () => {
    try {
        const response = await API.get(
            `${process.env.REACT_APP_API}/solar_potential/product_types/`
        );

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const RequestSlice = createSlice({
    name: 'request',
    initialState: {
        request_list: '',
        layers_list: [],
        forecast_list: '',
        product_types: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [getRequestForecast.fulfilled]: (state, action) => {
            // Add user to the state array
            state.forecast_list = get(action, 'payload');
            state.loading = false;
        },
        [getRequestForecast.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [getRequestForecast.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        },
        [getProductTypes.fulfilled]: (state, action) => {
            // Add user to the state array
            state.product_types = get(action, 'payload');
            state.loading = false;
        },
        [getProductTypes.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [getProductTypes.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        },
        [getRequestLayers.fulfilled]: (state, action) => {
            // Add user to the state array
            state.layers_list = get(action, 'payload');
            state.loading = false;
        },
        [getRequestLayers.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [getRequestLayers.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        }
    }
});

export const requestState = (state) => state.request;

export default RequestSlice.reducer;
