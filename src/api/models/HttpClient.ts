// src/api/HttpClient.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = "https://fakestoreapi.com";

export default class HttpClient {
  protected client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL: BASE_URL });
  }

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.request<T>(config);
  }
}