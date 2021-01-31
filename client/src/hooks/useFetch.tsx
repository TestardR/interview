import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = <T,>(url: string) => {
  const [response, setResponse] = useState<T>();

  const fetchData = async (url: string) => {
    try {
      const res = await axios.get(url);
      setResponse(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return response;
};
