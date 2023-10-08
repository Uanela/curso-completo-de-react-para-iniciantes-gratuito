import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok)
            throw Error("Não foi possivel carregar os dados para este recurso");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setIsError(false);
          setError(null);
        })
        .catch((err) => {
          setData(null);
          setIsLoading(false);
          setIsError(true);
          setError(err);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, isError, error };
};
