import React, { FC } from 'react';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
// import { AppWrapper } from 'containers/styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification, setNotification } from 'store/reducers';
// import { loaderLabelChecker } from 'utils/redux/loader';
import { isEmpty } from 'utils/validation';
import { Routes } from './routes';
import { createNotificationDataSelector, createLoadingSelector } from './store/selectors';

const App: FC = () => {
  const dispatch = useDispatch();

  const loadingData = useSelector(createLoadingSelector());
  const notificationData = useSelector(createNotificationDataSelector());

  const singleNotificationLength = notificationData.notifications.length === 1;

  const isSingleNotification = (elem: string) => {
    if (singleNotificationLength) {
      dispatch(clearNotification());
    } else {
      dispatch(
        setNotification({
          notificationTitle: 'Ошибка',
          notificationStatus: 'error-status',
          notifications: deleteNotify(elem),
        }),
      );
    }
  };

  const deleteNotify = (elem: any) =>
    notificationData.notifications.filter(
      (e: any, index: number) => elem !== notificationData.notifications[index][0],
    );
  // 1
  const returnBackOrFrontNotify = () => {
    if (notificationData.notifications.length > 0) {
      return notificationData.notifications.map((e: any[], i: number) => (
        <React.Fragment key={e[0]}>
          {/*<NotificationWindow*/}
          {/*  style={{ bottom: `${(i + 1) * 5.5 - 4.5}rem` }}*/}
          {/*  handleClose={() => isSingleNotification(e[0])}*/}
          {/*  notificationTitle={notificationData.notificationTitle}*/}
          {/*  message={`${e[0]}: ${e[1]}`}*/}
          {/*  status={notificationData.notificationStatus}*/}
          {/*/>*/}
        </React.Fragment>
      ));
    }
    return (
      <>
        {/*<NotificationWindow*/}
        {/*  handleClose={() => dispatch(clearNotification())}*/}
        {/*  notificationTitle={notificationData.notificationTitle}*/}
        {/*  message={notificationData.notificationMessage}*/}
        {/*  status={notificationData.notificationStatus}*/}
        {/*/>*/}
      </>
    );
  };

  return (
    <>
      {/*<AppWrapper>*/}
      <BrowserRouter>
        <title>App</title>
        <>{console.log('4', 41)}</>
        <Routes />
      </BrowserRouter>

      {!isEmpty(loadingData) && (
        <>
          {/*<MainLoader*/}
          {/*  open={!isEmpty(loadingData)}*/}
          {/*  label={loaderLabelChecker(loadingData as { type: string })}*/}
          {/*/>*/}
        </>
      )}
      {/*</AppWrapper>*/}
      {notificationData.isNotification && returnBackOrFrontNotify()}
    </>
  );
};

export default App;
