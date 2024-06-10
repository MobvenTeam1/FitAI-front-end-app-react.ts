import axios from "axios";
import { getLocalStorage } from "../utils/getLocalStorage";

// BASE_URL tanımı, gerçek URL'nizle değiştirin
export const BASE_URL = "https://talent.mobven.com:5041/api/";
export const tempUrl = "https://fakestoreapi.com";

// Axios istemcisini özelleştir
export const serviceAxios = axios.create({ baseURL: BASE_URL });

serviceAxios.interceptors.request.use((config) => {
  const accessToken = getLocalStorage("accessToken");
  const registerToken = getLocalStorage("registerToken");
  if (accessToken || registerToken) {
    config.headers.Authorization = `Bearer ${registerToken || accessToken}`;
  }
  return config;
});

serviceAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Hata yönetimi için yer tutucu
    // switch (error.code) {
    //   case 401:
    //     // Token yenileme veya kullanıcıyı çıkış işlemi yapabilirsiniz
    //     break;
    //   default:
    //     break;
    // }
    return Promise.reject(error);
  }
);
