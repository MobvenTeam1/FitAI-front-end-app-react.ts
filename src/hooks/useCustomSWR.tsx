import axios, { AxiosInstance, AxiosResponse, Method } from "axios";
import useSWR, { mutate } from "swr";

/**
 * Usage of the useCustomSWR hook:
 *
 * You can use the useCustomSWR hook to fetch data from a specified URL.
 * Here is an example of how to use it to fetch data from the "/carts" endpoint.
 *
 * The 'type' property specifies the HTTP method to use (in this case, "get").
 * The 'params' property is an object that contains any parameters you want to send with the request.
 *
 * In this example, we're sending a 'limit' parameter with a value of 1.
 *
 * The hook returns an object that includes the fetched data, which we're destructuring to get the 'data' property.
 *
 * ```tsx
 * const { data } = useCustomSWR({
 *   url: "/carts",
 *   type: "get",
 *   params: { limit: 1 },
 * });
 * ```
 */

// Define types for data and parameters
type Data = { [key: string]: unknown };
type Params = { [key: string]: unknown };

// Define a type for the fetcher function
type FetcherFunc = (url: string, data?: Data, params?: Params) => Promise<Data>;

// Create an Axios instance with a base URL
const instance: AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// instance.defaults.headers.common['Authorization'] = `Bearer ${yourToken}`;

// Function to create a fetcher for a specific HTTP method
const createFetcher =
  (method: Method): FetcherFunc =>
  (url, data, params) =>
    instance({ method, url, data, params }).then(
      (res: AxiosResponse) => res.data
    );

// Create fetchers for GET, POST, PUT, DELETE methods
const fetchers = {
  get: createFetcher("GET"),
  post: createFetcher("POST"),
  put: createFetcher("PUT"),
  delete: createFetcher("DELETE"),
};

// Define the properties for the SWR hook
type SwrProps = {
  url: string;
  type: keyof typeof fetchers;
  params?: Params;
};

// Define the custom SWR hook
export const useCustomSWR = ({
  url = "/api/data",
  type = "get",
  params,
}: SwrProps) => {
  // Use SWR to fetch data from the specified URL
  const { data, error, isValidating } = useSWR(url, () =>
    fetchers[type](url, undefined, params)
  );

  // Define a function to fetch and mutate data
  const fetchAndMutate = async (
    type: keyof typeof fetchers,
    url: string,
    data?: Data,
    params?: Params
  ) => {
    const response = await fetchers[type](url, data, params);
    mutate(url);
    return response;
  };

  return {
    data,
    error,
    isValidating,
    get: (url: string, params: Params) =>
      fetchAndMutate("get", url, undefined, params),
    post: (url: string, data: Data, params: Params) =>
      fetchAndMutate("post", url, data, params),
    put: (url: string, data: Data, params: Params) =>
      fetchAndMutate("put", url, data, params),
    delete: (url: string, params: Params) =>
      fetchAndMutate("delete", url, undefined, params),
  };
};
