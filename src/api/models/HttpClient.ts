// src/api/HttpClient.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = "http://165.22.93.225:5001/api";

export default class HttpClient {
  protected client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL: BASE_URL });
  }

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.request<T>(config);
  }
}

export const tempInstance = axios.create({
  baseURL: BASE_URL
});