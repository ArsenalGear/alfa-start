import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { config } from '../config';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(),
    keepUnusedDataFor: 3600,
    endpoints: (builder) => ({
        removeMe: builder.query({
            query: () => config.api.removeMe,
        }),
    }),
});

export const { useRemoveMeQuery } = apiSlice;
