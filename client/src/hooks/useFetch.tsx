import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState(null);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return response;
};
