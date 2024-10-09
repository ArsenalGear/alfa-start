import React from 'react';

export const serializedSortData = <T extends object>(
  arg: T,
  setArg?: React.Dispatch<React.SetStateAction<T>>,
) => {
  let resultObject = {} as T;
  const keys = Object.keys(arg);
  const clickedSortKey = keys[0];

  if (setArg) {
    setArg((prev) => {
      const sortObject = {
        ...prev,
        [clickedSortKey]:
          prev[clickedSortKey as keyof T] === arg[clickedSortKey as keyof T]
            ? ''
            : arg[clickedSortKey as keyof T],
      };
      resultObject = sortObject;
      return sortObject;
    });
  }
  // сначала фильтруем от пустых значений(отжатие)
  const sort: string[] = Object.keys(resultObject)
    .filter((el) => resultObject[el as keyof T])
    .map((key) => (resultObject[key as keyof T] === 'asc' ? `-${key}` : key));

  return sort;
};
