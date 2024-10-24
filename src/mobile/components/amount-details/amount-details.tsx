import React, { useState } from 'react';

import {
    Tab,
    TabsDesktop,
    type TabsDesktopProps,
} from '@alfalab/core-components/tabs/cssm/desktop';

import { AmountDetailsRow } from '../../../shared/components/amount-details-row/amount-details-row';
import { AmountDetailsRowSkeleton } from '../../../shared/components/amount-details-row/amount-details-row-skeleton';
import { DetailsTab, mapDetailsTabToTitle } from '../../../shared/constants/details-tab';
import { useAmountDetails } from '../../../shared/hooks/use-amount-details';
import { useAmountDetailsStatus } from '../../../shared/hooks/use-amount-details-status';

import styles from './amount-details.module.css';

export const AmountDetails = () => {
    const [currentDetailsTab, setCurrentDetailsTab] = useState<string>(DetailsTab.PAID_OUT);
    const { amountDetails } = useAmountDetails(currentDetailsTab);
    const { isFetching } = useAmountDetailsStatus();

    const handleTabChange: TabsDesktopProps['onChange'] = (_event, { selectedId }) => {
        setCurrentDetailsTab(selectedId.toString());
    };

    return (
        <TabsDesktop
            selectedId={currentDetailsTab}
            onChange={handleTabChange}
            view='secondary'
            size='xxs'
            containerClassName={styles.tabs}
            dataTestId='amount-details-tabs'
        >
            {Object.values(DetailsTab).map((tab) => (
                <Tab title={mapDetailsTabToTitle[tab]} id={tab} key={tab}>
                    {isFetching ? (
                        <React.Fragment>
                            <AmountDetailsRowSkeleton />
                            <AmountDetailsRowSkeleton />
                        </React.Fragment>
                    ) : (
                        <div data-test-id='amount-details'>
                            {amountDetails.map((amount) => (
                                <AmountDetailsRow
                                    key={amount.id}
                                    amountName={amount.amountName}
                                    amountDate={amount.amountDate}
                                    amountSum={amount.amountSum}
                                    amountNum={amount.amountNum}
                                />
                            ))}
                        </div>
                    )}
                </Tab>
            ))}
        </TabsDesktop>
    );
};
