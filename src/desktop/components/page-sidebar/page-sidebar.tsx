import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Accordion } from '@alfalab/core-components/accordion';
import { Button } from '@alfalab/core-components/button/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { Grid } from '@alfalab/core-components/grid';
import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography/cssm';
import DoorOpenMIcon from '@alfalab/icons-glyph/DoorOpenMIcon';

import {
    AccordionSection,
    AccordionService,
} from '../../../shared/types/generated-types/accordion-entity';

import styles from './page-sidebar.module.css';

export const PageSidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getServiceName = (url: string): AccordionService => {
        const parts = url.split('/').filter(Boolean);

        if (parts.length > 0) {
            if (parts[0] === AccordionService.ADMIN) {
                return AccordionService.ADMIN;
            }
        }

        return AccordionService.CLIENT;
    };

    const getSectionName = (url: string) => {
        const parts = url.split('/').filter(Boolean);

        if (parts.length > 1 && parts[1] === AccordionSection.ROLES) {
            return AccordionSection.ROLES;
        }

        return AccordionSection.DASHBOARD;
    };

    const [accordionService, setAccordionService] = useState<AccordionService | boolean>(() =>
        getServiceName(location.pathname),
    );
    const [accordionSection, setAccordionSection] = useState<AccordionSection>(() =>
        getSectionName(location.pathname),
    );

    return (
        <Grid.Col width='3'>
            <section className={styles.sidebar}>
                <Typography.Text color='secondary' view='caps' weight='bold'>
                    Сервисы
                </Typography.Text>
                <Gap size={32} />

                <Accordion
                    expanded={accordionService === AccordionService.CLIENT}
                    header='Клиентский'
                    controlPosition='end'
                    onClick={() =>
                        accordionService === AccordionService.CLIENT
                            ? setAccordionService(false)
                            : setAccordionService(AccordionService.CLIENT)
                    }
                >
                    <div className={styles.accordion__link}>
                        <Link
                            pseudo={accordionSection === AccordionSection.DASHBOARD}
                            view='primary'
                            underline={false}
                            onClick={() => {
                                navigate('/client/dashboard');
                                setAccordionSection(AccordionSection.DASHBOARD);
                            }}
                        >
                            Дашбоард
                        </Link>
                    </div>
                    <Gap size={8} />
                    <div className={styles.accordion__link}>
                        <Link
                            pseudo={accordionSection === AccordionSection.ROLES}
                            view='primary'
                            underline={false}
                            onClick={() => {
                                navigate('/client/roles');
                                setAccordionSection(AccordionSection.ROLES);
                            }}
                        >
                            Список ролей {accordionSection}
                        </Link>
                    </div>
                    <Gap size={1} />
                </Accordion>
                <Gap size={24} />
                <Accordion
                    expanded={accordionService === AccordionService.ADMIN}
                    header='Админский'
                    controlPosition='end'
                    onClick={() =>
                        accordionService === AccordionService.ADMIN
                            ? setAccordionService(false)
                            : setAccordionService(AccordionService.ADMIN)
                    }
                >
                    <div className={styles.accordion__link}>
                        <Link view='primary' underline={false}>
                            В разработке
                        </Link>
                    </div>
                </Accordion>
                <Gap size={32} />
                {/* <Button */}
                {/*    view='ghost' */}
                {/*    size='xxs' */}
                {/*    onClick={() => navigate('/')} */}
                {/* > */}
                {/*    Выйти */}
                {/* </Button> */}
                <Button
                    className={styles.logout__button}
                    size={40}
                    view='primary'
                    block={true}
                    leftAddons={<DoorOpenMIcon />}
                    onClick={() => navigate('/')}
                >
                    Выйти
                </Button>
            </section>
        </Grid.Col>
    );
};
