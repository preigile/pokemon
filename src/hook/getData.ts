import { useEffect, useState } from 'react';
import req from '../utils/request';
import Endpoints from '../enums/endpoints';

interface IResult<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
}

const useData = <T>(endpoint: Endpoints): IResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint);

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
