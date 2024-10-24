import React, {useState} from 'react';

import {Tab, TabsMobile, type TabsMobileProps} from '@alfalab/core-components/tabs/cssm/mobile';

import {AmountDetailsRow} from '../../../shared/components/amount-details-row/amount-details-row';
import {AmountDetailsRowSkeleton} from '../../../shared/components/amount-details-row/amount-details-row-skeleton';
import {DetailsTab, mapDetailsTabToTitle} from '../../../shared/constants/details-tab';
import {useAmountDetails} from '../../../shared/hooks/use-amount-details';
import {useAmountDetailsStatus} from '../../../shared/hooks/use-amount-details-status';

import styles from './amount-details.module.css';

export const AmountDetails = () => {
    const [currentDetailsTab, setCurrentDetailsTab] = useState<string>(DetailsTab.PAID_OUT);
    const {amountDetails} = useAmountDetails(currentDetailsTab);

    console.log('amountDetails', amountDetails);
    const {isFetching, isSuccess} = useAmountDetailsStatus();

    const handleTabChange: TabsMobileProps['onChange'] = (_event, {selectedId}) => {
        setCurrentDetailsTab(selectedId.toString());
    };

    return (
        <TabsMobile
            selectedId={currentDetailsTab}
            onChange={handleTabChange}
            containerClassName={styles.tabs}
        >
            {Object.values(DetailsTab).map((tab) => (
                <Tab title={mapDetailsTabToTitle[tab]} id={tab} key={tab}>
                    {isFetching || !isSuccess ? (
                        <React.Fragment>
                            <AmountDetailsRowSkeleton/>
                            <AmountDetailsRowSkeleton/>
                        </React.Fragment>
                    ) : (
                        <div data-test-id='amount-details'>
                            <p>amount-details.tsx</p>
                            {amountDetails.map((amount) => (
                                <AmountDetailsRow
                                    key={amount.id}
                                    amountName={amount.amountName}
                                    amountDate={amount.amountDate}
                                    amountSum={amount.amountSum}
                                    amountNum={amount.amountNum}
                                    amountTooltip={amount.amountTooltip}
                                />
                            ))}
                        </div>
                    )}
                </Tab>
            ))}
        </TabsMobile>
    );
};
