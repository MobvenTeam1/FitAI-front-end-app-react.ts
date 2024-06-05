// src/api/FormPostClient.ts
import HttpClient from "./HttpClient";

export default class PostClient extends HttpClient {
  async post<T>(url: string, data: FormData, type: string): Promise<T> {
    const res = await this.request<T>({
      method: "POST",
      url,
      data,
      headers: {
        "Content-Type": type,
      },
    });
    return res.data;
  }
}