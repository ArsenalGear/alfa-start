export const AllStatusesToString = (status: string | boolean) => {
  switch (status) {
    case true:
      return 'Положительный';
    case false:
      return 'Отрицательный';
    case 'FINISHED':
      return 'Закончена';
  }
  return status;
};

export const classNameChecker = (status: string) => {
  switch (status) {
    case 'active':
    case 'activeConnections':
    case 'connected':
  }
  return status;
};

export const changeStatusChecker = (status: string) => {
  switch (status) {
    case 'true':
      return 'Архивный';
    case 'false':
      return 'Действующий';
  }
  return status;
};
