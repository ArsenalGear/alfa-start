import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Spinner } from '@alfalab/core-components/spinner/cssm';

import { InfoPage } from '../../../shared/components/info-page';
import { selectIsFetchError, useGetPaymentPeriodsQuery } from '../../../shared/slices/api-slice';
import { Payslip } from '../../components/payslip';

import styles from './main-page.module.css';

export const MainPage: FC = () => {
    const navigate = useNavigate();
    const { data: paymentPeriods = [], isFetching, isSuccess } = useGetPaymentPeriodsQuery();
    const noPayments = paymentPeriods.length === 0;
    const isError = useSelector(selectIsFetchError);

    if (isFetching) {
        return (
            <div className={styles.spinner}>
                <Spinner visible={true} size='m' />
            </div>
        );
    }

    if (isSuccess && noPayments) {
        return (
            <InfoPage
                view='info'
                handleClick={() => {
                    navigate('/calendar');
                }}
            />
        );
    }

    if (isError) {
        return (
            <InfoPage
                view='error'
                handleClick={() => {
                    document.location.reload();
                }}
            />
        );
    }

    return <Payslip />;
};
