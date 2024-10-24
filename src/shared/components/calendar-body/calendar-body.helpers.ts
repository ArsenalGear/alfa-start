import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

import { type PaymentScheduleItemEntity } from '../../types/generated-types';

enum DayType {
    WTIME = 'wtime',
    HOLIDAY = '17',
    DAYOFF = '20',
}

/**
 * Converts date string into readable format
 *
 * @param value = '20210115'
 * @returns '15 ЯНВАРЯ'
 */
export const formatDate = (value: string) =>
    format(parse(value, 'yyyyMMdd', new Date()), 'd MMMMMM', { locale: ru });

/**
 * @param scheduleSet array of schedule items
 * @returns array of payout objects
 */
export const getPayouts = (scheduleSet: PaymentScheduleItemEntity[]) =>
    scheduleSet.filter(({ text, type, extendedText }) => {
        const summaryText = text || extendedText;

        return summaryText.length && type === DayType.WTIME;
    });

/**
 *
 * @param scheduleSet array of schedule items
 * @returns array of event objects
 */
export const getEvents = (scheduleSet: PaymentScheduleItemEntity[]): Date[] =>
    scheduleSet.reduce((acc: Date[], { text, day, type, extendedText }) => {
        const summaryText = text || extendedText;

        if (summaryText.length && type === DayType.WTIME) {
            acc.push(parse(day, 'yyyyMMdd', new Date()));
        }

        return acc;
    }, []);

export const getOffDays = (scheduleSet: PaymentScheduleItemEntity[]): Date[] =>
    scheduleSet.reduce((acc: Date[], { day, type }) => {
        if (type === DayType.DAYOFF || type === DayType.HOLIDAY) {
            acc.push(parse(day, 'yyyyMMdd', new Date()));
        }

        return acc;
    }, []);
