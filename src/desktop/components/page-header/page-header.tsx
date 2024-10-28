import React from 'react';

import styles from './page-header.module.css';

export const PageHeader: React.FC = () => {
    const test = true;

    return (
        <header className={styles.header}>
            {test && <div className={styles.header__image}> </div>}
        </header>
    );
};
