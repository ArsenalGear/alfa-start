import React, { type FC } from 'react';

import { Button } from '@alfalab/core-components/button/cssm';

import styles from './example-button.module.css';

export const ExampleButton: FC = () => (
    <div className={styles.wrapper}>
        <Button view='primary'>Delete me</Button>
    </div>
);
