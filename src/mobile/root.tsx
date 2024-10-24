import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from '../shared/store';

import { routes } from './routes';

interface RootProps {
    basename?: string;
}

export const Root: FC<RootProps> = ({ basename }) => {
    const router = createBrowserRouter(routes, { basename });

    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default Root;
