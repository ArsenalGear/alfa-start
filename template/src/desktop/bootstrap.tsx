import React from 'react';
import { createRoot } from 'react-dom/client';

import { config } from '../shared/config';

import { Root } from './root';

import './index.css';

const rootElem = document.getElementById('root');
const root = createRoot(rootElem as HTMLElement);

root.render(
    <React.StrictMode>
        <Root basename={config.basename} />
    </React.StrictMode>,
);
