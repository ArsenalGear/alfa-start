import React from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

import { App } from './components/app';
import { AuthPage } from './pages/auth-page';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <AuthPage />,
            },
            {
                path: '/dashboard',
                element: <p>123</p>,
            },
            {
                path: '*',
                element: <Navigate to='/' />,
            },
        ],
    },
];
