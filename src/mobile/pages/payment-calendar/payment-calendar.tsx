import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@alfalab/core-components/button/cssm';
import { Space } from '@alfalab/core-components/space/cssm';

import { CalendarBody } from '../../../shared/components/calendar-body';

import styles from './payment-calendar.module.css';

export const PaymentCalendar = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.background} data-test-id='payment-calendar'>
            <CalendarBody />
            <div className={styles.buttonsWrapper}>
                <Space direction='horizontal' fullWidth={true}>
                    <Button
                        block={true}
                        dataTestId='close-calendar'
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        Закрыть
                    </Button>
                </Space>
            </div>
        </div>
    );
};
