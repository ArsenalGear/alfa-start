import React, { type FC } from 'react';

import { Gap } from '@alfalab/core-components/gap/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';

import { AmountBox } from '../../../shared/components/amount-box';
import { useGetTotalAmountsQuery } from '../../../shared/slices/api-slice';

import { AmountPlateSkeleton } from './amount-plate-skeleton';

import styles from './amount-plate.module.css';

const formatValue = (value: string) => Number(value?.replace(/\D/g, ''));

interface AmountPlateProps {
    periodId: string;
    skip: boolean;
    periodName: string;
}

export const AmountPlate: FC<AmountPlateProps> = ({ periodId, skip, periodName }) => {
    const { data, isFetching } = useGetTotalAmountsQuery(periodId, { skip });

    if (isFetching || !data) {
        return <AmountPlateSkeleton />;
    }

    return (
        <div className={styles.container} data-test-id={`amount-plate-${periodId}`}>
            <Typography.Text view='primary-medium' tag='div'>
                {periodName}
            </Typography.Text>
            <Gap size='l' />
            <AmountBox large={true} subtitle='Выплатили1' value={formatValue(data.paidAmount)} />
            <Gap size='xl' />
            <div className={styles.wrapper}>
                <AmountBox subtitle='Начислили' value={formatValue(data.accruedAmount)} />
                <AmountBox subtitle='Удержали' value={formatValue(data.withheldAmount)} />
            </div>
        </div>
    );
};
