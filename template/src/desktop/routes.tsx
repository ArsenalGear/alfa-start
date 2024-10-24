import React from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

import { App } from './components/app';
import { MainPage } from './pages/main-page';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '*',
                element: <Navigate to='/' />,
            },
        ],
    },
];
