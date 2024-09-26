import React from 'react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Router from './Router';

function App() {
    return (
        <div>
            <MantineProvider
                withNormalizeCSS
                withGlobalStyles
                theme={{
                    primaryColor: 'orange',
                    primaryShade: 7
                }}>
                <NotificationsProvider position="top-right" />
                <Router />
            </MantineProvider>
        </div>
    );
}

export default App;
