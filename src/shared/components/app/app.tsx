import React, {type FC} from 'react';
import {Outlet} from 'react-router-dom';
import {ErrorBoundary} from '@alfabank/alfapeople-components/error-boundary';

import styles from './app.module.css';

export const App: FC = () => (
    <div className={styles.app}>
        <p>shared app </p>
        <ErrorBoundary>
            <Outlet/>
        </ErrorBoundary>
    </div>
);
