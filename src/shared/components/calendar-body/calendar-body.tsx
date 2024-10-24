import React, {type FC, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {MoneyBagEmoji} from '@alfabank/alfapeople-components/emojis/money-bag-emoji';
import {PartyPopperEmoji} from '@alfabank/alfapeople-components/emojis/party-popper-emoji';
import {PresentEmoji} from '@alfabank/alfapeople-components/emojis/present-emoji';
import {lastDayOfMonth, lightFormat, startOfMonth} from 'date-fns';

import {CalendarDesktop, type CalendarDesktopProps,} from '@alfalab/core-components/calendar/cssm/desktop';

import {useGetPaymentPeriodsQuery, useGetPaymentScheduleQuery} from '../../slices/api-slice';

import {getEvents, getOffDays, getPayouts} from './calendar-body.helpers';
import {selectCalendarDates} from './selectors';

import styles from './calendar-body.module.css';

const mapPayoutTextToIcon: Record<string, React.ReactElement> = {
    'Заработная плата': <PartyPopperEmoji size={24}/>,
    Аванс: <MoneyBagEmoji size={24}/>,
    'Выплата премии': <PresentEmoji size={24}/>,
};

interface CalendarBodyProps {
    isCalendarDivider?: boolean;
}

export const CalendarBody: FC<CalendarBodyProps> = ({isCalendarDivider = true}) => {
    const now = Date.now();

    useGetPaymentPeriodsQuery();
    const [beginDate, setBeginDate] = useState(startOfMonth(now));
    const [endDate, setEndDate] = useState(lastDayOfMonth(now));

    const {data: scheduleSet = [], isFetching} = useGetPaymentScheduleQuery({
        beginDate: lightFormat(beginDate, "yyyy-MM-dd'T'HH:mm:ss"),
        endDate: lightFormat(endDate, "yyyy-MM-dd'T'HH:mm:ss"),
    });

    const handleMonthChange: CalendarDesktopProps['onMonthChange'] = (month) => {
        setBeginDate(startOfMonth(month));
        setEndDate(lastDayOfMonth(month));
    };
    const {minDate, maxDate} = useSelector(selectCalendarDates);
    const {events, payouts, offDays} = useMemo(
        () => ({
            events: getEvents(scheduleSet ?? []),
            payouts: getPayouts(scheduleSet ?? []),
            offDays: getOffDays(scheduleSet ?? []),
        }),
        [scheduleSet],
    );

    return (
        <div>
            <p>shared calendar-body </p>
            <CalendarDesktop
                events={events}
                month={beginDate.getTime()}
                onMonthChange={handleMonthChange}
                className={styles.calendar}
                minDate={minDate}
                maxDate={maxDate}
                selectorView='month-only'
                responsive={true}
                holidays={offDays}
            />
            {/* <div> */}
            {/*    {isCalendarDivider && <Divider />} */}
            {/*    {isFetching */}
            {/*        ? Array.from(Array(2).keys()).map((it) => ( */}
            {/*              <div className={styles.itemContainer} key={it}> */}
            {/*                  <SuperEllipse */}
            {/*                      size={48} */}
            {/*                      className={styles.iconContainer} */}
            {/*                      backgroundColor='#f3f4f5' */}
            {/*                  /> */}
            {/*                  <div className={styles.itemDetails}> */}
            {/*                      <Space size={4}> */}
            {/*                          <Skeleton visible={true}> */}
            {/*                              <div style={{ width: '140px', height: '22px' }} /> */}
            {/*                          </Skeleton> */}
            {/*                          <Skeleton visible={true}> */}
            {/*                              <div style={{ width: '80px', height: '18px' }} /> */}
            {/*                          </Skeleton> */}
            {/*                      </Space> */}
            {/*                  </div> */}
            {/*              </div> */}
            {/*          )) */}
            {/*        : payouts.map(({ day, extendedText, text }) => { */}
            {/*              const Icon = mapPayoutTextToIcon[text]; */}

            {/*              return ( */}
            {/*                  <div className={styles.itemContainer} key={day}> */}
            {/*                      <SuperEllipse */}
            {/*                          size={48} */}
            {/*                          className={styles.iconContainer} */}
            {/*                          backgroundColor='#f3f4f5' */}
            {/*                      > */}
            {/*                          {Icon} */}
            {/*                      </SuperEllipse> */}
            {/*                      <div className={styles.itemDetails}> */}
            {/*                          <span className={styles.itemTitle}> */}
            {/*                              {text || extendedText} */}
            {/*                          </span> */}
            {/*                          <span className={styles.itemSubTitle}>{formatDate(day)}</span> */}
            {/*                      </div> */}
            {/*                  </div> */}
            {/*              ); */}
            {/*          })} */}
            {/* </div> */}
        </div>
    );
};
