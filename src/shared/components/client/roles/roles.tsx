import React, { type FC } from 'react';
import { SpiralCalendarEmoji } from '@alfabank/alfapeople-components/emojis/spiral-calendar-emoji';

import { Gap } from '@alfalab/core-components/gap/cssm';
import { SuperEllipse } from '@alfalab/core-components/icon-view/cssm/super-ellipse';
import { useMatchMedia } from '@alfalab/core-components/mq';
import { Space } from '@alfalab/core-components/space/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';

import styles from './roles.module.css';

interface AmountBoxProps {
    large?: boolean;
}

export const Roles: FC<AmountBoxProps> = ({ large = false }) => {
    const [isMobile] = useMatchMedia('--mobile');

    return isMobile ? (
        <Space fullWidth={true} size={2}>
            <Typography.Text view='primary-small' color='secondary' tag='div'>
                Мобильная версия дашборд
            </Typography.Text>
        </Space>
    ) : (
        <Space fullWidth={true} size={large ? 4 : 2}>
            <div className={styles.wrapper}>
                <Typography.Title className={styles.title} view='large' font='system' tag='h1'>
                    Управление доступами
                </Typography.Title>
                <Gap size={20} />
                <div className={styles.content} data-test-id='info-page-content'>
                    <SuperEllipse className={styles.icon} size={80} backgroundColor='#f3f4f5'>
                        <SpiralCalendarEmoji />
                    </SuperEllipse>
                    <Typography.TitleResponsive tag='h2' view='small' className={styles.title}>
                        Страница в разработке
                    </Typography.TitleResponsive>
                    <Typography.Text view='primary-medium' color='secondary'>
                        Мы скоро все сделаем
                    </Typography.Text>
                </div>
            </div>
        </Space>
    );
};
