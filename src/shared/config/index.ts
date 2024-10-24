const BASE_URL = process.env.REACT_APP_API_URL || `${__webpack_public_path__}api/v1/sap`;
// const BASE_URL = `${__webpack_public_path__}api/v1/sap` || process.env.REACT_APP_API_URL;
// console.log(11111111111111111111111111, 'BASE_URL', BASE_URL);

export const config = {
    basename: process.env.ROUTER_BASENAME,
    api: {
        posts: `${BASE_URL}/posts`,
        paidAmounts: `${BASE_URL}/paid-amounts`,
        paidAmountsDetails: `${BASE_URL}/paid-amounts-details`,
        paymentPeriods: `${BASE_URL}/payment-periods`,
        totalAmount: `${BASE_URL}/total-amount`,
        paymentSchedule: `${BASE_URL}/payment-schedule`,
        downloadPayslipPdf: `${BASE_URL}/download-payslip-pdf`,
    },
};
