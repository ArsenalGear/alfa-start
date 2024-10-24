import React, { type FC } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '@alfalab/core-components/button/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { ChevronForwardMIcon } from '@alfalab/icons-glyph/ChevronForwardMIcon';

// import { selectPaymentPeriods } from '../../../shared/slices/api-slice';
// import { selectCurrentPeriodId, setCurrentPeriodId } from '../../../shared/slices/app-slice';
// import { AmountDetails } from '../amount-details';
// import { AmountPlate } from '../amount-plate';
import styles from './payslip.module.css';

export const Payslip: FC = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // const currentPeriodId = useSelector(selectCurrentPeriodId);
    // const paymentPeriods = useSelector(selectPaymentPeriods);
    // const currentPeriodIndex = paymentPeriods.findIndex((it) => it.periodId === currentPeriodId);

    const handleCalendarOpen = () => {
        navigate('/calendar');
    };

    // const handleSlideChange: CarouselMobileContainerProps['onSlideChange'] = (periodId) => {
    //     // dispatch(setCurrentPeriodId(periodId));
    // };

    return (
        <div>
            <Typography.TitleMobile tag='h1' view='medium' font='system' weight='medium'>
                Пример Stab Remote
            </Typography.TitleMobile>
            <Gap size='l' />
            <Button
                block={true}
                className={styles.calendarButton}
                rightAddons={<ChevronForwardMIcon className={styles.rightArrow} />}
                onClick={handleCalendarOpen}
                dataTestId='open-calendar'
            >
                <Typography.Text view='primary-medium'>Календарь выплат</Typography.Text>
            </Button>
            <Gap size='m' />
            {/* <CarouselMobile.Container */}
            {/*    onSlideChange={handleSlideChange} */}
            {/*    activeSlideId={currentPeriodId} */}
            {/*    slidesAlign='start' */}
            {/*    slideWidth='calc(100vw - 55px)' */}
            {/* > */}
            {/*    {paymentPeriods.map((period, index) => { */}
            {/*        const skip = Math.abs(currentPeriodIndex - index) > 1; */}

            {/*        return ( */}
            {/*            <CarouselMobile.Slide slideId={period.periodId} key={period.periodId}> */}
            {/*                <AmountPlate */}
            {/*                    periodId={period.periodId} */}
            {/*                    skip={skip} */}
            {/*                    periodName={period.periodName} */}
            {/*                /> */}
            {/*            </CarouselMobile.Slide> */}
            {/*        ); */}
            {/*    })} */}
            {/* </CarouselMobile.Container> */}
            <Gap size='xl' />
            {/* <AmountDetails /> */}
        </div>
    );
};
