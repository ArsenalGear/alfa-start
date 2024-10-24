/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8080',
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config);

            return config;
        },
    },
    viewportWidth: 1280,
    viewportHeight: 900,
    video: false,
});
