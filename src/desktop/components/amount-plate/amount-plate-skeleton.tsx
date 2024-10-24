import React from 'react';

import { Skeleton } from '@alfalab/core-components/skeleton/cssm';
import { Space } from '@alfalab/core-components/space/cssm';

import styles from './amount-plate.module.css';

export const AmountPlateSkeleton = () => (
    <div className={styles.container}>
        <Space size={28}>
            <Space size={12}>
                <Skeleton visible={true}>
                    <div style={{ width: '240px', height: '36px' }} />
                </Skeleton>
                <Skeleton visible={true}>
                    <div style={{ width: '84px', height: '16px' }} />
                </Skeleton>
            </Space>
            <Space size={8}>
                <Skeleton visible={true}>
                    <div style={{ width: '272px', height: '18px' }} />
                </Skeleton>
                <Skeleton visible={true}>
                    <div style={{ width: '272px', height: '16px' }} />
                </Skeleton>
            </Space>
        </Space>
    </div>
);
