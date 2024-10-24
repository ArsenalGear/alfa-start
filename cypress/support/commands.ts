/* eslint-disable import/no-extraneous-dependencies */

import { configure } from '@testing-library/cypress';

import '@testing-library/cypress/add-commands';

configure({ testIdAttribute: 'data-test-id' });

Cypress.Commands.add('mockRequests', () => {
    cy.intercept('GET', '/api/v1/sap/payment-periods', {
        fixture: 'payment-periods',
    }).as('getPaymentPeriods');

    cy.intercept('GET', '/api/v1/sap/paid-amounts?periodId=*', {
        fixture: 'paid-amounts',
    }).as('getPaidAmounts');

    cy.intercept('GET', '/api/v1/sap/paid-amounts-details?periodId=*', {
        fixture: 'paid-amounts-details',
    }).as('getPaidAmountsDetails');

    cy.intercept('GET', '/api/v1/sap/total-amount?periodId=*', {
        fixture: 'total-amount',
    }).as('getTotalAmount');

    cy.intercept('GET', '/api/v1/sap/payment-schedule?beginDate=*&endDate=*', {
        fixture: 'payment-schedule',
    }).as('getPaymentSchedule');
});
