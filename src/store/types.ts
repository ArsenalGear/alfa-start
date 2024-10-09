export type TSetNotificationPayload = {
  isNotification?: boolean;
  notificationTitle: JSX.Element | string;
  notificationMessage?: JSX.Element | string;
  notificationStatus: string;
  notifications?: any;
};

export type TInitialNotificationValues = TSetNotificationPayload;
