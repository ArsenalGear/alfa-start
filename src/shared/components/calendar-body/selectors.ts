import { createSelector } from '@reduxjs/toolkit';
import { addYears, lastDayOfYear, startOfMonth } from 'date-fns';

import { selectPaymentPeriods } from '../../slices/api-slice';
import { parsePeriodID } from '../../utils/date-helpers';

const now = Date.now();

export const selectCalendarDates = createSelector(selectPaymentPeriods, (paymentPeriods) => {
    const minDate =
        paymentPeriods.length === 0
            ? startOfMonth(now).getTime()
            : parsePeriodID(paymentPeriods[paymentPeriods.length - 1].periodId).getTime();
    const maxDate = lastDayOfYear(addYears(now, 1)).getTime();

    return {
        minDate,
        maxDate,
    };
});
