import React, { type FC } from 'react';

import { Typography } from '@alfalab/core-components/typography/cssm';

import { ExampleButton } from '../../../shared/components/example-button';

import styles from './main-page.module.css';

export const MainPage: FC = () => (
    <div className={styles.page}>
        <Typography.Title className={styles.title} tag='h1'>
            Привет, это alfalife-stab-remote-front
            <ExampleButton />
        </Typography.Title>
    </div>
);
