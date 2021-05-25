import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number): string => {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearInterval(handler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
