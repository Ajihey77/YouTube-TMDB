import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axios";

const useDataFetcher = <T>(url: string): fetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchDats = async () => {
      try {
        const { data } = await axiosInstance.get(url);
        const result: T = data;
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchDats();
  }, [url]);
  return { data, loading };
};

export default useDataFetcher;
