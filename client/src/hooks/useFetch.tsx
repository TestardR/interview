import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [response, setResponse] = useState<any>(null);

  const fetchData = async (url) => {
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
