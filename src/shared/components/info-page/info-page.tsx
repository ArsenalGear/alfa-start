import React, { type FC } from 'react';
import { PersonShruggingEmoji } from '@alfabank/alfapeople-components/emojis/person-shrugging-emoji';
import { SpiralCalendarEmoji } from '@alfabank/alfapeople-components/emojis/spiral-calendar-emoji';

import { Button } from '@alfalab/core-components/button/cssm';
import { SuperEllipse } from '@alfalab/core-components/icon-view/cssm/super-ellipse';
import { useMatchMedia } from '@alfalab/core-components/mq';
import { Typography } from '@alfalab/core-components/typography/cssm';

import styles from './info-page.module.css';

interface InfoPageProps {
    view: 'error' | 'info';
    handleClick: () => void;
}

export const InfoPage: FC<InfoPageProps> = ({ view, handleClick }) => {
    const title = view === 'info' ? 'Пока нет выплат' : 'Не удалось загрузить';
    const text =
        view === 'info'
            ? 'Посмотрите календарь и узнаете, когда придёт зарплата'
            : 'Попробуйте снова — должно сработать';
    const buttonText = view === 'info' ? 'В календарь выплат' : 'Попробовать ещё раз';

    const [isMobile] = useMatchMedia('--mobile');

    return (
        <div className={styles.wrapper}>
            <p>shared info-page </p>
            <div className={styles.content} data-test-id='info-page-content'>
                <SuperEllipse className={styles.icon} size={80} backgroundColor='#f3f4f5'>
                    {view === 'info' ? <SpiralCalendarEmoji /> : <PersonShruggingEmoji />}
                    <p>Error boundary</p>
                </SuperEllipse>
                <Typography.TitleResponsive tag='h1' view='small' className={styles.title}>
                    {title}
                </Typography.TitleResponsive>
                <Typography.Text view='primary-medium' color='secondary'>
                    {text}
                </Typography.Text>
            </div>
            <Button
                view='primary'
                block={isMobile}
                className={styles.button}
                onClick={handleClick}
                dataTestId={view === 'info' ? 'calendar-button' : 'retry-button'}
            >
                {buttonText}
            </Button>
        </div>
    );
};
