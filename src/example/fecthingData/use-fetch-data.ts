import { useEffect, useState } from 'react';

export const useFetchData = (uri: string) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!uri) {
      return;
    }

    console.log(`🐌 Start fetching data from ${uri}`);

    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => {
        setLoading(false);

        console.log(`✅ End fetching data from ${uri}`);
      })
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
};
