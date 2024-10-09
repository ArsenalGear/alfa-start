export const isEmpty = (object: object): boolean => Object.keys(object).length === 0;

// Принимает объект и сортирует ключи {c: 3, a: 'dd', b: 1} --> { a:'dd', b: 1, c: 3 }
export const sortKeyObj = (obj: object): object => Object.fromEntries(Object.entries(obj).sort());

// Проверка объектов на полное совпадение набора ключей и эквивалентное значение в ключах (без вложенности)
export const isObjectsEqual = (obj1: object, obj2: object): boolean => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  return JSON.stringify(sortKeyObj(obj1)) === JSON.stringify(sortKeyObj(obj2));
};

// проверяет есть ли в плоском объекте хоть одна не пустая строка, отрезая все вложенности
// export const checkIsNotEmptyValuesInFlatObject = <T>(object: T): boolean =>
//   Object.values(object)
//     .filter(el => typeof el !== 'object')
//     .some(Boolean);
