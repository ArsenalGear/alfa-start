import React from 'react';

import styles from './page-footer.module.css';

export const PageFooter: React.FC = () => {
    const test = true;

    return (
        <footer className={styles.footer__wrapper}>
            {test && <div className={styles.footer}> </div>}
        </footer>
    );
};
