import React, { Suspense } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

import { Loader } from '@alfalab/core-components/loader/cssm';

import { App } from './components/app';
import { MainPage } from './pages/main-page';

const PaymentCalendar = React.lazy(() => import('./pages/payment-calendar'));

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/calendar',
                element: (
                    <Suspense fallback={<Loader />}>
                        <PaymentCalendar />
                    </Suspense>
                ),
            },
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
