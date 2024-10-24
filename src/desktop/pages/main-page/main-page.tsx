import React, { type FC } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
import { Gap } from '@alfalab/core-components/gap/cssm';

// import { InfoPage } from '../../../shared/components/info-page';
// import { selectIsFetchError, useGetPaymentPeriodsQuery } from '../../../shared/slices/api-slice';
// import { setSidePanelVisible } from '../../../shared/slices/app-slice';
// import { trackAlfaMetrics } from '../../../shared/utils/track-alfa-metrics';
// import { CalendarSidePanel } from '../../components/calendar-side-panel';
// import { PageHeader } from '../../components/page-header';

export const MainPage: FC = () => (
    // const dispatch = useDispatch();
    // const { data: paymentPeriods = [], isSuccess } = useGetPaymentPeriodsQuery();
    // const noPayments = paymentPeriods.length === 0;
    // const isError = useSelector(selectIsFetchError);

    // console.log(888, process.env.REACT_APP_API_URL)

    // if (isSuccess && noPayments) {
    //     return (
    //         <React.Fragment>
    //             <InfoPage
    //                 view='info'
    //                 handleClick={() => {
    //                     trackAlfaMetrics({
    //                         category: 'link',
    //                         action: 'click',
    //                         label: 'payment-calendar',
    //                     });
    //                     dispatch(setSidePanelVisible(true));
    //                 }}
    //             />
    //             <CalendarSidePanel />
    //         </React.Fragment>
    //     );
    // }

    // if (isError) {
    //     return (
    //         <React.Fragment>
    //             <PageHeader />
    //             <InfoPage
    //                 view='error'
    //                 handleClick={() => {
    //                     document.location.reload();
    //                 }}
    //             />
    //         </React.Fragment>
    //     );
    // }

    <React.Fragment>
        {/* <PageHeader /> */}
        <Gap size='2xl' />
        {/* <div className={styles.wrapper}> */}
        {/*    <AmountPlate /> */}
        {/*    <Gap size='xl' /> */}
        {/*    <Widget /> */}
        {/*    <Gap size='xl' /> */}
        {/*    <AmountDetails /> */}
        {/* </div> */}
        {/* <CalendarSidePanel /> */}
    </React.Fragment>
);
