// modeInKeys при необходимости принимает массив ключей, необходимых отправить с ключом mode: in (списки)
export const serializedFilterData = (values: any, modeInKeys?: string[]) => {
  const resultObj = {} as any;
  const keys = Object.keys(values); // собираем ключи формика в массив
  keys.forEach((key) => {
    // проверяем есть ли значение у ключей пришедшего объекта формика
    if (values[key]) {
      // todo рефакторинг
      // тип источника предполагает отправку значения фильтра массивом
      if (modeInKeys?.includes(key)) {
        // @ts-ignore
        resultObj[key] = {
          include: true,
          mode: 'in',
          values: [values[key]],
        };
      } else {
        // @ts-ignore
        // если есть то записываем это значение каждое в свой ключ
        resultObj[key] = {
          include: true,
          mode: 'icontains',
          value: values[key],
        };
      }
    }
  });

  return resultObj;
};
