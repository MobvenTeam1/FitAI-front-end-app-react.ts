import { useMemo } from "react";
import axios, { AxiosInstance, AxiosResponse, Method } from "axios";
import useSWR from "swr";

type AxiosRequestFunction = (
  url: string,
  data?: Record<string, unknown>,
  params?: Record<string, unknown>
) => Promise<Record<string, unknown>>;

const instance: AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// instance.defaults.headers.common['Authorization'] = `Bearer ${yourToken}`;

const createFetcher =
  (method: Method): AxiosRequestFunction =>
  async (url, data, params) => {
    try {
      const response: AxiosResponse = await instance({
        method,
        url,
        data,
        params,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

type SwrProps = {
  url: string;
  type: "get" | "post" | "put" | "delete";
  params?: Record<string, unknown>;
};

export const useCustomSWR = ({
  url = "/api/data",
  type = "get",
  params,
}: SwrProps) => {
  const fetcher = useMemo(() => {
    const get = createFetcher("GET");
    const post = createFetcher("POST");
    const put = createFetcher("PUT");
    const del = createFetcher("DELETE");

    switch (type) {
      case "get":
        return () => get(url, undefined, params);
      case "post":
        return () => post(url, params);
      case "put":
        return () => put(url, params);
      case "delete":
        return () => del(url, undefined, params);
      default:
        throw new Error(`Invalid request type: ${type}`);
    }
  }, [type, url, params]);

  const { data, error, isValidating } = useSWR(url, fetcher);

  return { data, error, isValidating };
};
