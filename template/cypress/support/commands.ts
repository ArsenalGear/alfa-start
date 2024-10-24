/* eslint-disable import/no-extraneous-dependencies */

import { configure } from '@testing-library/cypress';

import '@testing-library/cypress/add-commands';

configure({ testIdAttribute: 'data-test-id' });

Cypress.Commands.add('mockRequests', () => {});
