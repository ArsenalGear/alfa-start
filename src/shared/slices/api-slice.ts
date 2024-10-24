import {nanoid} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {config} from '../config';
import {type ApplicationState} from '../store';
import {
    type PaidAmountEntity,
    type PaidAmountsDetailsEntity,
    type PaidAmountsEntity,
    type PaymentPeriodsEntity,
    type PaymentScheduleEntity,
    type TotalAmountEntity,
} from '../types/generated-types';

import {selectCurrentPeriodId, setCurrentPeriodId} from './app-slice';

type PaidAmountWithId = PaidAmountEntity & { id: string };

// Функция для получения токена из localStorage 
const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('token');

    return token || null;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    // baseQuery: fetchBaseQuery({
    //     baseUrl: config.api.baseUrl,  // например, указываем базовый URL для всех запросов
    //     prepareHeaders: (headers) => {
    //         // добавляем заголовки, если нужно
    //         headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    //         return headers;
    //     },
    // }),

    baseQuery: fetchBaseQuery({
        // baseUrl: config.api.paidAmountsDetails,  // Указываем базовый URL для всех запросов
        // baseUrl: config.api.baseUrl,  // Указываем базовый URL для всех запросов
        prepareHeaders: (headers) => {
            console.log('133333333333333333333');
            const token = getTokenFromLocalStorage();

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),

    // baseQuery: fetchBaseQuery(), // это настройка базового запроса, которая будет использоваться для выполнения HTTP-запросов.
    keepUnusedDataFor: 3600,
    endpoints: (builder) => ({

        loginUser: builder.mutation<{ accessToken: string }, { username: string, password: string }>({
            query: (credentials) => ({
                // url: config.api.login,  // URL для авторизации
                url: config.api.paidAmountsDetails,  // URL для авторизации
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }),
            transformResponse: (response: { accessToken: string }) => {
                // Сохраняем токен в localStorage после успешной авторизации
                localStorage.setItem('token', response.accessToken);

                return response;
            },
        }),


        getPaymentPeriods: builder.query<PaymentPeriodsEntity['paymentPeriods'], void>({
            query: () => config.api.paymentPeriods,
            onQueryStarted: async (_, {dispatch, queryFulfilled}) => {
                try {
                    const {data} = await queryFulfilled;

                    if (data.length > 0) {
                        const currentPeriodId = data[0].periodId;

                        dispatch(setCurrentPeriodId(currentPeriodId));
                    }
                    // eslint-disable-next-line no-empty
                } catch (error) {
                }
            },
            transformResponse: (response: PaymentPeriodsEntity) => response.paymentPeriods.reverse(),
        }),
        // getTotalAmounts: builder.query<TotalAmountEntity, string>({
        //     query: (periodId) => `${config.api.totalAmount}?periodId=${periodId}`,
        // }),

        getTotalAmounts: builder.query<TotalAmountEntity, string>({
            query: (periodId) => {
                console.log(`Запрос отправлен с periodId: ${periodId}`);

                return `${config.api.totalAmount}?periodId=${periodId}`;
            },

            onQueryStarted: async (periodId, {queryFulfilled}) => {
                try {
                    const {data} = await queryFulfilled;

                    console.log('Результат запроса:', data);
                } catch (error) {
                    console.error('Ошибка запроса:', error);
                }
            },
        }),

        getPaidAmounts: builder.query<PaidAmountWithId[], string>({
            query: (periodId) => `${config.api.paidAmounts}?periodId=${periodId}`,
            transformResponse: (response: PaidAmountsEntity) =>
                response.paidAmounts.map((amount) => ({
                    ...amount,
                    id: nanoid(),
                })),
        }),

        getPosts: builder.query<any, void>({
            query: () => `${config.api.posts}`,  // эндпоинт на мидл-сервере
        }),

        getPaidAmountsDetails: builder.query<PaidAmountWithId[], string>({
            query: (periodId) => `${config.api.paidAmountsDetails}?periodId=${periodId}`,
            transformResponse: (response: PaidAmountsDetailsEntity) =>
                response.paidAmountsDetails.map((amount) => ({
                    ...amount,
                    id: nanoid(),
                })),
        }),
        getPaymentSchedule: builder.query<PaymentScheduleEntity['paymentSchedule'],
            { beginDate: string; endDate: string }>({
            query: ({beginDate, endDate}) =>
                `${config.api.paymentSchedule}?beginDate=${beginDate}&endDate=${endDate}`,
            transformResponse: (response: PaymentScheduleEntity) => response.paymentSchedule,
        }),
    }),
});

export const {
    useGetPaymentPeriodsQuery,
    useGetTotalAmountsQuery,
    useGetPaidAmountsQuery,
    useGetPaidAmountsDetailsQuery,
    useGetPaymentScheduleQuery,
    useGetPostsQuery
} = apiSlice;

export const {useQueryState: useGetPaymentPeriodsQueryState} =
    apiSlice.endpoints.getPaymentPeriods;

export const selectPaymentPeriods = (state: ApplicationState) => {
    const {data = []} = apiSlice.endpoints.getPaymentPeriods.select()(state);

    return data;
};

export const selectIsFetchError = (state: ApplicationState) => {
    const currentPeriodId = selectCurrentPeriodId(state);

    const {isError: isPaymentPeriodsError} = apiSlice.endpoints.getPaymentPeriods.select()(state);
    const {isError: isTotalAmountsError} =
        apiSlice.endpoints.getTotalAmounts.select(currentPeriodId)(state);
    const {isError: isPaidAmountsError} =
        apiSlice.endpoints.getPaidAmounts.select(currentPeriodId)(state);
    const {isError: isPaidAmountsDetailsError} =
        apiSlice.endpoints.getPaidAmountsDetails.select(currentPeriodId)(state);

    return (
        isPaymentPeriodsError ||
        isTotalAmountsError ||
        isPaidAmountsError ||
        isPaidAmountsDetailsError
    );
};
