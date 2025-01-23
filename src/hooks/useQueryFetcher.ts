import { axiosInstance } from "../api/axios";

const useQueryFetcher = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export default useQueryFetcher;
