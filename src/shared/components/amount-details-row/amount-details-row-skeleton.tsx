import React, { type FC } from 'react';

import { Skeleton } from '@alfalab/core-components/skeleton/cssm';
import { Space } from '@alfalab/core-components/space/cssm';

import styles from './amount-details-row.module.css';

export const AmountDetailsRowSkeleton: FC = () => (
    <div className={styles.skeleton__wrapper}>
        <Space size={8}>
            <Skeleton visible={true}>
                <div style={{ width: '240px', height: '16px' }} />
            </Skeleton>
            <Skeleton visible={true}>
                <div style={{ width: '120px', height: '14px' }} />
            </Skeleton>
        </Space>
    </div>
);
