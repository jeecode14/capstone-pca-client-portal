import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/API';
import Axios from 'axios';
import get from 'lodash/get';

export const getLayers = createAsyncThunk('map/getLayers   ', async (data) => {
    const params = new URLSearchParams(data);
    try {
        const response = await Axios.get(
            `${process.env.REACT_APP_API}/solar_potential?${params.toString()}`
        );

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const getAuthLayers = createAsyncThunk('map/getLayers   ', async (data) => {
    const params = new URLSearchParams(data);
    try {
        const response = await API.get(
            `${process.env.REACT_APP_API}/solar_potential?${params.toString()}`
        );

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const MapSlice = createSlice({
    name: 'map',
    initialState: {
        layers: [],
        selectedLayer: 'Solar PV Power Resource Potential',
        sampleData: [
            { name: 'Solar PV Power Resource Potential' },
            { name: 'Shortwave Radiation' },
            { name: 'Corrected Shortwave Radiation' },
            { name: 'Cell Temperature' },
            { name: 'Temperature Effect' },
            { name: 'Dust Effects' },
            { name: 'Digital Elevation Model Slope' }
        ]
    },
    reducers: {
        setSelectedLayer: (state, action) => {
            state.selectedLayer = action.payload;
        }
    },
    extraReducers: {
        [getLayers.fulfilled]: (state, action) => {
            // Add user to the state array
            state.layers = get(action, 'payload');
            state.loading = false;
        },
        [getLayers.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [getLayers.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        },
        [getAuthLayers.fulfilled]: (state, action) => {
            // Add user to the state array
            state.layers = get(action, 'payload');
            state.loading = false;
        },
        [getAuthLayers.pending]: (state, action) => {
            // Add user to the state array
            state.pending = action.error;
            state.loading = true;
        },
        [getAuthLayers.rejected]: (state, action) => {
            // Add user to the state array
            state.error = action.error;
            state.loading = false;
        }
    }
});

export const { setSelectedLayer } = MapSlice.actions;

export const mapState = (state) => state.map;

export default MapSlice.reducer;
