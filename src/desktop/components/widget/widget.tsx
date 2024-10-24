import React, {type FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Button} from '@alfalab/core-components/button/cssm';
import {CalendarMIcon as CalendarIcon} from '@alfalab/icons-glyph/CalendarMIcon';
import {PrintMIcon as PrinterIcon} from '@alfalab/icons-glyph/PrintMIcon';

import {config} from '../../../shared/config';
import {selectCurrentPeriodId, setSidePanelVisible} from '../../../shared/slices/app-slice';
import {trackAlfaMetrics} from '../../../shared/utils/track-alfa-metrics';

import styles from './widget.module.css';

export const Widget: FC = () => {
    const dispatch = useDispatch();
    const currentPeriodId = useSelector(selectCurrentPeriodId);

    const hyperRef = `${config.api.downloadPayslipPdf}/${currentPeriodId}`;

    const handleOpenCalendarClick = () => {
        dispatch(setSidePanelVisible(true));

        trackAlfaMetrics({
            category: 'link',
            action: 'click',
            label: 'payment-calendar',
        });
    };

    return (
        <div className={styles.widget}>
            <Button
                view='ghost'
                size='xxs'
                leftAddons={<PrinterIcon height={18} width={18}/>}
                href={hyperRef}
                target='_blank'
                className={styles.button}
            >
                Детализация
            </Button>
            <p>widget.tsx</p>
            <Button
                view='ghost'
                size='xxs'
                leftAddons={<CalendarIcon height={18} width={18}/>}
                onClick={handleOpenCalendarClick}
                className={styles.button}
                dataTestId='calendar-button'
            >
                Календарь выплат
            </Button>
        </div>
    );
};
