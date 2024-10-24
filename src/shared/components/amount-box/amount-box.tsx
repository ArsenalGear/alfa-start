import React, {type FC} from 'react';

import {Amount} from '@alfalab/core-components/amount/cssm';
import {useMatchMedia} from '@alfalab/core-components/mq';
import {Space} from '@alfalab/core-components/space/cssm';
import {Typography} from '@alfalab/core-components/typography/cssm';

interface AmountBoxProps {
    large?: boolean;
    subtitle: string;
    value: number;
}

export const AmountBox: FC<AmountBoxProps> = ({large = false, subtitle, value}) => {
    const [isMobile] = useMatchMedia('--mobile');

    return isMobile ? (
        <Space fullWidth={true} size={2}>
            <Typography.TitleMobile tag='div' view={large ? 'large' : 'xsmall'} font='system'>
                <Amount
                    currency='RUR'
                    minority={100}
                    transparentMinor={false}
                    value={value}
                    view='withZeroMinorPart'
                    bold={large ? 'full' : 'major'}
                />
            </Typography.TitleMobile>
            <Typography.Text view='primary-small' color='secondary' tag='div'>
                {subtitle}
            </Typography.Text>
        </Space>
    ) : (
        <Space fullWidth={true} size={large ? 4 : 2}>
            <p>shared amount-box </p>
            <Typography.Title tag='div' view={large ? 'medium' : 'xsmall'}>
                <Amount
                    currency='RUR'
                    minority={100}
                    transparentMinor={true}
                    value={value}
                    view='withZeroMinorPart'
                />
            </Typography.Title>
            <Typography.Text view='primary-small' color='secondary' tag='div'>
                {subtitle}
            </Typography.Text>
        </Space>
    );
};
