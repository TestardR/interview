import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url): any => {
  const [response, setResponse] = useState<any>();

  const fetchData = async (url: string): Promise<any> => {
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
