// export const AuthPage = {
//     PAID_OUT: 'paidOut',
//     ACCRUED: 'accrued',
//     WITH_HELD: 'withHeld',
// } as const;
//
// export const mapDetailsTabToTitle = {
//     [AuthPage.PAID_OUT]: 'Выплатили22',
//     [AuthPage.ACCRUED]: 'Начислили',
//     [AuthPage.WITH_HELD]: 'Удержали',
// };
import * as Yup from 'yup';

import { type AuthEntity } from '../types/generated-types';

export const INITIAL_AUTH_VALUES = {
    username: '',
    password: '',
} as AuthEntity;

export const VALIDATE_LOGIN_FORM = Yup.object({
    username: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле'),
});
