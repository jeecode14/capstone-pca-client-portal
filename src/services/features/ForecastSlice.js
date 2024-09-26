import API from 'services/API';
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import get from 'lodash/get';



export const getSolarYears = createAsyncThunk('forecast/getSolarYears', async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/solar_potential/years`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});
export const getYears = createAsyncThunk('forecast/getYears', async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/forecast/years`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});
export const getModels = createAsyncThunk('forecast/getModels   ', async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/forecast/forecast_models`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});
export const getLocations = createAsyncThunk('forecast/getLocations   ', async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/forecast/locations`);
        
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});
export const getTypes = createAsyncThunk('forecast/getTypes   ', async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/forecast/forecast_types`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});
export const getForecastCSVTemp = createAsyncThunk('forecast/getForecastCSVTemp   ', async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/forecasttemplate`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const getForecast = createAsyncThunk('forecast/getForecast   ', async (data) => {
    const params = new URLSearchParams(data);
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API}/forecast?${params.toString()}`
        );

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const handleForecastRequest = createAsyncThunk(
    'forecast/handleForecastRequest',
    async (formData) => {
        try {
            const response = await API.post(
                `${process.env.REACT_APP_API}/request/forecast/add/`,
                formData
            );

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
);

export const getForecastInfo = createAsyncThunk('forecast/getForecastInfo   ', async (data) => {
    const params = new URLSearchParams(data);
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API}/forecast/info?${params.toString()}`
        );

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const ForecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        profile: '',
        loading: false,
        years: [],
        solar_years: [],
        forecast_models: [],
        locations: [],
        forecast_types: [],
        forecast: '',
        forecast_info: '',
        csv_link: '',
        forecast_request: '',
        forecast_request_loading: false
    },
    reducers: {},
    extraReducers: {
        [getYears.fulfilled]: (state, action) => {
            state.years = get(action, 'payload');
            state.loading = false;
        },
        [getYears.pending]: (state, action) => {
            state.pending = action.error;
            state.loading = true;
        },
        [getYears.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        [getSolarYears.fulfilled]: (state, action) => {
            state.solar_years = get(action, 'payload');
            state.loading = false;
        },
        [getSolarYears.pending]: (state, action) => {
            state.pending = action.error;
            state.loading = true;
        },
        [getSolarYears.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        [getModels.fulfilled]: (state, action) => {
            state.forecast_models = get(action, 'payload');
            state.loading = false;
        },
        [getModels.pending]: (state, action) => {
            state.pending = action.error;
            state.loading = true;
        },
        [getModels.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        [getLocations.fulfilled]: (state, action) => {
            state.locations = get(action, 'payload');
            state.loading = false;
        },
        [getLocations.pending]: (state, action) => {
            state.pending = action.error;
            state.loading = true;
        },
        [getLocations.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        [getTypes.fulfilled]: (state, action) => {
            state.forecast_types = get(action, 'payload');
            state.loading = false;
        },
        [getTypes.pending]: (state, action) => {
            state.pending = action.error;
            state.loading = true;
        },
        [getTypes.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        [getForecastCSVTemp.fulfilled]: (state, action) => {
            state.csv_link = get(action, 'payload');
            state.loading = false;
        },
        [getForecastCSVTemp.pending]: (state, action) => {
            state.pending = action.error;
            state.loading = true;
        },
        [getForecastCSVTemp.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        [getForecast.fulfilled]: (state, action) => {
            state.forecast = get(action, 'payload');
            state.loading = false;
        },
        [getForecast.pending]: (state, action) => {
            state.pending = action.error;
            state.loading = true;
        },
        [getForecast.rejected]: (state, action) => {
            state.error = action.error;
            state.forecast = [];
            state.loading = false;
        },
        [getForecastInfo.fulfilled]: (state, action) => {
            state.forecast_info = get(action, 'payload.0');
            state.loading = false;
        },
        [getForecastInfo.pending]: (state, action) => {
            state.pending = action.error;
            state.loading = true;
        },
        [getForecastInfo.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        [handleForecastRequest.fulfilled]: (state, action) => {
            state.forecast_request = get(action, 'payload');
            state.forecast_request_loading = false;
        },
        [handleForecastRequest.pending]: (state, action) => {
            state.pending = action.error;
            state.forecast_request_loading = true;
        },
        [handleForecastRequest.rejected]: (state, action) => {
            state.error = action.error;
            state.forecast_request_loading = false;
        }
    }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const forecastState = (state) => state.forecast;

export default ForecastSlice.reducer;
