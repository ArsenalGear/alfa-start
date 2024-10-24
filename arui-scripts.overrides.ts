// https://github.com/core-ds/arui-scripts/blob/master/packages/arui-scripts/docs/overrides.md

import {getOverrides} from '@alfabank/alfapeople-arui-scripts-presets/arui-scripts';
import dotenv from 'dotenv';

// Загрузка переменных окружения из .env файла
dotenv.config();

export default getOverrides({
    appBasename: '/stab-remote/',
    faviconPath: './public/logo.svg',
    moduleFederation: {
        name: 'stab_remote',
        exposes: {
            './StabRemote': './src/desktop/root',
            './StabRemoteMobile': './src/mobile/root',
        },
    },
    extraEnvVars: {
        REACT_APP_API_URL: process.env.REACT_APP_API_URL || 'http://localhost:8080/', // Добавляем переменную окружения
    },
});
