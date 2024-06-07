// src/api/HttpClient.ts
import axios, { AxiosHeaders, AxiosInstance } from 'axios';

const BASE_URL = "http://165.22.93.225:5001/api";

class HttpClient {
  protected client: AxiosInstance;
  private static _instance: HttpClient;
  constructor() {
    this.client = axios.create({ baseURL: BASE_URL });
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      }
    )
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        // switch (error.code) {
        //   case 401:
        //     break;
        //   default:
        //     break;
        // }
        return Promise.reject(error);
      }
    )
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  async get<T>(url: string, params = {}): Promise<T> {
    const { data } = await this.client.get(url, params);
    return data;
  }

  async post<T>(url: string, payload: T, type: string): Promise<T> {
    const { data } = await this.client.post(url, payload, {
      headers: {
        "Content-Type": type
      }
    })
    return data;
  }

  async put<T>(url: string, payload: T, type: string): Promise<T> {
    const { data } = await this.client.put(url, payload, {
      headers: {
        "Content-Type": type
      }
    });
    return data;
  }

  async delete<T>(url: string): Promise<T> {
    const { data } = await this.client.delete(url);
    return data;
  }

  async request<T>(method: string, url: string, payload?: T, type?: string): Promise<T> {
    const headers = new AxiosHeaders();
    if (type) {
      headers.setContentType(type);
    }
    const {data} = await this.client({
      method,
      url,
      data: payload,
      headers,
    })
    return data;
  }
}

export default HttpClient.Instance;