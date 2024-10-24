import { useSelector } from 'react-redux';

import { useGetPaidAmountsDetailsQuery, useGetPaidAmountsQuery } from '../slices/api-slice';
import { selectCurrentPeriodId } from '../slices/app-slice';

export const useAmountDetailsStatus = () => {
    const currentPeriodId = useSelector(selectCurrentPeriodId);

    const { isFetching: isPaidAmountsFetching, isSuccess: isPaidAmountsSuccess } =
        useGetPaidAmountsQuery(currentPeriodId, {
            skip: !currentPeriodId,
        });

    const { isFetching: isPaidAmountsDetailsFetching, isSuccess: isPaidAmountsDetailsSuccess } =
        useGetPaidAmountsDetailsQuery(currentPeriodId, { skip: !currentPeriodId });

    return {
        isFetching: isPaidAmountsFetching || isPaidAmountsDetailsFetching,
        isSuccess: isPaidAmountsSuccess && isPaidAmountsDetailsSuccess,
    };
};
