import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    url && (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
      setLoading(false);
    })();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
};

export default useFetch;
