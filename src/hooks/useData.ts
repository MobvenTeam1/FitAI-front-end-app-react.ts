/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useData.ts
import useSWR, { SWRResponse, SWRConfiguration } from "swr";
import GetClient from "../api/models/GetClient";
import DeleteClient from "../api/models/DeleteClient";
import PostClient from "../api/models/PostClient";
import PutClient from "../api/models/PutClient";

export const MultiFormData = "multipart/form-data";
export const ApplicationJson = "application/json";
export const withHandleControl = {
  revalidateOnMount: false,
  revalidateOnFocus: false,
};

const getClient = new GetClient();
const deleteClient = new DeleteClient();
const jsonPostClient = new PostClient();
const jsonPutClient = new PutClient();

const fetcher = async ([url, method, data, contentType]: [
  string,
  string,
  any?,
  string?
]) => {
  switch (method) {
    case "GET":
      return getClient.get<any>(url, data);
    case "POST":
      if (contentType === MultiFormData) {
        return jsonPostClient.post<any>(url, data, MultiFormData);
      } else {
        return jsonPostClient.post<any>(url, data, ApplicationJson);
      }
    case "PUT":
      if (contentType === MultiFormData) {
        return jsonPutClient.put<any>(url, data, MultiFormData);
      } else {
        return jsonPutClient.put<any>(url, data, ApplicationJson);
      }
    case "DELETE":
      return deleteClient.delete<any>(url);
    default:
      throw new Error("Unsupported method");
  }
};

export const useData = <T>(
  url: string,
  method: string = "GET",
  data?: any,
  contentType: string = ApplicationJson,
  config?: SWRConfiguration<T, any>
): SWRResponse<T, any> => {
  return useSWR<T>([url, method, data, contentType], fetcher, config);
};
