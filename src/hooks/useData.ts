/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useData.ts
import useSWR, { SWRResponse } from "swr";
import api from '../old-api';
export const MultiFormData = "multipart/form-data";
export const ApplicationJson = "application/json";
export const withHandleControl = {
  revalidateOnMount: false,
  revalidateOnFocus: false,
  onErrorRetry: () => {
    return;
  }
};

const fetcher = async ([url, method, data, contentType]: [
  string,
  string,
  any?,
  string?
]) => {
  switch (method) {
    case "GET":
      return api.get<any>(url, data);
    case "POST":
      return api.post<any>(url, data, contentType || ApplicationJson);
      // if (contentType === MultiFormData) {
      //   return api.post<any>(url, data, MultiFormData);
      // } else {
      //   return api.post<any>(url, data, ApplicationJson);
      // }
    default:
      throw new Error("Unsupported method");
  }
  // return api.request(method, url, data, contentType)
};

export const useData = <T>(
  url: string,
  method: string = "GET",
  data?: any,
  contentType: string = ApplicationJson,
  // config?: SWRConfiguration<T, any>
): SWRResponse<T, any> => {
  return useSWR<T>([url, method, data, contentType], fetcher, withHandleControl);
};
