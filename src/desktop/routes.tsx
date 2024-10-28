import React from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

import { App } from './components/app';
import { AuthPage } from './pages/auth-page';
import { DashboardPage } from './pages/client/dashboard-page';
import { RolesPage } from './pages/client/roles-page';

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
                path: '/client/dashboard',
                element: <DashboardPage />,
            },
            {
                path: '/client/roles',
                element: <RolesPage />,
            },
            {
                path: '/roles',
                element: <DashboardPage />,
            },
            {
                path: '*',
                element: <Navigate to='/' />,
            },
        ],
    },
];
