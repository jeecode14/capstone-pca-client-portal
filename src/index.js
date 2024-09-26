import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import store from 'store/store';
import App from './App';
import 'leaflet/dist/leaflet.css';
import 'stylesheets/main.scss';
import 'leaflet-draw/dist/leaflet.draw.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <MantineProvider
                theme={{
                    fontFamily: 'Lato, sans-serif'
                }}>
                <App />
            </MantineProvider>
        </Provider>
    </React.StrictMode>
);
