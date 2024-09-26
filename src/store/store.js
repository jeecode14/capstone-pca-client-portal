import { configureStore } from '@reduxjs/toolkit';
import auth from 'services/features/AuthSlice';
import register from 'services/features/RegisterSlice';
import map from 'services/features/MapSlice';
import profile from 'services/features/ProfileSlice';
import forecast from 'services/features/ForecastSlice';
import request from 'services/features/RequestSlice';
import subscription from 'services/features/SubscriptionSlice';

export default configureStore({
    reducer: {
        auth,
        map,
        register,
        profile,
        forecast,
        request,
        subscription
    }
});
