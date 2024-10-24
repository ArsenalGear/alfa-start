import React, {type FC, Suspense} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Loader} from '@alfalab/core-components/loader/cssm';
import {SidePanelDesktop} from '@alfalab/core-components/side-panel/cssm/desktop';

import {selectIsSidePanelVisible, setSidePanelVisible} from '../../../shared/slices/app-slice';

const CalendarBody = React.lazy(() => import('../../../shared/components/calendar-body'));

export const CalendarSidePanel: FC = () => {
    const dispatch = useDispatch();
    const isSidePanelVisible = useSelector(selectIsSidePanelVisible);

    const closeSidePanel = () => {
        dispatch(setSidePanelVisible(false));
    };

    return (
        <SidePanelDesktop
                open={isSidePanelVisible}
                onClose={closeSidePanel}
                size='s'
                dataTestId='calendar-side-panel'
            >
                <p>calendar-side-panel.tsx</p>
                <SidePanelDesktop.Header hasCloser={true} title='Календарь выплат'/>
                <SidePanelDesktop.Content>
                    <Suspense fallback={<Loader/>}>
                        <CalendarBody isCalendarDivider={false}/>
                    </Suspense>
                </SidePanelDesktop.Content>
            </SidePanelDesktop>
    );
};
