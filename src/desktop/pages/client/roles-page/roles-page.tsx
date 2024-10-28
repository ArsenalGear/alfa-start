import React, { type FC } from 'react';

import { Gap } from '@alfalab/core-components/gap/cssm';

import { Roles } from '../../../../shared/components/client/roles';
import { PageContent } from '../../../components/page-content';
import { PageFooter } from '../../../components/page-footer';
import { PageHeader } from '../../../components/page-header';
import { PageSidebar } from '../../../components/page-sidebar';

import styles from './roles-page.module.css';

export const RolesPage: FC = () => {
    const test = true;

    return (
        <React.Fragment>
            <PageHeader />
            <Gap size={40} />
            {test && (
                <main className={styles.wrapper}>
                    <PageSidebar />
                    <PageContent>
                        <Roles />
                    </PageContent>
                </main>
            )}
            <Gap size={64} />
            <PageFooter />
        </React.Fragment>
    );
};
