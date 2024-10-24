import {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {DetailsTab} from '../constants/details-tab';
import {useGetPaidAmountsDetailsQuery, useGetPaidAmountsQuery, useGetPostsQuery} from '../slices/api-slice';
import {selectCurrentPeriodId} from '../slices/app-slice';

export const useAmountDetails = (currentDetailsTab: string) => {
    const currentPeriodId = useSelector(selectCurrentPeriodId);

    const {data: paidAmounts = []} = useGetPaidAmountsQuery(currentPeriodId, {
        skip: !currentPeriodId,
    });

    const {data: testPost = []} = useGetPostsQuery();

    console.log('testPost', testPost);
    console.log('data1paidAmounts', paidAmounts);

    const {data: paidAmountsDetails = []} = useGetPaidAmountsDetailsQuery(currentPeriodId, {
        skip: !currentPeriodId,
    });

    console.log('data1paidAmountsDetails', paidAmountsDetails);

    const amountDetails = useMemo(() => {
        if (currentDetailsTab === DetailsTab.PAID_OUT) {
            return paidAmounts;
        }

        if (currentDetailsTab === DetailsTab.ACCRUED) {
            return paidAmountsDetails.filter((it) => it.amountSum.includes('+'));
        }

        return paidAmountsDetails.filter((it) => it.amountSum.includes('-'));
    }, [currentDetailsTab, paidAmounts, paidAmountsDetails]);

    return {
        amountDetails,
    };
};
