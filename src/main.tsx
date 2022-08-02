import {queryClient} from '@api/QueryClient';
import {ChakraProvider} from '@chakra-ui/provider';
import {createStandaloneToast} from '@chakra-ui/toast';
import {theme} from '@root/theme';
import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

const {ToastContainer} = createStandaloneToast();
import './index.css';
import './assets/fonts/Raleway/Raleway-Regular.ttf';
import {SessionProvider} from "@hooks/session/session.provider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <SessionProvider>
                        <App/>
                        <ToastContainer/>
                    </SessionProvider>
                </ChakraProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
