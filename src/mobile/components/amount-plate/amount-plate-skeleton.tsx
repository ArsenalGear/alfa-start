import React, { type FC } from 'react';

import { Gap } from '@alfalab/core-components/gap/cssm';
import { Skeleton } from '@alfalab/core-components/skeleton/cssm';
import { Space } from '@alfalab/core-components/space/cssm';

import styles from './amount-plate.module.css';

export const AmountPlateSkeleton: FC = () => (
    <div className={styles.container}>
        <Skeleton className={styles.skeleton} visible={true}>
            <div style={{ width: '140px', height: '24px' }} />
        </Skeleton>
        <Gap size='l' />
        <Space size={24}>
            <Space size={12}>
                <Skeleton visible={true}>
                    <div style={{ width: '240px', height: '32px' }} />
                </Skeleton>
                <Skeleton visible={true}>
                    <div style={{ width: '84px', height: '16px' }} />
                </Skeleton>
            </Space>
            <Space size={8}>
                <Skeleton visible={true}>
                    <div style={{ width: '272px', height: '16px' }} />
                </Skeleton>
                <Skeleton visible={true}>
                    <div style={{ width: '272px', height: '16px' }} />
                </Skeleton>
            </Space>
        </Space>
    </div>
);
