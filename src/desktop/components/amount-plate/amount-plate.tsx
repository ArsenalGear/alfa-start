import React, {type FC} from 'react';
import {useSelector} from 'react-redux';

import {Space} from '@alfalab/core-components/space/cssm';

import {AmountBox} from '../../../shared/components/amount-box';
import {useGetTotalAmountsQuery} from '../../../shared/slices/api-slice';
import {selectCurrentPeriodId} from '../../../shared/slices/app-slice';

import {AmountPlateSkeleton} from './amount-plate-skeleton';

import styles from './amount-plate.module.css';

const formatValue = (value: string) => Number(value?.replace(/\D/g, ''));

export const AmountPlate: FC = () => {
    const currentPeriodId = useSelector(selectCurrentPeriodId);
    const {data, isFetching, isSuccess} = useGetTotalAmountsQuery(currentPeriodId, {
        skip: !currentPeriodId, // Пропускаем запрос, если нет periodId// Пропускаем запрос, если нет periodId
    });

    // Параметр skip: !currentPeriodId указывает RTK Query пропустить выполнение запроса, если currentPeriodId отсутствует (например, равен null или undefined).

    console.log('data', data);

    if (isFetching || !data || !isSuccess) {
        return <AmountPlateSkeleton/>;
    }

    return (
        <div className={styles.container} data-test-id='amount-plate'>
            <p>amount-plate.tsx</p>
            <Space size={24}>
                <AmountBox large={true} subtitle='Выплатили444W' value={formatValue(data.paidAmount)}/>

                <Space direction='horizontal' size={24}>
                    <div className={styles.amount}>
                        <AmountBox subtitle='Начислили' value={formatValue(data.accruedAmount)}/>
                    </div>
                    <div className={styles.amount}>
                        <AmountBox subtitle='Удержали' value={formatValue(data.withheldAmount)}/>
                    </div>
                </Space>
            </Space>
        </div>
    );
};
