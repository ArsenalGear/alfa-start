export const DetailsTab = {
    PAID_OUT: 'paidOut',
    ACCRUED: 'accrued',
    WITH_HELD: 'withHeld',
} as const;

export const mapDetailsTabToTitle = {
    [DetailsTab.PAID_OUT]: 'Выплатили22',
    [DetailsTab.ACCRUED]: 'Начислили',
    [DetailsTab.WITH_HELD]: 'Удержали',
};
