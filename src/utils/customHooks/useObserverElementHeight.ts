import { useEffect, useRef, useState } from 'react';

export const useObserverElementHeight = () => {
  const ref: any = useRef();
  const [height, setHeight] = useState<null | number>(null);

  const observer = useRef(
    // @ts-ignore
    new ResizeObserver((entries: { contentRect: { height: any } }[]) => {
      const { height } = entries[0].contentRect;
      setHeight(height);
    }),
  );

  useEffect(() => {
    observer.current.observe(ref.current);
  }, [ref, observer]);

  return [ref, height];
};
