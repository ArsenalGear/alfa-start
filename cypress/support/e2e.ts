/* eslint-disable import/no-extraneous-dependencies */
import '@cypress/code-coverage/support';
import './commands';

Cypress.on('window:before:load', (window: Cypress.AUTWindow & { sp: () => void }) => {
    window.sp = cy.stub().as('sp');
});
