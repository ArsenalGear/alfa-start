import { useCallback, useRef } from 'react';

export default function useDebounce(callback: any, delay = 1000) {
  const timer: any = useRef();

  return useCallback(
    (...args: any) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
