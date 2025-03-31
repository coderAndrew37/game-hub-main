import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b374fd651d7941a8936dc77caa78ea0b",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    try {
      const response = await axiosInstance.get<FetchResponse<T>>(
        this.endpoint,
        config
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Or handle it differently
    }
  };
}

export default ApiClient; // Export the corrected class name
