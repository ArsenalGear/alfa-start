import React from 'react';

import { Grid } from '@alfalab/core-components/grid';

import styles from './page-content.module.css';

export interface PageContentProps {
    children: React.ReactNode;
}

export const PageContent: React.FC<PageContentProps> = ({ children }) => {
    const test = true;

    return (
        <Grid.Col width='9'>
            <section id={`PageContent-${test}`} className={styles.content}>
                {children}
            </section>
        </Grid.Col>
    );
};
