import React, { type FC } from 'react';

import { Typography } from '@alfalab/core-components/typography/cssm';

import { ExampleButton } from '../../../shared/components/example-button';

import styles from './main-page.module.css';

export const MainPage: FC = () => (
    <div className={styles.page}>
        <Typography.TitleMobile className={styles.title} tag='h1' font='system'>
            Привет, это мобильная версия alfalife-stab-remote-front
        </Typography.TitleMobile>
        <ExampleButton />
    </div>
);
