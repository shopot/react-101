import { useState, useEffect } from 'react';

export const useFetch = <T>(uri: string) => {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    if (!uri) {
      return;
    }

    async function getData(uri: string) {
      try {
        const response = await fetch(uri);

        if (response?.ok) {
          const data = (await response.json()) as T;

          setData(data);
        } else {
          setError(new Error(`HTTP Response Code: ${response?.status}`));
        }
      } catch (error) {
        setError(error as Error);
      }
    }

    setError(undefined);

    void getData(uri);
  }, [uri]);

  return { data, error };
};
