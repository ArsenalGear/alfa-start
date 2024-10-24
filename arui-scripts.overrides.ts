// https://github.com/core-ds/arui-scripts/blob/master/packages/arui-scripts/docs/overrides.md
import path from 'path';

import { getOverrides } from '@alfabank/alfapeople-arui-scripts-presets/arui-scripts';
import dotenv from 'dotenv';

// Определяем путь к .env файлу в зависимости от окружения
const envFilePath =
    process.env.NODE_ENV === 'production'
        ? path.resolve(__dirname, '.env.production')
        : path.resolve(__dirname, '.env.development');

// Загрузка переменных окружения из .env файла
// dotenv.config();
dotenv.config({ path: envFilePath });

export default getOverrides({
    // appBasename: '/stab-remote/',
    appBasename: '/',
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
