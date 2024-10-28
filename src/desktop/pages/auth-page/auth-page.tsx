import React, { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { type FormikProps, useFormik } from 'formik';

import { ButtonDesktop } from '@alfalab/core-components/button/desktop';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { Input } from '@alfalab/core-components/input';
import { PasswordInput } from '@alfalab/core-components/password-input';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsFetchError, useGetPaymentPeriodsQuery } from '../../../shared/slices/api-slice';
// import { PageHeader } from '../../components/page-header';
import { Typography } from '@alfalab/core-components/typography/cssm';

import { INITIAL_AUTH_VALUES, VALIDATE_LOGIN_FORM } from '../../../shared/constants/auth-page';
import { type AuthEntity } from '../../../shared/types/generated-types';

import styles from './auth-page.module.css';

export const AuthPage: FC = () => {
    const navigate = useNavigate();
    const loginData: FormikProps<AuthEntity> = useFormik<AuthEntity>({
        initialValues: INITIAL_AUTH_VALUES,
        // validateOnMount: true,
        // validateOnChange: formSubmit,
        validateOnChange: false,
        // enableReinitialize: true,
        validationSchema: VALIDATE_LOGIN_FORM,
        onSubmit: (values) => {
            // console.log(1, 'values', values);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const finalFormData = {
                ...values,
                grant_type: 'password',
                client_id: 'account',
            };

            navigate('/client/dashboard');

            // dispatch(loginUserRequest({values: finalFormData, navigate}));
        },
    });

    const { handleSubmit, values, handleChange, errors } = loginData;

    // const dispatch = useDispatch(); 12
    // const isError = useSelector(selectIsFetchError);

    // if (isSuccess && noPayments) {
    //     return (
    //         <React.Fragment>
    //             <InfoPage
    //                 view='info'
    //                 handleClick={() => {
    //                     trackAlfaMetrics({
    //                         category: 'link',
    //                         action: 'click',
    //                         label: 'payment-calendar',
    //                     });
    //                     dispatch(setSidePanelVisible(true));
    //                 }}
    //             />
    //             <CalendarSidePanel />
    //         </React.Fragment>
    //     );
    // }

    // if (isError) {
    //     return (
    //         <React.Fragment>
    //             <PageHeader />
    //             <InfoPage
    //                 view='error'
    //                 handleClick={() => {
    //                     document.location.reload();
    //                 }}
    //             />
    //         </React.Fragment>
    //     );
    // }
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <Typography.Title
                    className={styles.title}
                    tag='h1'
                    showSkeleton={false}
                    view='medium'
                    font='system'
                >
                    Авторизация
                </Typography.Title>
                <Gap size={16} />
                <form className={styles.login__form} id='loginForm'>
                    <div className={styles.login_form__input_wrapper}>
                        <Input
                            // onClear
                            // hint="подсказка"
                            // onMouseDown
                            // onClick
                            // defaultValue
                            // disabled={false}
                            error={values.username ? false : errors.username}
                            block={true}
                            placeholder='Имя пользователя'
                            label='Введите имя пользователя'
                            name='username'
                            value={values.username}
                            onChange={handleChange}
                            size={48}
                            // breakpoint={BREAKPOINT}
                        />
                    </div>
                    <Gap size={48} />
                    <div className={styles.login_form__input_wrapper}>
                        <PasswordInput
                            error={values.password ? false : errors.password}
                            block={true}
                            placeholder='Пароль'
                            label='Введите пароль'
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            type='password'
                        />
                    </div>
                    <Gap size={64} />
                    <ButtonDesktop onClick={() => handleSubmit()} disabled={false} view='primary'>
                        Войти
                    </ButtonDesktop>
                    {/* <Button dataTestId='open-calendar'> */}
                    {/*    <Typography.Text view='primary-medium'>Войти</Typography.Text> */}
                    {/* </Button> */}
                </form>
            </div>
            {/* <PageHeader /> */}
        </React.Fragment>
    );
};
