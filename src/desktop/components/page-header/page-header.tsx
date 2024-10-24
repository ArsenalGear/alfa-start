import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PeriodSelection } from '@alfabank/alfapeople-components/period-selection';

import { Skeleton } from '@alfalab/core-components/skeleton/cssm';
import { Space } from '@alfalab/core-components/space/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';

import { useAmountDetailsStatus } from '../../../shared/hooks/use-amount-details-status';
import { useGetPaymentPeriodsQueryState } from '../../../shared/slices/api-slice';
import { selectCurrentPeriodId, setCurrentPeriodId } from '../../../shared/slices/app-slice';

import styles from './page-header.module.css';

export const PageHeader: React.FC = () => {
    const dispatch = useDispatch();
    const { data: paymentPeriods = [], isFetching } = useGetPaymentPeriodsQueryState();
    const { isFetching: isAmountsDetailsFetching, isSuccess: isAmountsDetailsSuccess } =
        useAmountDetailsStatus();
    const currentPeriodId = useSelector(selectCurrentPeriodId);
    const currentPeriodIndex = paymentPeriods.findIndex((it) => it.periodId === currentPeriodId);

    const currentPeriodName = paymentPeriods[currentPeriodIndex]?.periodName;

    const handleBackClick = () => {
        const nextPeriod = paymentPeriods[currentPeriodIndex + 1];

        dispatch(setCurrentPeriodId(nextPeriod.periodId));
    };

    const handleForwardClick = () => {
        const nextPeriod = paymentPeriods[currentPeriodIndex - 1];

        dispatch(setCurrentPeriodId(nextPeriod.periodId));
    };

    return (
        <div className={styles.header}>
            <Space direction='horizontal' size={8} align='center'>
                <Typography.Title tag='h1' view='medium'>
                    Пример1 Stab Remote page-header.tsx1
                </Typography.Title>
            </Space>
            {isFetching ? (
                <Skeleton visible={true}>
                    <div style={{ width: '200px', height: '24px' }} />
                </Skeleton>
            ) : (
                <React.Fragment>
                    <p>777</p>
                    <PeriodSelection
                        isBackDisabled={currentPeriodIndex === paymentPeriods.length - 1}
                        isForwardDisabled={currentPeriodIndex === 0}
                        isLoading={isAmountsDetailsFetching || !isAmountsDetailsSuccess}
                        onBackClick={handleBackClick}
                        onForwardClick={handleForwardClick}
                        value={currentPeriodName}
                        dataTestId='payment-periods'
                    />
                </React.Fragment>
            )}
        </div>
    );
};
