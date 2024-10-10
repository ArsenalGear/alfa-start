import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { logout } from 'containers/LoginPage/store/LoginSlice';
import { axiosForUrlEncoded } from 'utils/api/request';
import { clearNotification } from 'store/reducers';
// import AppErrorBoundary from 'components/custom-components/ErrorBoundaries/AppErrorBoundary/AppErrorBoundary';
import React from 'react';
import { store, persistor } from './store/configureStore';
import App from './App';

// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');
// const root = ReactDOM.createRoot(rootElement);

const client = new QueryClient();

const container = document.getElementById('root');
if (!container) {
  throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение');
}
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={client}>
        {/*<AppErrorBoundary>*/}
        <App />
        {/*</AppErrorBoundary>12*/}
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
);

const { dispatch } = store;
axiosForUrlEncoded.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && !window.location.href.includes('/auth')) {
      // dispatch(logout());
      setTimeout(() => {
        dispatch(clearNotification());
      }, 50);
    }
    throw error;
  },
);
