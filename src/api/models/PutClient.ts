// src/api/FormPostClient.ts
import HttpClient from "./HttpClient";

export default class PutClient extends HttpClient {
  async put<T>(url: string, data: FormData, type: string): Promise<T> {
    const res = await this.request<T>({
      method: "PUT",
      url,
      data,
      headers: {
        "Content-Type": type,
      },
    });
    return res.data;
  }
}