import React, {type FC} from 'react';

import {Amount} from '@alfalab/core-components/amount/cssm';
import {Tooltip} from '@alfalab/core-components/tooltip/cssm';
import {Typography} from '@alfalab/core-components/typography/cssm';
import {InformationCircleMIcon} from '@alfalab/icons-glyph/InformationCircleMIcon';

import {type PaidAmountEntity} from '../../types/generated-types';

import styles from './amount-details-row.module.css';

type AmountDetailsRowProps = Pick<PaidAmountEntity,
    'amountName' | 'amountDate' | 'amountSum' | 'amountNum' | 'amountTooltip'>;

export const AmountDetailsRow: FC<AmountDetailsRowProps> = ({
                                                                amountName,
                                                                amountDate,
                                                                amountSum,
                                                                amountNum,
                                                                amountTooltip,
                                                            }) => {
    const sum = Number(amountSum.replace(/\D/g, ''));

    return (
        <div className={styles.wrapper}>
            <div className={styles.amount}>
                <div className={styles.amountName}>
                    <p>shared amount-details-row </p>
                    <Typography.Text view='primary-medium' tag='div'>
                        {amountName}
                    </Typography.Text>
                    {amountTooltip && (
                        <Tooltip
                            content={<div>{amountTooltip}</div>}
                            trigger='hover'
                            position='bottom'
                            fallbackPlacements={['right', 'top']}
                            targetClassName={styles.tooltip}
                            contentClassName={styles.contentTooltip}
                        >
                            <InformationCircleMIcon color='#c5c5c7' width={20} height={20}/>
                        </Tooltip>
                    )}
                </div>
                <Typography.Text view='primary-medium' tag='div'>
                    <Amount
                        bold='none'
                        value={sum}
                        minority={100}
                        currency='RUB'
                        view='withZeroMinorPart'
                    />
                </Typography.Text>
            </div>
            <div className={styles.date}>
                <Typography.Text view='primary-small' color='secondary' tag='div'>
                    {amountDate}
                </Typography.Text>
                {amountNum && (
                    <Typography.Text view='primary-small' color='secondary' tag='div'>
                        {amountNum}
                    </Typography.Text>
                )}
            </div>
        </div>
    );
};
